import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Upload } from 'lucide-react';

const CATEGORIES = [
  "Residencial",
  "Comercial",
  "Reforma",
  "Pintura",
  "Telhado",
  "Paisagismo",
  "Outros"
];

const ProjectEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Residencial',
    completion_date: '',
    image_url: '',
    is_featured: false
  });

  useEffect(() => {
    if (isEditing) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          title: data.title,
          description: data.description || '',
          category: data.category || 'Residencial',
          completion_date: data.completion_date || '',
          image_url: data.image_url || '',
          is_featured: data.is_featured || false
        });
      }
    } catch (error) {
      toast.error('Erro ao carregar projeto');
      navigate('/admin/projects');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `project-${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath);

      setFormData(prev => ({ ...prev, image_url: publicUrl }));
      toast.success('Imagem carregada com sucesso!');
    } catch (error) {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const projectData = {
        ...formData,
        completion_date: formData.completion_date || null
      };

      if (isEditing) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', id);
        if (error) throw error;
        toast.success('Projeto atualizado!');
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);
        if (error) throw error;
        toast.success('Projeto criado!');
      }
      
      navigate('/admin/projects');
    } catch (error: any) {
      toast.error(error.message || 'Erro ao salvar projeto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-10">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/admin/projects')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">{isEditing ? 'Editar Projeto' : 'Novo Projeto'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-2">
              <Label>Título do Projeto</Label>
              <Input 
                value={formData.title} 
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))} 
                placeholder="Ex: Reforma Cozinha Moderna" 
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Categoria</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={value => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Data de Conclusão</Label>
                <Input 
                  type="date"
                  value={formData.completion_date} 
                  onChange={e => setFormData(prev => ({ ...prev, completion_date: e.target.value }))} 
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Descrição</Label>
              <Textarea 
                className="min-h-[150px]" 
                value={formData.description} 
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))} 
                placeholder="Detalhes sobre o que foi feito..." 
              />
            </div>

            <div className="space-y-2">
              <Label>Imagem do Projeto</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  disabled={uploading}
                />
                {formData.image_url ? (
                  <img src={formData.image_url} alt="Preview" className="w-full h-64 object-cover rounded-md" />
                ) : (
                  <div className="flex flex-col items-center py-8">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">Clique para fazer upload da foto principal</span>
                  </div>
                )}
                {uploading && (
                  <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                    <Loader2 className="h-6 w-6 animate-spin" />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
              <div className="space-y-0.5">
                <Label>Destaque na Home</Label>
                <p className="text-sm text-muted-foreground">
                  Este projeto deve aparecer na página inicial?
                </p>
              </div>
              <Switch 
                checked={formData.is_featured}
                onCheckedChange={checked => setFormData(prev => ({ ...prev, is_featured: checked }))}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isEditing ? 'Salvar Projeto' : 'Criar Projeto'}
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default ProjectEditor;
