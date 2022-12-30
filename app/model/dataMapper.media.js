const client = require("./dataClient");

const mediaDataMapper = {
  async getCollection(userid){
    // renvoie l'ensemble des reviews d'un user
    const query = {
      text: `SELECT * FROM review JOIN media ON review.mediaid = media.id JOIN mediatype ON media.mediaType = mediatype.id WHERE review.userid = $1`,
      values: [userid],
    };
    const mediaList = await client.query(query);
    return mediaList;
  }
};

module.exports = mediaDataMapper;

