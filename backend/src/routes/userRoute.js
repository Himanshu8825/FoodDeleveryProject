const express = require("express");
const User = require("../models/User.js");

const router = express.Router();
router.use(express.json());

module.exports = router;
