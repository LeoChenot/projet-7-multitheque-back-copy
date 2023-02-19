const express = require('express');
const router = express.Router();
const mediaController = require("../controller/ctrl.media");
const auth = require('../middleware/auth');
const checkSignIn = require('../middleware/checkSignIn');

const routerWrapper = require("../middleware/routerWrapper");

router.get("/:library/bestrated", routerWrapper(mediaController.getBestRated));
router.get("/:library/", auth, routerWrapper(mediaController.getLibrary));
router.get("/:library/:apimediaid", checkSignIn, routerWrapper(mediaController.getOneMedia));
router.post("/:library/:apimediaid", auth, routerWrapper(mediaController.addOneReview));
router.patch("/:library/:apimediaid", auth, routerWrapper(mediaController.updateOneReview));
router.delete("/:library/:apimediaid", auth, routerWrapper(mediaController.deleteOneReview));

module.exports = router;
