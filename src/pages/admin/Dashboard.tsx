

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Briefcase, Users, PlusCircle, Edit, Mail } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartLegend } from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const periodOptions = [
  { label: "Últimos 7 dias", value: "7d" },
  { label: "Este mês", value: "month" },
  { label: "Últimos 30 dias", value: "30d" },
];

const Dashboard = () => {
  const [period, setPeriod] = useState("month");

  // Datas para filtro de período
  function getPeriodDates(period: string) {
    const now = new Date();
    let start: Date;
    if (period === "7d") {
      start = new Date(now);
      start.setDate(now.getDate() - 7);
    } else if (period === "30d") {
      start = new Date(now);
      start.setDate(now.getDate() - 30);
    } else {
      // Este mês
      start = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    return { start: start.toISOString(), end: now.toISOString() };
  }

  // Buscar dados reais do Supabase
  const { data: stats } = useQuery({
    queryKey: ["admin-stats", period],
    queryFn: async () => {
      const { start, end } = getPeriodDates(period);

      // Posts
      const postsRes = await supabase
        .from("blog_posts")
        .select("id, status, created_at, scheduled_at", { count: "exact", head: false });
      const posts = postsRes.data || [];
      const postsPublicados = posts.filter(p => p.status === "publicado").length;
      const postsRascunho = posts.filter(p => p.status === "rascunho").length;
      const postsAgendado = posts.filter(p => p.status === "agendado").length;
      const postsPeriodo = posts.filter(p => p.created_at >= start && p.created_at <= end).length;
      // Variação: compara com período anterior
      const prevStart = new Date(new Date(start).getTime() - (new Date(end).getTime() - new Date(start).getTime()));
      const prevEnd = start;
      const postsPrevPeriodo = posts.filter(p => p.created_at >= prevStart.toISOString() && p.created_at < prevEnd).length;
      const postsDelta = postsPrevPeriodo ? Math.round(((postsPeriodo - postsPrevPeriodo) / postsPrevPeriodo) * 100) : 0;

      // Projetos
      const projectsRes = await supabase
        .from("projects")
        .select("id, status, created_at", { count: "exact", head: false });
      const projects = projectsRes.data || [];
      const projectsAtivos = projects.filter(p => p.status === "publicado").length;
      const projectsEdicao = projects.filter(p => p.status === "edicao").length;
      const projectsPeriodo = projects.filter(p => p.created_at >= start && p.created_at <= end).length;
      const projectsPrevPeriodo = projects.filter(p => p.created_at >= prevStart.toISOString() && p.created_at < prevEnd).length;
      const projectsDelta = projectsPrevPeriodo ? Math.round(((projectsPeriodo - projectsPrevPeriodo) / projectsPrevPeriodo) * 100) : 0;

      // Visitas
      const visitsRes = await supabase
        .from("visits")
        .select("id, timestamp", { count: "exact", head: false })
        .gte("timestamp", start)
        .lte("timestamp", end);
      const visitsPeriodo = visitsRes.count || 0;
      // Variação visitas
      const visitsPrevRes = await supabase
        .from("visits")
        .select("id, timestamp", { count: "exact", head: false })
        .gte("timestamp", prevStart.toISOString())
        .lt("timestamp", prevEnd);
      const visitsPrevPeriodo = visitsPrevRes.count || 0;
      const viewsDelta = visitsPrevPeriodo ? Math.round(((visitsPeriodo - visitsPrevPeriodo) / visitsPrevPeriodo) * 100) : 0;

      // Contatos (leads)
      const leadsRes = await supabase
        .from("contacts")
        .select("id, created_at, responded", { count: "exact", head: false })
        .gte("created_at", start)
        .lte("created_at", end);
      const leads = leadsRes.data || [];
      const leadsPeriodo = leads.length;
      const leadsPrevRes = await supabase
        .from("contacts")
        .select("id, created_at", { count: "exact", head: false })
        .gte("created_at", prevStart.toISOString())
        .lt("created_at", prevEnd);
      const leadsPrevPeriodo = leadsPrevRes.data ? leadsPrevRes.data.length : 0;
      const contactsDelta = leadsPrevPeriodo ? Math.round(((leadsPeriodo - leadsPrevPeriodo) / leadsPrevPeriodo) * 100) : 0;

      // Taxa de resposta
      const responded = leads.filter(l => l.responded).length;
      const responseRate = leadsPeriodo ? Math.round((responded / leadsPeriodo) * 100) : 0;

      // Atividade recente
      const recentActivity = [];
      // Últimos contatos
      for (const lead of leads.slice(0, 3)) {
        recentActivity.push({
          type: "contato",
          icon: Users,
          text: `Novo contato recebido: ${lead.name || "-"} (${lead.email || "-"})`,
          date: lead.created_at ? new Date(lead.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) : "",
        });
      }
      // Últimos projetos
      for (const project of projects.slice(0, 2)) {
        recentActivity.push({
          type: "projeto",
          icon: Briefcase,
          text: `Novo projeto publicado: ${project.title || "Projeto"}`,
          date: project.created_at ? new Date(project.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) : "",
        });
      }
      // Últimos posts
      for (const post of posts.slice(0, 2)) {
        recentActivity.push({
          type: "post",
          icon: FileText,
          text: `Novo post criado: ${post.title || "Post"}`,
          date: post.created_at ? new Date(post.created_at).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }) : "",
        });
      }

      return {
        posts: postsPublicados,
        postsDelta,
        projects: projectsAtivos,
        projectsDelta,
        views: visitsPeriodo,
        viewsDelta,
        contacts: leadsPeriodo,
        contactsDelta,
        responseRate,
        contentSummary: [
          { label: "Blog", value: `${postsPublicados} publicados • ${postsRascunho} rascunhos • ${postsAgendado} agendado(s)` },
          { label: "Projetos", value: `${projectsAtivos} publicados • ${projectsEdicao} em edição` },
        ],
        recentActivity,
      };
    },
  });

  // Buscar dados para gráfico de visitas
  const { data: visitsChart } = useQuery({
    queryKey: ["visits-chart", period],
    queryFn: async () => {
      const { start, end } = getPeriodDates(period);
      // Busca visitas agrupadas por dia
      const res = await supabase
        .from("visits")
        .select("timestamp")
        .gte("timestamp", start)
        .lte("timestamp", end);
      const visits = res.data || [];
      // Agrupa por dia
      const byDay = {};
      visits.forEach(v => {
        const day = new Date(v.timestamp).toLocaleDateString("pt-BR");
        byDay[day] = (byDay[day] || 0) + 1;
      });
      // Ordena por data
      const chartData = Object.entries(byDay).map(([date, count]) => ({ date, count }));
      chartData.sort((a, b) => new Date(a.date) - new Date(b.date));
      return chartData;
    },
  });
  const metricCards = [
    {
      title: "Total de Posts",
      value: stats?.posts ?? "-",
      subtitle: "Comparado ao mês anterior",
      delta: stats?.postsDelta ?? 0,
      icon: FileText,
      color: "text-blue-700",
    },
    {
      title: "Projetos publicados",
      value: stats?.projects ?? "-",
      subtitle: "Projetos ativos no portfólio",
      delta: stats?.projectsDelta ?? 0,
      icon: Briefcase,
      color: "text-orange-600",
    },
    {
      title: "Visitas (mês)",
      value: stats?.views ?? "-",
      subtitle: "Total de visitas no período selecionado",
      delta: stats?.viewsDelta ?? 0,
      icon: Eye,
      color: "text-cyan-700",
    },
    {
      title: "Leads / Contatos",
      value: stats?.contacts ?? "-",
      subtitle: "Novos contatos recebidos pelo formulário do site",
      delta: stats?.contactsDelta ?? 0,
      icon: Users,
      color: "text-green-700",
    },
    {
      title: "Taxa de resposta",
      value: `${stats?.responseRate ?? "-"}%`,
      subtitle: "Contatos respondidos / recebidos",
      delta: null,
      icon: Mail,
      color: "text-purple-700",
    },
  ];

  // Atalhos rápidos
  const quickActions = [
    {
      label: "Novo Post de Blog",
      icon: PlusCircle,
      description: "Criar um novo artigo para o blog",
      color: "bg-orange-500 hover:bg-orange-600 text-white",
    },
    {
      label: "Novo Projeto",
      icon: Briefcase,
      description: "Adicionar um novo projeto ao portfólio",
      color: "bg-blue-700 hover:bg-blue-800 text-white",
    },
    {
      label: "Editar Conteúdo do Site",
      icon: Edit,
      description: "Alterar textos e imagens do site",
      color: "bg-cyan-700 hover:bg-cyan-800 text-white",
    },
    {
      label: "Ver Contatos",
      icon: Users,
      description: "Visualizar todos os leads recebidos",
      color: "bg-green-700 hover:bg-green-800 text-white",
    },
  ];

  // Resumo de conteúdo
  const contentSummary = stats?.contentSummary ?? [];

  // Atividade recente
  const recentActivity = stats?.recentActivity ?? [];

  return (
    <div>
      {/* Cabeçalho do dashboard */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">Dashboard</h2>
          <p className="text-gray-500 mt-1">Visão geral rápida da performance do site e dos conteúdos.</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            className="border rounded px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none"
            value={period}
            onChange={e => setPeriod(e.target.value)}
          >
            {periodOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {metricCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="rounded-lg shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-700">{card.title}</CardTitle>
                <Icon className={`h-5 w-5 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{card.value}</div>
                <div className="flex items-center gap-2 mt-1">
                  {card.delta !== null && (
                    <span className={`text-xs font-semibold ${card.delta >= 0 ? "text-green-600" : "text-red-600"}`}>
                      {card.delta >= 0 ? "▲" : "▼"} {Math.abs(card.delta)}%
                    </span>
                  )}
                  <span className="text-xs text-gray-500">{card.subtitle}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Visão Geral + Atividade Recente */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-8">
        <Card className="col-span-1 lg:col-span-4 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-900">Visão Geral</CardTitle>
            <p className="text-gray-500 text-sm">Gráfico de visitas e desempenho geral do site.</p>
          </CardHeader>
          <CardContent>
            <div className="h-[220px] flex items-center justify-center bg-gray-100 rounded">
              {visitsChart && visitsChart.length > 0 ? (
                <ChartContainer
                  config={{ visitas: { label: "Visitas", color: "#2563eb" } }}
                  className="w-full h-full"
                >
                  {({ ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid }) => (
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={visitsChart} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                        <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                        <Tooltip content={<ChartTooltip />} />
                        <Legend content={<ChartLegend />} />
                        <Line type="monotone" dataKey="count" stroke="#2563eb" strokeWidth={2} dot={false} name="Visitas" />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </ChartContainer>
              ) : (
                <span className="text-gray-400">Sem dados de visitas para o período</span>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">Filtrar por origem</Button>
              <Button variant="outline" size="sm">Página mais acessada</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 lg:col-span-3 rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-900">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recentActivity.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-center">
                    <Icon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="flex-1 text-gray-700 text-sm">{item.text}</span>
                    <span className="text-xs text-gray-500 ml-2">{item.date}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Atalhos Rápidos */}
      <div className="mb-8">
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-900">Atalhos Rápidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className={`flex flex-col items-start p-4 h-full w-full text-left gap-2 rounded-lg transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${action.color}`}
                  >
                    <Icon className="h-6 w-6 mb-1" />
                    <span className="font-semibold text-base">{action.label}</span>
                    <span className="text-xs opacity-80">{action.description}</span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Resumo de Conteúdo */}
      <div className="mb-8">
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-900">Resumo de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contentSummary.map((item, idx) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-semibold text-blue-900">{item.label}:</span>
                  <span className="text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
