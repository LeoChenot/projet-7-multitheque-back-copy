BEGIN;

ALTER TABLE IF EXISTS public.media
ALTER COLUMN title DROP NOT NULL

ALTER TABLE public.media 
ALTER COLUMN coverurl DROP NOT NULL;

COMMIT;