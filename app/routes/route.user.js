const express = require('express');
const router = express.Router();
const userController = require("../controller/ctrl.user");
const auth = require('../middleware/auth');


// User Routes
  router.post("/login", userController.login)
  router.post("/register", userController.register)
  router.get("/profile/:id", userController.getProfile) // ajouter le middleware auth
  router.patch("/profile/:id", userController.updateProfile) // ajouter le middleware auth
  router.delete("/profile/:id", userController.deleteProfile) // ajouter le middleware auth



// Testing purpose only: check les users dans la BDD
const userDataMapper = require("../model/dataMapper.user");
router.get("/register", async (req, res) => {
  const results = await userDataMapper.getUserList();
  res.send(results.rows);
})




module.exports = router;
