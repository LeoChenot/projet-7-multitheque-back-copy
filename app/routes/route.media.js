const express = require('express');
const router = express.Router();
const mediaController = require("../controller/ctrl.media");
const auth = require('../middleware/auth');


//Media Routes
// router.get("/:userid/collection", mediaController.getCollection)
router.get("/:userid/:media", auth, mediaController.getCollection)
router.get("/:userid/media/:mediaid", mediaController.getOneMedia) // ajouter le middleware auth
router.post("/:userid/media/:mediaidid", mediaController.addOneMedia) // ajouter le middleware auth
router.patch("/:userid/media/:mediaidid", mediaController.updateOneMedia) // ajouter le middleware auth
router.delete("/:userid/media/:mediaidid", mediaController.deleteOneMedia) // ajouter le middleware auth



module.exports = router;
