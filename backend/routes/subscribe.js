const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriberModel.js");
const sendEmail = require("../utils/sendEmail"); // optional

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const exists = await Subscriber.findOne({ email });
    if (exists) return res.status(400).json({ message: "Already subscribed" });

    await Subscriber.create({ email });

    await sendEmail(
      email,
      "Welcome to our newsletter",
      "Thanks for subscribing!"
    );

    res
      .status(200)
      .json({ success: true, message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

router.get("/unsubscribe/:email", async (req, res) => {
  const email = decodeURIComponent(req.params.email);

  try {
    const removed = await Subscriber.findOneAndDelete({ email });

    if (!removed) {
      return res
        .status(404)
        .json({ success: false, message: "Email not found." });
    }

    res
      .status(200)
      .json({ success: true, message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
