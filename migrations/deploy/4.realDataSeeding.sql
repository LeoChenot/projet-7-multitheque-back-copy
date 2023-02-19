
BEGIN;

INSERT INTO "media"(mediaType, APImediaID, title, coverURL)
  VALUES
  (1, 'tt1375666', 'Inception', 'https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0112817', 'Dead Man', 'https://imdb-api.com/images/original/MV5BYTJlZmQ1OTAtODQzZi00NGIzLWI1MmEtZGE4NjFlOWRhODIyXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0075314', 'Taxi Driver', 'https://imdb-api.com/images/original/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0780504', 'Drive', 'https://imdb-api.com/images/original/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0477348', 'No Country for Old Men', 'https://imdb-api.com/images/original/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt10293406', 'The Power of the Dog', 'https://imdb-api.com/images/original/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt9231040', 'First Cow', 'https://imdb-api.com/images/original/MV5BMGUzMGEzM2UtMDg2Ny00Yjk1LTgxMTctMWI1ZGM0ZDBiYjgxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0062622', '2001: A Space Odyssey', 'https://imdb-api.com/images/original/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt1650048', 'Laurence Anyways', 'https://imdb-api.com/images/original/MV5BMjAyNjQzODUyMV5BMl5BanBnXkFtZTcwNTExOTIxOQ@@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0079944', 'Stalker', 'https://imdb-api.com/images/original/MV5BMDgwODNmMGItMDcwYi00OWZjLTgyZjAtMGYwMmI4N2Q0NmJmXkEyXkFqcGdeQXVyNzY1MTU0Njk@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0246578', 'Donnie Darko', 'https://imdb-api.com/images/original/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6751_AL_.jpg'),
  (1, 'tt0078788', 'Apocalypse Now', 'https://imdb-api.com/images/original/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6751_AL_.jpg'),
    
  (2, 'tt2802850', 'Fargo', 'https://imdb-api.com/images/original/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt6078096', 'High Maintenance', 'https://imdb-api.com/images/original/MV5BYTNiNjdjYmEtYTkwOC00ZWM0LWExOTktMjRmZjg4ZGZmNDJmXkEyXkFqcGdeQXVyMzU0NTM0Njc@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt0098936', 'Twin Peaks', 'https://imdb-api.com/images/original/MV5BMTExNzk2NjcxNTNeQTJeQWpwZ15BbWU4MDcxOTczOTIx._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt2861424', 'Rick and Morty', 'https://imdb-api.com/images/original/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt0903747', 'Breaking Bad', 'https://imdb-api.com/images/original/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt2356777', 'True Detective', 'https://imdb-api.com/images/original/MV5BMmRlYmE0Y2UtNDk2Yi00NzczLWEwZTEtZmE2OTcyYzcxYmU5XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt0213338', 'Cowboy Bebop', 'https://imdb-api.com/images/original/MV5BNGNlNjBkODEtZThlOC00YzUxLWI0MjMtMjk3YzJmMDFlNWZlXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt0287254', 'Normal People', 'https://imdb-api.com/images/original/MV5BZTk1ODc4ZjgtMmQxNi00ZTMwLWJhZmItMjdkZDljYTJkYzk4XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt4158110', 'Mr. Robot', 'https://imdb-api.com/images/original/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt9561862', 'Love, Death & Robots', 'https://imdb-api.com/images/original/MV5BYjEwOWQ0MjktMjZjNy00Mzc1LWE5NTItMDQ1Yjc0Zjk0NTBlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt0306414', 'The Wire', 'https://imdb-api.com/images/original/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_Ratio0.6751_AL_.jpg'),
  (2, 'tt2442560', 'Peaky Blinders', 'https://imdb-api.com/images/original/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_Ratio0.6751_AL_.jpg'),

  (3, 'Z_-cMgEACAAJ', 'Walden', 'not available'),
  (3, 'SkRrngEACAAJ', 'The Goldfinch', 'http://books.google.com/books/content?id=SkRrngEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71cNlwu0oG6CmE8Btgn0Vs31BMNmToVPYakqT0GxrX7y1QxizGIltxrH5quNeS2DycR3yVaYS4ZLD5MzjKFphelpnR0iZ4DASa4hODn7fkI7EOubvJalCvzrjEToWdPJ5GecE7-&source=gbs_api'),
  (3, 'NFQ7DwAAQBAJ', 'The Power of Now', 'http://books.google.com/books/publisher/content?id=NFQ7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73kGw16I2sSVBhzhj9l7aTD7tCPNSG71tQxFdE-Qgwcq2_4IoHjhGhMLLGe4m_NatbkRXN_CHdol_lvRbh748U12LtMX93G8n0_T_dqMzBqqxZZyOoG8rC8np9ZLx6IZozx4q41&source=gbs_api'),
  (3, '6mo6DwAAQBAJ', 'The Brothers Karamazov', 'http://books.google.com/books/publisher/content?id=6mo6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72wyp5owDvNPgbDa_aTA9f7KdTQVkY1NjbsczDRoN0TblydH3WoFZq0OQt5c9GEAuMggnT6zf26B-jb5-UlDqmXl-hQEqJG2wdFSQhv9xkdJVPpE1pHabWzUmghIaGZqN4UqLMf&source=gbs_api'),
  (3, 'yqeswztmtOQC', 'Portnoys Complaint', 'http://books.google.com/books/content?id=yqeswztmtOQC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70I7dfhByhoiahPbg-QfoXyj814EpiRP75vhReSMoGhcgbUZN15SIf_Eyzlr_mhW4KCda5Ycf_mAEhmMoehQqnlfRzQHXM8kOlNfvP1OirfXg7PwOqKs1LgLvW4grQFDMxMG1gu&source=gbs_api'),
  (3, 'WfxrfuDUAYgC', 'The Picture of Dorian Gray', 'http://books.google.com/books/content?id=WfxrfuDUAYgC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71T9GYbNlySAPz6QeOga53Az-SuhciYfnCBVJ2cYJTpVEZWElsMRuSi8BnwoME3A9ddG_zhESU62sQptvFP8xh5oWaDo31Fsu-4t3JuaORgZx_6C8nbZFSXHdp5Yv6Tl_8UHo8p&source=gbs_api'),
  (3, 'm3GzoAEACAAJ', 'The Catcher in the Rye', 'http://books.google.com/books/content?id=m3GzoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
  (3, 'zG9wDwAAQBAJ', 'The Myth of Sisyphus', 'http://books.google.com/books/content?id=zG9wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
  (3, 'VRfe-QG_ls4C', 'The New York Trilogy', 'http://books.google.com/books/content?id=VRfe-QG_ls4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
  (3, 'L2EQuwEACAAJ', 'Harry Potter and the Half-Blood Prince', 'http://books.google.com/books/content?id=L2EQuwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
  (3, 'pNF66OI692UC', 'Journey to the End of the Night', 'http://books.google.com/books/content?id=pNF66OI692UC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
  (3, 'NGJubhmwqfoC', 'In Cold Blood', 'http://books.google.com/books/content?id=NGJubhmwqfoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');

COMMIT;

