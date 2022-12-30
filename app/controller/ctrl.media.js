const mediaDataMapper = require("../model/dataMapper.media");

const mediaController = {

  async getCollection(req,res) {
    // On récupère l'ID du user depuis les "locals", défini dans le middleware d'authentification
    const userid = res.locals.user
    const results = await mediaDataMapper.getCollection(userid);
    res.send(results.rows);
  },

  async getOneMedia(req,res) {
    res.send('Hello World, this is getOneMedia');
  },

  async addOneMedia(req,res) {
    res.send('Hello World, this is addOneMedia');
  },

  async updateOneMedia(req,res) {
    res.send('Hello World, this is updateOneMedia');
  },

  async deleteOneMedia(req,res) {
    res.send('Hello World, this is deleteOneMedia');
  }

};

module.exports = mediaController;