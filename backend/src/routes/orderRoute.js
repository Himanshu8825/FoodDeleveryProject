const express = require("express");
const authMiddleware = require("../middlewares/auth.js");
const {
  placeOrder,
  verifyOrder,
  userOrder,
} = require("../controllers/orderController.js");

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware, userOrder);

module.exports = orderRouter;
