const client = require("./dataClient");

const mediaDataMapper = {
  async getLibrary(userid, library){
    const query = {
      text: `
        SELECT mediatype.mediatypename, review.userid, media.title, media.apimediaid, media.coverurl, list.listname, review.note, review.consumptiondate, review.comment FROM review 
          JOIN media ON review.mediaid = media.id 
          JOIN mediatype ON media.mediaType = mediatype.id
          JOIN list ON review.listid = list.id
          WHERE review.userid = $1 
          AND mediatype.mediatypename = $2;
        `,
      values: [userid, library],
    };
    const mediaList = await client.query(query);
    return mediaList;
  },

  async getBestRated(library){
    const query = {
      text: `
        SELECT media.title, media.coverurl, media.apimediaid, ROUND(AVG(note)*2)/2 AS note_moyenne FROM review 
          JOIN media ON review.mediaid = media.id
          JOIN mediatype ON media.mediaType = mediatype.id
          WHERE mediatype.mediatypename = $1
          AND review.note IS NOT NULL
          GROUP BY media.title, media.coverurl, media.apimediaid
          ORDER BY note_moyenne DESC
          LIMIT 10;
        `,
      values: [library],
    };
    const mediaList = await client.query(query);
    return mediaList;
  },

  async getAverageRatingForOne(apimediaid, library) {
    const query = {
      text: ` 
        SELECT media.title, media.coverurl, media.apimediaid, ROUND(AVG(note)*2)/2 AS note_moyenne FROM review
          JOIN media ON review.mediaid = media.id
          JOIN mediatype ON media.mediatype = mediatype.id
          WHERE media.apimediaid = $1 
          AND mediatype.mediatypename = $2
          GROUP BY media.title, media.coverurl, media.apimediaid;
        `,
      values: [apimediaid, library],
    };
    const avgRating = await client.query(query);
    return avgRating;

  },

  async getReviewDetails(userid, apimediaid, library) {
    const query = {
      text: `
        SELECT mediatype.mediatypename, review.userid, media.title, media.apimediaid, media.coverurl, list.listname, review.note, review.consumptiondate, review.comment  FROM review
          JOIN media on review.mediaid = media.id
          JOIN mediatype ON media.mediaType = mediatype.id
          JOIN list ON review.listid = list.id
          WHERE media.apimediaid = $1
          AND review.userid = $2
          AND mediatype.mediatypename = $3;
        `,
      values: [apimediaid ,userid, library],
    };
    const reviewDetails = await client.query(query);
    return reviewDetails;

  },

  async verifyMedia(apimediaid, library) {
    const query = {
      text: `
        SELECT apimediaid FROM media
          JOIN mediatype ON media.mediaType = mediatype.id
          WHERE apimediaid = $1
          AND mediatypename = $2;
        `,
      values: [apimediaid, library],
    };
    const reviewDetails = await client.query(query);   
    return reviewDetails;
  },  

  async addOneMedia(library, apimediaid, title, coverURL) {    
    const query = {
      text: `
        INSERT INTO public.media(
          apimediaid, title, coverurl, mediatype)
          VALUES ($1, $2, $3, (
          SELECT id FROM mediatype 
          WHERE mediatypename = $4));              
        `,
      values: [apimediaid, title, coverURL, library],
    };
    const newMedia = await client.query(query);
    return newMedia;
  },

  async addReview(userid, apimediaid, list, library) {
    const query = {
      text: `
        INSERT INTO public.review (
          userid, mediaid, listid)
          VALUES ($1,
          (SELECT media.id FROM public.media
          WHERE media.apimediaid = $2 AND media.mediatype = (SELECT mediatype.id FROM mediatype WHERE mediatype.mediatypename = $4)),
          (SELECT list.id FROM public.list
          WHERE list.listname = $3));
        `,
      values: [userid, apimediaid, list, library],
    };
    const review = await client.query(query);
    return review;

  },

  async updateOneReview(userid, library, apimediaid, reviewDetails) {
    const query = {
      text: `
        UPDATE review
          SET listid = (SELECT id FROM list WHERE listname = $1), note = $2, comment = $3, consumptionDate = $4
          WHERE userid = $5 AND mediaid = (SELECT media.id FROM public.media
          WHERE media.apimediaid = $6 AND media.mediatype = (SELECT mediatype.id FROM mediatype WHERE mediatype.mediatypename = $7));
        `,
      values: [reviewDetails.list, reviewDetails.note, reviewDetails.comment, reviewDetails.consumptionDate, userid, apimediaid, library],
    };
    const review = await client.query(query);
    return review;
  },

  async deleteOneReview(userid, library, apimediaid) {
    const query = {
      text: `
        DELETE FROM public.review
          WHERE review.userid = $1
          AND mediaid = (SELECT media.id FROM public.media
          WHERE media.apimediaid = $2 AND media.mediatype = (SELECT mediatype.id FROM mediatype WHERE mediatype.mediatypename = $3));
        `,
      values: [userid, apimediaid, library],
    };
    const review = await client.query(query);
    return review;
  },
};

module.exports = mediaDataMapper;

