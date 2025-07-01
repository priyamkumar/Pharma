const asyncHandler = require("express-async-handler");
const SEO = require("../models/seoModel");
const mongoose = require("mongoose");

const getSeoBySlug = asyncHandler(async (req, res) => {
  try {
    const seo = await SEO.findOne({ slug: req.params.slug });
    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }
    res.json({ success: true, seo });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const createSeoEntry = asyncHandler(async (req, res) => {
  try {
    const { slug, title, description, keywords } = req.body;
    if (!slug || !title || !description) {
      return res
        .status(400)
        .json({ message: "Slug, title, and description are required" });
    }
    const existing = await SEO.findOne({ slug });
    if (existing) {
      return res
        .status(400)
        .json({ message: "SEO entry already exists for this slug" });
    }

    const seo = new SEO({ slug, title, description, keywords });
    await seo.save();

    res.status(201).json({ success: true, seo });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const updateSeoBySlug = asyncHandler(async (req, res) => {
  try {
    const { slug, title, description, keywords } = req.body;
    const seo = await SEO.findOneAndUpdate(
      { slug: req.params.slug },
      { slug, title, description, keywords },
      { new: true }
    );

    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }
    res.json({ success: true, seo });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const deleteSeoBySlug = asyncHandler(async (req, res) => {
  try {
    const seo = await SEO.findOneAndDelete({ slug: req.params.slug });
    if (!seo) {
      return res.status(404).json({ message: "SEO not found" });
    }
    res.json({ success: true, message: "SEO deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const allEntries = asyncHandler(async (req, res) => {
  try {
    const seos = await SEO.find();
    res.json({ success: true, seos });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const allKeywords = asyncHandler(async (req, res) => {
  try {
    const seos = await SEO.find({}, "keywords");

    let allKeywords = seos
      .map((item) => item.keywords)
      .filter(Boolean) // Remove undefined/null
      .join(",");

    const keywordsArray = allKeywords
      .split(",")
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    const uniqueKeywords = [...new Set(keywordsArray)];

    res.json({
      success: true,
      keywords: uniqueKeywords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

module.exports = {
  getSeoBySlug,
  createSeoEntry,
  updateSeoBySlug,
  deleteSeoBySlug,
  allEntries,
  allKeywords
};
