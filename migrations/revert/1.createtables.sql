-- Revert collectio-scripts:createuser from pg

BEGIN;

DROP TABLE IF EXISTS "user", "mediatype", "list", "media", "review"; 

COMMIT;