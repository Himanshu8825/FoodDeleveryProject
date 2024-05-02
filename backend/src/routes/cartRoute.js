const express = require("express");
const {
  addToCart,
  removeToCart,
  getCartItems,
} = require("../controllers/cartController.js");
const authMiddleware = require("../middlewares/auth.js");

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeToCart);
cartRouter.get("/get", authMiddleware, getCartItems);

module.exports = cartRouter;
