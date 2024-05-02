const User = require("../models/User.js");

//!Add Cart Items
const addToCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] = cartData[req.body.itemId] + 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item Added To Cart" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

//! Remove To Cart

const removeToCart = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] = cartData[req.body.itemId] - 1;
    }
    await User.findByIdAndUpdate(req.body.userId, { cartData });
    res.status(200).json({ message: "Item Removed From Cart" });
  } catch (error) { 
    console.log(error.message);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

//! Get Cart Items

const getCartItems = async (req, res) => {
  try {
    let userData = await User.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.status(200).json({ message: "success cart data", cartData });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = {
  addToCart,
  removeToCart,
  getCartItems,
};
