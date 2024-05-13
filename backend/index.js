require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/routes/userRoute.js");
const foodRouter = require("./src/routes/foodRoute.js");
const cartRouter = require("./src/routes/cartRoute.js");
const orderRouter = require("./src/routes/orderRoute.js");

//!Configuration file
const mongoDB = process.env.MONGODB_URI;
const port = process.env.PORT;

//!DB Configuration
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.log(`Error connecting to MongoDB ${err.message}`);
  });

//!Middlewares
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3001",
      "http://localhost:5173",
      "https://fooddelevery-z5mv.onrender.com",
    ],
  })
);

// Parse JSON bodies
app.use(express.json());
app.use("/user", router);
app.use("/food", foodRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

//!Api routes
app.get("/", (req, res) => {
  res.send("hello world");
});

//!List of routes
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
