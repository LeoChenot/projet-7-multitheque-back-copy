BEGIN;

TRUNCATE TABLE media RESTART IDENTITY CASCADE;

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

COMMIT;