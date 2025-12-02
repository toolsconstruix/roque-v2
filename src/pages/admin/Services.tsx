import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Eye, Pencil, Trash2, ArrowUpDown, Filter, GripVertical } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';

const Services = () => {
  // Modal state
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const pageSizeOptions = [10, 20, 50, 100];

  // Supabase: fetch services
  const { data: services, isLoading, error, refetch } = useQuery({
    queryKey: ['admin-services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('order', { ascending: true });
      if (error) throw error;
      return data;
    }
  });

  // Delete function
  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await supabase.from('services').delete().eq('id', deleteId);
    setDeleting(false);
    setDeleteId(null);
    refetch();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Serviços</h1>
        <Button asChild>
          <Link to="/admin/services/new">
            <Plus className="mr-2 h-4 w-4" /> Novo Serviço
          </Link>
        </Button>
      </div>

      {/* Barra de ações rápidas */}
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <Button variant="outline">Selecionar todos</Button>
        <Button variant="outline" className="text-green-700">Ativar selecionados</Button>
        <Button variant="outline" className="text-gray-500">Desativar selecionados</Button>
        <Button variant="outline" className="text-red-600">Excluir selecionados</Button>
        <span className="ml-2 text-sm text-gray-500">0 selecionado(s)</span>
      </div>

      {/* Tabela de serviços */}
      <div className="rounded-lg border bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Ícone</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Descrição Curta</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Ordem</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-24">Carregando...</TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-24 text-red-500">Erro ao carregar serviços</TableCell>
              </TableRow>
            ) : services?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-32 text-muted-foreground">Nenhum serviço cadastrado. Adicione o primeiro!</TableCell>
              </TableRow>
            ) : (
              services?.map((service) => (
                <TableRow key={service.id}>
                  <TableCell>
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>
                    {/* TODO: Render icon from service.icon or fallback */}
                    <GripVertical className="h-5 w-5 text-blue-700" />
                  </TableCell>
                  <TableCell className="font-medium">{service.title}</TableCell>
                  <TableCell>{service.short_desc}</TableCell>
                  <TableCell>
                    <Badge variant={service.status === "ativo" ? "default" : "secondary"}>
                      {service.status === "ativo" ? "Ativo" : "Inativo"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {service.updated_at ? new Date(service.updated_at).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 cursor-move">
                      <ArrowUpDown className="h-4 w-4 text-gray-400" />
                      {service.order}
                    </span>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/services/${service.id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Dialog open={deleteId === service.id} onOpenChange={open => setDeleteId(open ? service.id : null)}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <h3 className="text-lg font-bold mb-2">Confirmar exclusão</h3>
                        <p className="mb-4">Tem certeza que deseja excluir o serviço <span className="font-semibold">{service.title}</span>? Esta ação não pode ser desfeita.</p>
                        <div className="flex gap-2 justify-end">
                          <DialogClose asChild>
                            <Button variant="outline" disabled={deleting}>Cancelar</Button>
                          </DialogClose>
                          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                            {deleting ? "Excluindo..." : "Excluir"}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="sm" disabled>
            Anterior
          </Button>
          <span className="text-sm">Página 1 de 1</span>
          <Button variant="outline" size="sm" disabled>
            Próximo
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm">Itens por página:</span>
          <select
            className="border rounded px-2 py-1 text-sm bg-white shadow-sm focus:outline-none"
            value={pageSize}
            onChange={e => setPageSize(Number(e.target.value))}
          >
            {pageSizeOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Services;
