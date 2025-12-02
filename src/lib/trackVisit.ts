import { supabase } from "@/integrations/supabase/client";

export async function trackVisit() {
  try {
    await supabase.from("visits").insert({
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      user_agent: navigator.userAgent
    });
  } catch (err) {
    // Silenciar erros para não impactar o usuário
  }
}
