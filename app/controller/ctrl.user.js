const userDataMapper = require("../model/dataMapper.user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sessionDuration = 24 * 3600 * 1000; // durée d'un token en ms (1 journée)
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = '';  // à définir


const userController = {

  async register(req,res) {
    // ToDo: Ajouter une vérification que le user n'existe pas déjà!
    // Choix de l'élément discriminant (email?). + Check dans le controller? en BDD? les 2?
    // Gérer l'ajout de la photo de profil, date de naissance et bio

    const { email, username, password, firstName, lastName, gender, birthdayDate, bio } = req.body;

    if (!email || !username || !password || !firstName || !lastName) {
      return res.status(401).json({ error: 'there is one missing field, please check again' });
    }
    if (username.length >= 17 || username.length <= 4) {
      return res.status(401).json({ error: 'wrong username (length must be: 5 - 16)' });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(401).json({ error: 'invalid email' });
    }
    //if (!PASSWORD_REGEX.test(password)) {
      //return res.status(401).json({ error: 'invalid password' });
    //}

    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = await userDataMapper.registerNewUser(req.body, hash);
    res.send(newUser);
  },


  async login(req,res) {
    const { email, password } = req.body;
    if (!EMAIL_REGEX.test(email)) {
      return res.status(401).json({ error: 'email is not valid' });
    }

    const userInDb = await userDataMapper.findExistingUser(email);
    const user = userInDb.rows[0];

    // S'il n'y a pas une unique entrée pour cet email (par ex. 0: il n'existe pas), on renvoie une erreur
    if (userInDb.rows.length !== 1) {
      return res.status(401).json({ error: 'user does not exist' });
    }

    // On utilise bcrypt pour comparer le mot de passe entré avec le hash stocké en DB (retourne un booléen)
    const passwordValidation = await bcrypt.compare(password, user.hashedpassword);
    if (!passwordValidation) {
      return res.status(401).json({ error: 'incorrect password' });
    }

    // On génère un token avec JWT (codé avec notre TOKEN_KEY), dans lequel on insère l'id du user
    // sera utilisé pour authentifier toutes nos routes grâce à un middleware "auth"
    const generatedToken = jwt.sign({ userId: user.id }, `${process.env.TOKEN_KEY}`, {
      expiresIn: sessionDuration,
    })

    // On renvoie le Token
    res.status(200).json({
      auth: true,
      userId: user.id,
      token: generatedToken
    });
  },



  // Controllers Not Yet coded:
  async getProfile(req,res) {
    res.send('Hello World, this is getProfile');
  },

  async updateProfile(req,res) {
    res.send('Hello World, this is updateProfile');
  },

  async deleteProfile(req,res) {
    res.send('Hello World, this is deleteProfile');
  }

};

module.exports = userController;