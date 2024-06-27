const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((error) => console.log("Database connection error", error));

const User = require("./models/userModel");

app.post("/register", async (req, res) => {
  try {
    const user = await req.body;
    const existingUser = await User.findOne({'email':user.email});
    if (existingUser) {
      console.log("Email already registered:", user.email);
      return res.status(400).json({ message: "Email already registered" });
    }
    const newUser = new User(user);
    await newUser.save();
    console.log("New User Registered:", newUser);
  } catch (error) {
    console.log("error during registration", error);
  }
});
