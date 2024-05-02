const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: "Please Login" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = tokenDecode.id;
    next();
  } catch (error) {
    console.log('the error is',error.message);
  }
};

module.exports = authMiddleware;
