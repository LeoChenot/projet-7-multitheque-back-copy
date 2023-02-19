BEGIN;

ALTER TABLE IF EXISTS public.media
  DROP CONSTRAINT media_mediatype_fkey;  

COMMIT;

