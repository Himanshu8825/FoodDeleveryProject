const express = require("express");
const authMiddleware = require("../middlewares/auth.js");
const placeOrder = require("../controllers/orderController.js");

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

module.exports = orderRouter;
