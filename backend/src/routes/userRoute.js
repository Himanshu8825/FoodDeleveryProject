const express = require("express");
const User = require("../models/User.js");
const { signupUser, longinUser } = require("../controllers/userController.js");

const router = express.Router();
router.use(express.json());

router.post("/signup", signupUser);
router.post("/login", longinUser);

module.exports = router;
