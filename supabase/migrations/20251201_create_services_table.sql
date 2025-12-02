-- Supabase migration: create or update services table
CREATE TABLE IF NOT EXISTS public.services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  short_desc text,
  description text,
  slug text,
  image text,
  status text NOT NULL DEFAULT 'ativo',
  "order" integer NOT NULL DEFAULT 0,
  show_on_home boolean DEFAULT false,
  show_on_menu boolean DEFAULT false,
  seo_title text,
  seo_description text,
  seo_keywords text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Add missing columns if table already exists
DO $$
DECLARE
  col RECORD;
BEGIN
  FOR col IN SELECT * FROM (
    VALUES
      ('short_desc', 'text'),
      ('description', 'text'),
      ('slug', 'text'),
      ('image', 'text'),
      ('"order"', 'integer'),
      ('show_on_home', 'boolean'),
      ('show_on_menu', 'boolean'),
      ('seo_title', 'text'),
      ('seo_description', 'text'),
      ('seo_keywords', 'text'),
      ('created_at', 'timestamptz'),
      ('updated_at', 'timestamptz')
  ) AS t(colname, coltype)
  LOOP
    BEGIN
      EXECUTE format('ALTER TABLE public.services ADD COLUMN IF NOT EXISTS %s %s', col.colname, col.coltype);
    EXCEPTION WHEN duplicate_column THEN NULL;
    END;
  END LOOP;
END$$;
