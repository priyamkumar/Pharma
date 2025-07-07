const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.SMPT_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, text, html) {
  const mailOptions = {
    from: `"YourSite Newsletter" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html: html
      ? html
      : `
  <div style="font-family:Arial,sans-serif;background:#f9f9f9;padding:30px;">
    <div style="max-width:600px;margin:auto;background:white;border-radius:10px;padding:30px;box-shadow:0 0 10px rgba(0,0,0,0.05);">
      <h2 style="color:#4CAF50;">🎉 Thanks for Subscribing!</h2>
      <p style="font-size:16px;line-height:1.6;color:#555;">
        We're thrilled to have you onboard. You’ll now receive the latest updates and resources straight to your inbox.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
      <p style="font-size:14px;color:#999;">
        No longer want updates? 
        <a href="http://localhost:5173/unsubscribe/${encodeURIComponent(to)}" style="color:#4CAF50;">Unsubscribe here</a>.
      </p>

      <p style="font-size:14px;color:#aaa;">— The MySite Team</p>
    </div>
  </div>
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = sendEmail;
