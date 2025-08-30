const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    composition: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      default: "PRIMA",
    },
    category: {
      type: String,
      required: true,
    },
    packagingType: {
      type: String,
      required: true,
    },
    packSize: {
      type: String,
      required: true,
    },
    therapeutic: {
      type: String,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    pricing: {
      mrp: { type: Number, required: true },
      ptr: { type: Number },
      pts: { type: Number },
    },
    shortDescription: {
      type: String,
    },
    fullDescription: {
      type: String,
    },
    sideEffects: {
      type: String,
    },
    indication: {
      type: String,
    },
    importantNotice: {
      type: String,
    },
    storageCondition: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    inStock: {
      type: Boolean,
      default: true, // Product is in stock by default
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
