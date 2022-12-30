-- Deploy collectio-scripts:tablesseeding to pg

BEGIN;

INSERT INTO mediatype(mediaTypeName)
  VALUES
  ('movie'),
  ('series'),
  ('book'),
  ('video_game');


INSERT INTO list(listName)
  VALUES
  ('check'),
  ('wishlist'),
  ('favorite'),
  ('in_progress');


INSERT INTO "user"(email, username, hashedpassword, firstName, lastName)
  VALUES
  ('toto@email.com', 'toto', 'azerty', 'toto', 'nobody'),
  ('tutu@email.com', 'tutu', 'azerty', 'tutu', 'nobody'),
  ('chuck@email.com', 'chuck', 'azerty', 'chuck', 'norris'),
  ('batman@email.com', 'batman', 'azerty', 'bruce', 'wayne'),
  ('robin@email.com', 'greenrobin', 'azerty', 'robin', 'wood');


INSERT INTO "media"(mediaType, APImediaID, title, coverURL)
  VALUES
  (3, 'rydhfvuyikjfttugv', 'sur la piste animale', 'tugjfviuyodxycgujh'),
  (1, 'bervbevrber', 'joker', 'tdgcgvhjbughv'),
  (1, 'bntrntrbthfg', 'docteur strange', 'uukgbvhgftyfvjkgvg'),
  (1, 'yikjzgrfttugcez', 'mulholland drive', 'tntbrvvzdcs'),
  (1, 'zhtyjuvhfcvhbkj', 'dead man', 'nbhbgcyrtufguio'),
  (3, 'poihujvtxtcytujhg', 'walden', 'polhwtyfchg'),
  (4, 'wxtrygjhgbyub', 'metal gear solid', 'wxrtgfaguyeughdiu'),
  (2, 'afvbduapxavyuatd', 'fargo', 'pociusgucsfgv'),
  (2, 'hsvtucuizrhvbziru', 'breaking bad', 'rzdfcevdvuey');


INSERT INTO "review"(userId, mediaId, note, comment, listID)
  VALUES
    (1, 1, 4.5, 'génial', 3),
    (1, 3, 4, 'top', 1),
    (1, 4, 1.5, 'nul', 1),
    (2, 3, 5, 'jadore', 3),
    (2, 8, 2, 'bof bof', 4),
    (3, 9, 3, 'mouais', 1),
    (3, 7, 4, 'awesome', 3),
    (3, 8, 5, 'crazy', 3),
    (3, 4, 1.5, 'pfffff', 4),
    (4, 2, 0.5, 'passons...', 2),
    (4, 7, 0, 'quelle bouse', 1),
    (5, 8, 4.5, 'woooooahh', 1),
    (5, 7, 3.5, 'incroyable', 1),
    (5, 5, 2.5, 'very moyen', 2);

COMMIT;
