const orderModel = require("../models/orderModel.js");
const User = require("../models/User.js");
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontEndUrl = "http://localhost:5173";

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Validate request data
    if (!userId || !items || !amount || !address) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid request data" });
    }

    // Save the order to the database
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });
    await newOrder.save();

    // Clear the user's cart after placing the order
    await User.findByIdAndUpdate(userId, { cartData: {} });

    // Create line items for the Stripe session
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Add delivery charge as a line item
    lineItems.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 99 * 100,
      },
      quantity: 1,
    });

    // Create a Stripe session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontEndUrl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontEndUrl}/verify?success=false&orderId=${newOrder._id}`,
    });

    // Return the session URL to the client
    res.status(200).json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.status(200).json({ message: "Payment Successful" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.status(200).json({ message: "Payment Unsuccessful" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Payment Failed" });
  }
};

//!User Orders
const userOrder = async (req, res) => {
  try {
    const orsers = await orderModel.find({ userId: req.body.userId });
    res.status(200).json({ data: orsers });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//!Listing Order for admine pannel
const listOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    if (orders) {
      res.status(200).json({ data: orders });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//!API For updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.status(200).json({ message: "Order Status Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  placeOrder,
  verifyOrder,
  userOrder,
  listOrder,
  updateStatus,
};
