import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Eye, Briefcase, Users } from "lucide-react";

const Dashboard = () => {
  // Fetch counts
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [posts, projects] = await Promise.all([
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('projects').select('*', { count: 'exact', head: true }),
      ]);
      
      return {
        posts: posts.count || 0,
        projects: projects.count || 0,
        views: 1250, // Placeholder for now
        contacts: 45 // Placeholder for now
      };
    }
  });

  const cards = [
    { title: "Total Posts", value: stats?.posts || 0, icon: FileText, color: "text-blue-500" },
    { title: "Projetos", value: stats?.projects || 0, icon: Briefcase, color: "text-green-500" },
    { title: "Visitas (Mês)", value: stats?.views || 0, icon: Eye, color: "text-yellow-500" },
    { title: "Contatos", value: stats?.contacts || 0, icon: Users, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity Area - Placeholder */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Visão Geral</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-center justify-center text-muted-foreground">
              Gráfico de Visitas (Em breve)
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">Novo contato</p>
                  <p className="text-sm text-muted-foreground">
                    maria@example.com
                  </p>
                </div>
                <div className="ml-auto font-medium">Hoje</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
