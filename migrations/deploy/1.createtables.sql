
BEGIN;

DROP TABLE IF EXISTS "user", "mediatype", "list", "media", "review"; 

CREATE TABLE "user" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email text NOT NULL UNIQUE,
  username text NOT NULL UNIQUE,
  hashedPassword text NOT NULL,
  firstName text NOT NULL,
  lastName text NOT NULL,
  gender text,
  birthdayDate TIMESTAMPTZ,
  bio text,
  pictureURL text,
  createdAt TIMESTAMPTZ NOT NULL DEFAULT now(),
  updatedAt TIMESTAMPTZ NOT NULL DEFAULT now()
);


CREATE TABLE "mediatype" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  mediaTypeName text NOT NULL UNIQUE
);

CREATE TABLE "list" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  listName text NOT NULL UNIQUE
);


CREATE TABLE "media" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  mediaType INT REFERENCES media(id) NOT NULL,
  APImediaID text NOT NULL,
  title text,
  coverURL text,
  createdAt TIMESTAMPTZ NOT NULL DEFAULT now(),
  updatedAt TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE "review" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  userId INT REFERENCES "user"(id) NOT NULL,
  mediaId INT REFERENCES media(id) NOT NULL,
  note FLOAT,
  comment text,
  listId INT REFERENCES list(id) NOT NULL,
  consumptionDate TIMESTAMPTZ,
  createdAt TIMESTAMPTZ NOT NULL DEFAULT now(),
  updatedAt TIMESTAMPTZ NOT NULL DEFAULT now()
);


COMMIT;