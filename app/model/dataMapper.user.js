const client = require("./dataClient");

const userDataMapper = {
  async registerNewUser(userObject, passwordhashed) {
    const query = {
      text: `INSERT INTO "user"(email, username, hashedpassword, firstName, lastName) VALUES ($1, $2, $3, $4, $5)`,
      values: [userObject.email, userObject.username, passwordhashed, userObject.firstName, userObject.lastName],
    };
    const newUser = await client.query(query);
    return newUser;
  },

  async findExistingUser(email) {
    const query = {
      text: `SELECT * FROM "user" WHERE email = $1`,
      values: [email],
    };
    const existingUser = await client.query(query);
    return existingUser;
  },

  async getUserDetails(id) {
    const query = {
      text: `SELECT * FROM "user" WHERE id = $1`,
      values: [id],
    };
    const userDetails = await client.query(query);
    return userDetails;
  },

  async deleteUser(id) {
    const query = {
      text: ` UPDATE "user"
              SET email = 'deleted-user(${id})@email.com'
              WHERE id = $1;`,
      values: [id],
    };
    const userDetails = await client.query(query);
    return userDetails;
  },

  async updateUser(userObject, passwordhashed, id) {
    const query = {
      text: `UPDATE "user"
             SET email = $1, username = $2, hashedpassword = $3, firstname = $4, lastname = $5, gender = $6, birthdaydate = $7, bio = $8, pictureurl = $9
             WHERE id = $10`,
      values: [userObject.email, userObject.username, passwordhashed, userObject.firstname, userObject.lastname, userObject.bio, userObject.birthdaydate, userObject.bio, userObject.pictureurl, id],
    };
    const updatedUser = await client.query(query);
    return updatedUser;
  },

  async uploadProfilePicture(userId, pictureURL) {
    const query = {
      text: `UPDATE "user"
             SET pictureurl = $2
             WHERE id = $1`,
      values: [userId, pictureURL],
    };
    const updatedUser = await client.query(query);
    return updatedUser;
  },
};

module.exports = userDataMapper;

