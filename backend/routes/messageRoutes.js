const express = require("express");
const { sendMessage, getAllMessages, readMessage, deleteMessage } = require("../controllers/messageController.js");
const { isAuthenticated } = require("../middleware/auth.js");

const router = express.Router();

router.post("/", sendMessage);

// Get all messages
router.get("/", getAllMessages);

router.put("/read", isAuthenticated, readMessage);

router.delete("/delete", isAuthenticated, deleteMessage);

module.exports = router;
