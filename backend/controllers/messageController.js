const asyncHandler = require("express-async-handler");
const Message = require("../models/messageModel.js");

const sendMessage = asyncHandler(async (req, res) => {
  try {
    const { name, email, phone, description, formType } = req.body;

    if (!name || !email || !phone || !description || !formType) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    const data = await Message.create({
      name,
      email,
      phone,
      description,
      formType,
    });

    res.status(201).json({
      success: true,
      message: "Your message has been received. We will contact you shortly!",
      data,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const getAllMessages = asyncHandler(async (req, res) => {
  try {
    const messageCount = await Message.countDocuments();
    const unreadMessages = await Message.find({read: false}).countDocuments();
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, messages, messageCount, unreadMessages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });
  }
});

const readMessage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    let message = await Message.findByIdAndUpdate(
      id,
      { read: true },
      { new: true }
    );
    let messages = await Message.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      message,
      messages,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const deleteMessage = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    await Message.findByIdAndDelete(id);
    let messages = await Message.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = {
  sendMessage,
  getAllMessages,
  readMessage,
  deleteMessage
};
