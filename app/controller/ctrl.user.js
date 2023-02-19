const userDataMapper = require("../model/dataMapper.user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sessionDuration = 24 * 3600 * 1000;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX  =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#?()'"§€£+=-_$%^&*]).{8,}$/;


const userController = {

  async register(req,res) {
    const { email, username, password, firstName, lastName, gender, birthdayDate, bio } = req.body;
    if (!email || !username || !password || !firstName || !lastName) {
      return res.status(400).json({ error: 'there is one missing field, please check again' });
    }
    if (username.length >= 17 || username.length <= 2) {
      return res.status(400).json({ error: 'wrong username (length must be: 3 - 16)' });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'invalid email format' });
    }
    if (!PASSWORD_REGEX.test(password)) {
      return res.status(400).json({ error: 'invalid password format' });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = await userDataMapper.registerNewUser(req.body, hash);
    if (newUser.rowCount == 1) {
      res.status(201).json({ message: 'user created' });
    } else {
      return res.status(400).json({ error: 'bad request' });
    }
  },

  async login(req,res) {
    const { email, password } = req.body;
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'email is not valid' });
    }
    const userInDb = await userDataMapper.findExistingUser(email);
    const user = userInDb.rows[0];
    if (userInDb.rows.length !== 1) {
      return res.status(403).json({ error: 'user does not exist' });
    }
    const passwordValidation = await bcrypt.compare(password, user.hashedpassword);
    if (!passwordValidation) {
      return res.status(400).json({ error: 'incorrect password' });
    }
    const generatedToken = jwt.sign({ userId: user.id }, `${process.env.TOKEN_KEY}`, {
      expiresIn: sessionDuration,
    })
    res.status(200).json({ auth: true, userId: user.id, token: generatedToken });
  },

  async getProfile(req,res) {
    const userId = res.locals.user
    if(userId != req.params.id) {
      return res.status(403).json({ error: 'forbidden' });
    }
    const results = await userDataMapper.getUserDetails(userId);
    const resultsObject = { ...results.rows[0] }
    delete resultsObject.hashedpassword
    delete resultsObject.updatedat
    if (results.rowCount == 1) {
      res.status(200).json(resultsObject);
    } else {
      return res.status(400).json({ error: 'bad request' });
    }
  },

  async updateProfile(req,res) {
    const userId = res.locals.user
    if(userId != req.params.id) {
      return res.status(403).json({ error: 'forbidden' });
    }    
    const { email, username, password, newpassword, firstName, lastName, gender, birthdayDate, bio, pictureurl } = req.body;
    const getUserInDb = await userDataMapper.getUserDetails(userId);
    const userInDB = getUserInDb.rows[0];
    let newPasswordInDB;
    newPasswordInDB = userInDB.hashedpassword;
    const userInBody = { ...req.body };
    const updatedUser = { ...userInDB, ...userInBody };
    const elementsToDelete = ['id', 'hashedpassword', 'createdat', 'updatedat'];
    elementsToDelete.forEach(element => delete updatedUser[element]);
    if (username && username.length >= 17 || username && username.length <= 2) {
      return res.status(400).json({ error: 'invalid username (length must be: 3 - 16)' });
    }
    if (email && !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'invalid email format' });
    }
    if (newpassword) {
      if(!password) {
        return res.status(400).json({ error: 'please provide old passport if you want to update password' });
      }
      const passwordValidation = await bcrypt.compare(password, userInDB.hashedpassword);
      if (!passwordValidation) {
        return res.status(400).json({ error: "old password doesn't match" });
      }
      if (!PASSWORD_REGEX.test(newpassword)) {
        return res.status(400).json({ error: 'invalid new password format' });
      }
      newPasswordInDB = await bcrypt.hash(newpassword, 10);
    }
    const updatedProfile = await userDataMapper.updateUser(updatedUser, newPasswordInDB, userId);
    if (updatedProfile.rowCount == 1) {
      res.status(200).json({ message: 'profile updated' });
    } else {
      return res.status(400).json({ error: 'bad request' });
    }
  },

  async deleteProfile(req,res) {
    const userId = res.locals.user
    if (userId != req.params.id) {
      return res.status(403).json({ error: 'forbidden' });
    }
    const deletedProfile = await userDataMapper.deleteUser(userId);
    res.locals.user = 0
    if (deletedProfile.rowCount == 1) {
      return res.status(200).json({ message: 'user deleted' });
    } else {
      return res.status(400).json({ error: 'bad request' });
    }
  }
};

module.exports = userController;