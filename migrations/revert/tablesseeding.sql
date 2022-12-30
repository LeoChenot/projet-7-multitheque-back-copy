-- Revert collectio-scripts:tablesseeding from pg

BEGIN;

TRUNCATE TABLE "user", media, review, mediatype, list RESTART IDENTITY CASCADE;

COMMIT;
