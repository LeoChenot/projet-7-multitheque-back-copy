const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // On récupère le token dans le header de la requête from front
    const token = req.headers["x-access-token"];
    // On le vérifie et récupère le userID qu'il contient (on l'avait créé lors du login)
    const decodedToken = jwt.verify(token, `${process.env.TOKEN_KEY}`);;
    const userId = decodedToken.userId.toString();
    // On stock le userID en res.locals, et on passe au controller suivant
    res.locals.user = userId;
    next();
  } catch {
    res.status(401).json({
      error: new Error("not authenticated: not allowed"),
    });
  }
};

