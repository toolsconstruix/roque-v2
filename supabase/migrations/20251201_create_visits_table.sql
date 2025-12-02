-- Supabase migration: create visits table
CREATE TABLE IF NOT EXISTS public.visits (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  timestamp timestamptz NOT NULL,
  path text NOT NULL,
  user_agent text
);

-- Index para consultas por mês
CREATE INDEX IF NOT EXISTS visits_timestamp_idx ON public.visits (timestamp);
