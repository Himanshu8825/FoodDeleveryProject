const User = require("../models/User.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcryptJs = require("bcryptjs");
const validator = require("validator");

//!For Login
const longinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please Enter The Email" });
    }

    let user;
    if (email) {
      user = await User.findOne({ email: email });
    }

    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }

    const ismatchedPassword = await bcryptJs.compare(password, user.password);
    if (!ismatchedPassword) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = await createToken(user._id);
    return res.status(200).json({ message: "Login success", token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

//!Create Token
const createToken = async (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//!Signup
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptJs.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await newUser.save();
    const token = await createToken(newUser._id);
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { longinUser, signupUser };
