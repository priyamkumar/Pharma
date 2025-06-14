const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      minLength: [4, "Name should have more than 4 characters"],
      maxLength: [25, "Name should have less than 25 characters"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      validate: [validator.isEmail, "Please enter a valid Email"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ userId: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 15 * 60,
  });
};

module.exports = mongoose.model("User", userSchema);