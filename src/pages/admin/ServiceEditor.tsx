import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

// TODO: Add icon selector, image upload, gallery, SEO fields

const ServiceEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  // States for all fields
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState("ativo");
  const [order, setOrder] = useState(0);
  const [showOnHome, setShowOnHome] = useState(false);
  const [showOnMenu, setShowOnMenu] = useState(false);
  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");
  const [benefits, setBenefits] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>([]);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  // Load service data if editing
  useEffect(() => {
    if (isEdit && id) {
      (async () => {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('id', id)
          .single();
        if (data) {
          setTitle(data.title || "");
          setShortDesc(data.short_desc || "");
          setDescription(data.description || "");
          setSlug(data.slug || "");
          setImage(data.image || "");
          setStatus(data.status || "ativo");
          setOrder(data.order || 0);
          setShowOnHome(data.show_on_home || false);
          setShowOnMenu(data.show_on_menu || false);
          setSeoTitle(data.seo_title || "");
          setSeoDescription(data.seo_description || "");
          setSeoKeywords(data.seo_keywords || "");
          setBenefits(data.benefits || []);
          setFeatures(data.features || []);
          setFaqs(data.faqs || []);
        }
      })();
    }
  }, [isEdit, id]);

  const handleSave = async (publish = false) => {
    setIsSaving(true);
    const payload = {
      title,
      short_desc: shortDesc,
      description,
      slug,
      image,
      status: publish ? "ativo" : status,
      order,
      show_on_home: showOnHome,
      show_on_menu: showOnMenu,
      seo_title: seoTitle,
      seo_description: seoDescription,
      seo_keywords: seoKeywords,
      benefits,
      features,
      faqs,
      updated_at: new Date().toISOString(),
    };

    try {
      if (isEdit && id) {
        // Update existing service
        const { error } = await supabase
          .from('services')
          .update(payload)
          .eq('id', id);
        if (!error) navigate('/admin/services');
      } else {
        // Insert new service
        const { error } = await supabase
          .from('services')
          .insert({ ...payload, created_at: new Date().toISOString() });
        if (!error) navigate('/admin/services');
      }
    } catch (error) {
      console.error("Error saving service:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const addBenefit = () => setBenefits([...benefits, ""]);
  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index] = value;
    setBenefits(newBenefits);
  };
  const removeBenefit = (index: number) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const addFeature = () => setFeatures([...features, ""]);
  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };
  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index] = { ...newFaqs[index], [field]: value };
    setFaqs(newFaqs);
  };
  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">{isEdit ? "Editar Serviço" : "Novo Serviço"}</h2>
          <p className="text-gray-500 mt-1">Preencha os campos para cadastrar ou editar um serviço.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)} disabled={isSaving}>Voltar para Serviços</Button>
          <Button onClick={() => handleSave(false)} disabled={isSaving}>
            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Salvar
          </Button>
          <Button onClick={() => handleSave(true)} className="bg-blue-700 text-white" disabled={isSaving}>
            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Salvar e Publicar
          </Button>
          <Button variant="secondary" disabled={isSaving}>Salvar como Rascunho</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Content */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Título do Serviço</label>
          <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Descrição curta</label>
          <Textarea value={shortDesc} onChange={e => setShortDesc(e.target.value)} placeholder="Descrição curta" />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Descrição completa</label>
          <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição completa" rows={6} />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Slug</label>
          <Input value={slug} onChange={e => setSlug(e.target.value)} placeholder="slug-automatico" />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Imagem principal</label>
          <input
            type="file"
            accept="image/*"
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded p-2"
            onChange={e => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                  setImage(ev.target?.result as string);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          {image && (
            <img src={image} alt="Preview" className="mt-2 rounded border w-40 h-32 object-cover" />
          )}

          {/* Dynamic Sections */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Benefícios ("Why Invest")</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input value={benefit} onChange={e => updateBenefit(index, e.target.value)} placeholder="Benefício" />
                <Button variant="destructive" size="icon" onClick={() => removeBenefit(index)}>X</Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addBenefit} className="mt-2">+ Adicionar Benefício</Button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Diferenciais ("The Roque Approach")</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input value={feature} onChange={e => updateFeature(index, e.target.value)} placeholder="Diferencial" />
                <Button variant="destructive" size="icon" onClick={() => removeFeature(index)}>X</Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addFeature} className="mt-2">+ Adicionar Diferencial</Button>
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Perguntas Frequentes (FAQ)</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2 mb-4 p-4 border rounded bg-gray-50">
                <Input value={faq.question} onChange={e => updateFaq(index, 'question', e.target.value)} placeholder="Pergunta" />
                <Textarea value={faq.answer} onChange={e => updateFaq(index, 'answer', e.target.value)} placeholder="Resposta" />
                <Button variant="destructive" size="sm" onClick={() => removeFaq(index)} className="mt-2">Remover FAQ</Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addFaq} className="mt-2">+ Adicionar FAQ</Button>
          </div>
        </div>

        {/* Right Column: Settings */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Badge variant={status === "ativo" ? "default" : "secondary"}>{status === "ativo" ? "Ativo" : "Inativo"}</Badge>
            <Switch checked={status === "ativo"} onCheckedChange={checked => setStatus(checked ? "ativo" : "inativo")} />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ordem de exibição</label>
          <Input type="number" value={order} onChange={e => setOrder(Number(e.target.value))} />
          <div className="flex items-center gap-2">
            <span>Exibir serviço na Home?</span>
            <Switch checked={showOnHome} onCheckedChange={setShowOnHome} />
          </div>
          <div className="flex items-center gap-2">
            <span>Exibir serviço no menu?</span>
            <Switch checked={showOnMenu} onCheckedChange={setShowOnMenu} />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Meta Title</label>
          <Input value={seoTitle} onChange={e => setSeoTitle(e.target.value)} />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Meta Description</label>
          <Textarea value={seoDescription} onChange={e => setSeoDescription(e.target.value)} />
          <label className="block text-sm font-medium text-gray-700 mb-1 mt-4">Keywords</label>
          <Input value={seoKeywords} onChange={e => setSeoKeywords(e.target.value)} />
          {/* TODO: Icon selector */}
        </div>
      </div>
    </div>
  );
};

export default ServiceEditor;
