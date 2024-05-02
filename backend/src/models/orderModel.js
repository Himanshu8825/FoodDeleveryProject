const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  address: {
    type: Object, // Change the type to Object
    required: true,
  },
  status: {
    type: String,
    default: "Food Processing",
  },
  date: {
    type: Date,
    default:Date.now(),
  },
  payment: {
    type: Boolean,
    default: false,
  },
});

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;
