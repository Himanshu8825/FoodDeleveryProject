const express = require("express");
const authMiddleware = require("../middlewares/auth.js");
const {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrder,
  updateStatus,
} = require("../controllers/orderController.js");

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.post("/userorder", authMiddleware, userOrder);
orderRouter.get("/list", listOrder);
orderRouter.post("/status", updateStatus);

module.exports = orderRouter;
