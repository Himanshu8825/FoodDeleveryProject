const foodModel = require("../models/foodModel.js");
const fs = require("fs");

const addFood = async (req, res) => {
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  });
  try {
    await food.save();
    res.status(200).json({
      message: "Food added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
    console.log(error.message);
  }
};

//!All Food List
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ data: foods });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log("The Error Is --> ", error.message);
  }
};

//!Remove Food
const removeFood = async (req, res) => {
  try {
    const result = await foodModel.deleteOne({ _id: req.params.id });

    console.log("Deletion result:", result);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.status(200).json({ message: "Food removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error.message);
  }
};

module.exports = { addFood, listFood, removeFood };
