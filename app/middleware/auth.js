const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, `${process.env.TOKEN_KEY}`);
    const userId = decodedToken.userId.toString();
    // faire une recherche du user, être sur qu'il existe dans la DB pour un check de sécurité ?
    res.locals.user = userId;
    next();
  } catch {
    res.status(401).json({
      error: new Error("not authenticated: not allowed"),
    });
  }
};

