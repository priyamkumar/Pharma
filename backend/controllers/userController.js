const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const sendToken = require("../utils/sendToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }
  let user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User already exists.");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    const token = user.getJWTToken();
    req.user = user._id;
    req.token = token;
    sendToken(user, 201, res);
  } else {
    res.status(400);
    throw new Error("User data is not valid.");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    sendToken(user, 200, res);
  } else {
    res.status(401);
    throw new Error("Invalid email or password.");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: "none",
      secure: true,
    })
    .json({
      success: true,
      message: "User Logged out.",
    });
});

const loadUser = asyncHandler(async (req, res) => {
  let user = req.user;
  let token = req.token;
  res.json({ user, token });
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  loadUser
};
