import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Plus, Pencil, Trash2, Star } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const Projects = () => {
  const { data: projects, isLoading, refetch } = useQuery({
    queryKey: ['admin-projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este projeto?')) return;

    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Erro ao excluir projeto');
    } else {
      toast.success('Projeto excluído com sucesso');
      refetch();
    }
  };

  const toggleFeatured = async (project: any) => {
    const { error } = await supabase
      .from('projects')
      .update({ is_featured: !project.is_featured })
      .eq('id', project.id);

    if (error) {
      toast.error('Erro ao atualizar destaque');
    } else {
      refetch();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Projetos (Portfólio)</h2>
        <Link to="/admin/projects/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Projeto
          </Button>
        </Link>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead>Data Conclusão</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-24">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : projects?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center h-32 text-muted-foreground">
                  Nenhum projeto cadastrado. Adicione o primeiro!
                </TableCell>
              </TableRow>
            ) : (
              projects?.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    {project.image_url ? (
                      <img 
                        src={project.image_url} 
                        alt={project.title} 
                        className="w-16 h-12 object-cover rounded-md" 
                      />
                    ) : (
                      <div className="w-16 h-12 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">
                        Sem img
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      {project.title}
                      {project.is_featured && (
                        <Badge variant="secondary" className="text-yellow-600 bg-yellow-50">
                          <Star className="w-3 h-3 mr-1 fill-yellow-600" /> Destaque
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{project.category || 'Geral'}</Badge>
                  </TableCell>
                  <TableCell>
                    {project.completion_date && format(new Date(project.completion_date), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => toggleFeatured(project)}
                      title={project.is_featured ? "Remover destaque" : "Destacar"}
                    >
                      <Star className={`h-4 w-4 ${project.is_featured ? "fill-yellow-400 text-yellow-400" : "text-gray-400"}`} />
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/projects/edit/${project.id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Projects;
