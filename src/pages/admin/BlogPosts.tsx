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
import { Plus, Pencil, Trash2, ExternalLink, Filter, Eye, Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const statusOptions = [
  { label: "Todos", value: "all" },
  { label: "Publicados", value: "publicado" },
  { label: "Rascunhos", value: "rascunho" },
  { label: "Agendados", value: "agendado" },
  { label: "Arquivados", value: "arquivado" },
];

const pageSizeOptions = [10, 20, 50];

const BlogPosts = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Busca posts do Supabase
  const { data: posts, isLoading, refetch } = useQuery({
    queryKey: ["admin-posts", search, status, page, pageSize],
    queryFn: async () => {
      let query = supabase.from("blog_posts").select("*", { count: "exact" });
      if (status !== "all") query = query.eq("status", status);
      if (search) query = query.ilike("title", `%${search}%`);
      query = query.order("created_at", { ascending: false });
      query = query.range((page - 1) * pageSize, page * pageSize - 1);
      const { data, error, count } = await query;
      if (error) throw error;
      return { data, count };
    },
  });

  // Ações em massa
  const handleBulkDelete = async () => {
    if (!selected.length) return;
    if (!confirm("Excluir os posts selecionados?")) return;
    const { error } = await supabase.from("blog_posts").delete().in("id", selected);
    if (error) toast.error("Erro ao excluir posts");
    else {
      toast.success("Posts excluídos!");
      setSelected([]);
      refetch();
    }
  };
  const handleBulkDraft = async () => {
    if (!selected.length) return;
    const { error } = await supabase.from("blog_posts").update({ status: "rascunho" }).in("id", selected);
    if (error) toast.error("Erro ao mover para rascunho");
    else {
      toast.success("Posts movidos para rascunho!");
      setSelected([]);
      refetch();
    }
  };
  const handleBulkPublish = async () => {
    if (!selected.length) return;
    const { error } = await supabase.from("blog_posts").update({ status: "publicado" }).in("id", selected);
    if (error) toast.error("Erro ao publicar posts");
    else {
      toast.success("Posts publicados!");
      setSelected([]);
      refetch();
    }
  };

  // Ações individuais
  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast.error("Erro ao excluir post");
    else {
      toast.success("Post excluído com sucesso");
      refetch();
    }
  };
  const handleDuplicate = async (post: any) => {
    const { error } = await supabase.from("blog_posts").insert({
      ...post,
      id: undefined,
      slug: post.slug + "-copy",
      title: post.title + " (Cópia)",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: "rascunho"
    });
    if (error) toast.error("Erro ao duplicar post");
    else {
      toast.success("Post duplicado!");
      refetch();
    }
  };

  // Seleção múltipla
  const handleSelect = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
  };
  const handleSelectAll = () => {
    if (Array.isArray(posts?.data) && posts.data.length && selected.length !== posts.data.length) {
      setSelected(posts.data.map((p: any) => p.id));
    } else {
      setSelected([]);
    }
  };

  // Paginação
  const totalPages = posts?.count && pageSize ? Math.max(1, Math.ceil(posts.count / pageSize)) : 1;

  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Blog Posts</h2>
          <p className="text-gray-500 mt-1">Gerencie todos os artigos publicados no site.</p>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Buscar posts..."
            className="border rounded px-3 py-2 text-sm bg-white shadow-sm focus:outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button onClick={() => window.location.href = '/admin/blog/new'} className="bg-orange-500 hover:bg-orange-600 text-white">
            <Plus className="mr-2 h-4 w-4" /> Novo Post
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-2">
        {statusOptions.map(opt => (
          <Button
            key={opt.value}
            variant={status === opt.value ? "default" : "outline"}
            className={status === opt.value ? "bg-blue-700 text-white" : ""}
            onClick={() => setStatus(opt.value)}
          >
            <Filter className="mr-1 h-4 w-4" /> {opt.label}
          </Button>
        ))}
      </div>

      {/* Barra de ações rápidas */}
      <div className="flex flex-wrap gap-2 items-center mb-2">
        <Button variant="outline" onClick={handleSelectAll}>
          Selecionar todos
        </Button>
        <Button variant="outline" onClick={handleBulkDelete} disabled={!selected.length} className="text-red-600">
          Excluir selecionados
        </Button>
        <Button variant="outline" onClick={handleBulkDraft} disabled={!selected.length}>
          Mover para rascunho
        </Button>
        <Button variant="outline" onClick={handleBulkPublish} disabled={!selected.length} className="text-green-700">
          Publicar em massa
        </Button>
        <span className="ml-2 text-sm text-gray-500">{selected.length} selecionado(s)</span>
      </div>

      {/* Tabela de posts */}
      <div className="rounded-lg border bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input
                  type="checkbox"
                  checked={Array.isArray(posts?.data) && posts.data.length && selected.length === posts.data.length}
                  onChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Miniatura</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Autor</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-24">Carregando...</TableCell>
              </TableRow>
            ) : Array.isArray(posts?.data) && posts.data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-32 text-muted-foreground">Nenhum post encontrado.</TableCell>
              </TableRow>
            ) : (
              Array.isArray(posts?.data) && posts.data.map((post: any) => (
                <TableRow key={post.id} className={selected.includes(post.id) ? "bg-blue-50" : ""}>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={selected.includes(post.id)}
                      onChange={() => handleSelect(post.id)}
                    />
                  </TableCell>
                  <TableCell>
                    {post.cover_image ? (
                      <img src={post.cover_image} alt="thumb" className="w-16 h-10 object-cover rounded" />
                    ) : (
                      <span className="text-xs text-gray-400">Sem imagem</span>
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {post.title}
                  </TableCell>
                  <TableCell>
                    <Badge variant={post.status === "publicado" ? "default" : post.status === "rascunho" ? "secondary" : "outline"}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {post.published_at ? format(new Date(post.published_at), 'dd/MM/yyyy') : post.created_at ? format(new Date(post.created_at), 'dd/MM/yyyy') : "-"}
                  </TableCell>
                  <TableCell>
                    {post.author || "-"}
                  </TableCell>
                  <TableCell>
                    {post.category || "-"}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/blog/${post.slug}`} target="_blank">
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/admin/blog/edit/${post.id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDuplicate(post)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
          <Button variant="outline" size="sm" disabled={page === 1} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="h-4 w-4" /> Anterior
          </Button>
          <span className="text-sm">Página {page} de {totalPages}</span>
          <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Próximo <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm">Itens por página:</span>
          <select
            className="border rounded px-2 py-1 text-sm bg-white shadow-sm focus:outline-none"
            value={pageSize}
            onChange={e => { setPageSize(Number(e.target.value)); setPage(1); }}
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

export default BlogPosts;
