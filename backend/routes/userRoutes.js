const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const {
  registerUser,
  loginUser,
  logoutUser,
  loadUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticated, logoutUser);
router.get("/load", isAuthenticated, loadUser);

module.exports = router;