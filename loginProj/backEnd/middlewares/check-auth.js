const jwt = require("jsonwebtoken");
let config = require("../config/config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, config.secret);
    next();  
  } catch (error) {
    res.status(401).json({
      MSG: "Auth failed",
    });
  }
};
