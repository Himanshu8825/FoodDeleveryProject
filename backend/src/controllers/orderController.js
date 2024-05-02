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

module.exports = placeOrder;
