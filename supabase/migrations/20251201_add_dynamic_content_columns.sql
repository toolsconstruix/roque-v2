
-- Supabase migration: add dynamic content columns to services table
DO $$
BEGIN
  -- Add benefits column (JSONB array of strings)
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'benefits') THEN
    ALTER TABLE public.services ADD COLUMN benefits jsonb DEFAULT '[]'::jsonb;
  END IF;

  -- Add features column (JSONB array of strings) for "The Roque Approach"
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'features') THEN
    ALTER TABLE public.services ADD COLUMN features jsonb DEFAULT '[]'::jsonb;
  END IF;

  -- Add faqs column (JSONB array of objects {question, answer})
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'services' AND column_name = 'faqs') THEN
    ALTER TABLE public.services ADD COLUMN faqs jsonb DEFAULT '[]'::jsonb;
  END IF;
END$$;
