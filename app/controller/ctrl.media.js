const mediaDataMapper = require("../model/dataMapper.media");


const mediaController = {

  async getLibrary(req,res) {
    const userid = res.locals.user;
    const library = req.params.library;
    const results = await mediaDataMapper.getLibrary(userid, library);
    res.status(200).json(results.rows);
  },

  async getBestRated(req,res) {
    const library = req.params.library;
    const results = await mediaDataMapper.getBestRated(library);
    res.status(200).json(results.rows);
  },

  async getOneMedia(req,res) {
    const userid = res.locals.user;
    const { library, apimediaid } = req.params;
    if (userid == 0) {
      const results = await mediaDataMapper.getAverageRatingForOne(apimediaid, library);
      if (results.rows == [] || results.rows[0].note_moyenne == null) {
        res.status(200).json({ message: 'not enough ratings to provide an average rating' });
      } else {
        res.status(200).json(results.rows);
      }
    } else {
      const results = await mediaDataMapper.getReviewDetails(userid, apimediaid, library);
      if (results.rows == '') {
        const average = await mediaDataMapper.getAverageRatingForOne(apimediaid, library);
        res.status(200).json({ message: 'This Media is not in user Library yet', avg_rating: average.rows });
      } else {
        const average = await mediaDataMapper.getAverageRatingForOne(apimediaid, library);
        res.status(200).json({ user_review_details: results.rows, avg_rating: average.rows});
      }
    }
  },

  async addOneReview(req,res) {
    const {library, apimediaid } = req.params;
    const userid = res.locals.user
    const { list, title, coverURL } = req.body
    const result = await mediaDataMapper.verifyMedia(apimediaid, library)
    if (result.rowCount == 0) {
      const addedMedia = await mediaDataMapper.addOneMedia(library, apimediaid, title, coverURL)
    }
    const results = await mediaDataMapper.getReviewDetails(userid, apimediaid, library);
    if (results.rowCount > 0) {
      res.status(403).json({ message: 'This Media is already in user Library yet' });
    } else {
      const newReview = await mediaDataMapper.addReview(userid, apimediaid, list, library)
      res.status(201).json({ message: 'Review successfully created' });
    }
  },

  async updateOneReview(req,res) {
    const { library, apimediaid } = req.params;
    const userid = res.locals.user;
    let { note }  = req.body;
    note = parseFloat(note);
    if (note && (note > 5 || note < 0 || (note%1 != 0 && (note+0.5)%1 != 0))) {
      res.status(400).json({ message: 'note should be between 0 and 5 (half-integers allowed)' });
    } else {
      const results = await mediaDataMapper.getReviewDetails(userid, apimediaid, library);
      if (results.rowCount == 0) {
        res.status(403).json({ message: 'No review to update, please create review first' });
      } else {
        const reviewUpdateRequest = { ...req.body }
        const reviewDetailsInDB = { ...results.rows[0]};
        reviewDetailsInDB['list'] = reviewDetailsInDB['listname']
        elementsToDelete = ['mediatypename', 'userid', 'title', 'apimediaid', 'coverurl', 'listname'];
        elementsToDelete.forEach(element => delete reviewDetailsInDB[element]);    
        reviewUpdateToSend = { ...reviewDetailsInDB, ...reviewUpdateRequest }
        const updatedReview = await mediaDataMapper.updateOneReview(userid, library, apimediaid, reviewUpdateToSend)
        if (updatedReview.rowCount == 1) {
          res.status(200).json({ message: 'Review is updated' });
        } else {
          return res.status(400).json({ error: 'update failed' });
        }
      }
    }
  },

  async deleteOneReview(req,res) {
    const { library, apimediaid } = req.params;
    const userid = res.locals.user;
    const results = await mediaDataMapper.getReviewDetails(userid, apimediaid, library);
    if (results.rowCount == 0) {
      res.status(403).json({ message: 'The user has no review for this Media' });
    } else {
      await mediaDataMapper.deleteOneReview(userid, library, apimediaid)
      res.status(200).json({ message: 'The Review is now deleted from User Library' });
    }
  }
};

module.exports = mediaController;