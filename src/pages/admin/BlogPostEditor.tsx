import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Upload } from 'lucide-react';

const BlogPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    cover_image: '',
    is_published: false
  });

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || '',
          content: data.content || '',
          cover_image: data.cover_image || '',
          is_published: data.is_published || false
        });
      }
    } catch (error) {
      toast.error('Erro ao carregar post');
      navigate('/admin/blog');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, cover_image: publicUrl }));
      toast.success('Imagem carregada com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setUploading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: !isEditing ? generateSlug(title) : prev.slug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const postData = {
        ...formData,
        updated_at: new Date().toISOString(),
        published_at: formData.is_published ? new Date().toISOString() : null
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);
        if (error) throw error;
        toast.success('Post atualizado!');
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);
        if (error) throw error;
        toast.success('Post criado!');
      }
      
      navigate('/admin/blog');
    } catch (error: any) {
      toast.error(error.message || 'Erro ao salvar post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/admin/blog')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">{isEditing ? 'Editar Post' : 'Novo Post'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label>Título</Label>
                  <Input 
                    value={formData.title} 
                    onChange={handleTitleChange} 
                    placeholder="Digite o título do post..." 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Slug (URL amigável)</Label>
                  <Input 
                    value={formData.slug} 
                    onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))} 
                    placeholder="titulo-do-post"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Conteúdo</Label>
                  <Textarea 
                    className="min-h-[400px] font-mono" 
                    value={formData.content} 
                    onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))} 
                    placeholder="Escreva seu post aqui (suporta HTML básico)..." 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Publicado?</Label>
                  <Switch 
                    checked={formData.is_published}
                    onCheckedChange={checked => setFormData(prev => ({ ...prev, is_published: checked }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Imagem de Capa</Label>
                  <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      disabled={uploading}
                    />
                    {formData.cover_image ? (
                      <img src={formData.cover_image} alt="Preview" className="w-full h-32 object-cover rounded-md" />
                    ) : (
                      <div className="flex flex-col items-center py-4">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">Clique para upload</span>
                      </div>
                    )}
                    {uploading && (
                      <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Resumo</Label>
                  <Textarea 
                    className="h-24" 
                    value={formData.excerpt} 
                    onChange={e => setFormData(prev => ({ ...prev, excerpt: e.target.value }))} 
                    placeholder="Um breve resumo para aparecer na lista..." 
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isEditing ? 'Atualizar Post' : 'Criar Post'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogPostEditor;
