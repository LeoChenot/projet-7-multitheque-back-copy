const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      const decodedToken = jwt.verify(token, `${process.env.TOKEN_KEY}`);;
      const userId = decodedToken.userId.toString();
      res.locals.user = userId;
      next();
    } catch {
      res.status(401).json({
        error: new Error("not authenticated: not allowed"),
      });
    }
  } else {
      res.locals.user = 0;
      next();
  }
};

