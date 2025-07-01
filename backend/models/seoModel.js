const mongoose = require("mongoose");

const seoSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keywords: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SEO", seoSchema);
