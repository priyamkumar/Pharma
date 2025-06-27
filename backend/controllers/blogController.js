const asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogModel.js");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");

const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
});

const singleBlog = asyncHandler(async (req, res) => {
  try {
    const { identifier } = req.params;
    let blog;
    if (mongoose.Types.ObjectId.isValid(identifier)) {
      blog = await BlogPost.findById(identifier).select("-__v");
    } else {
      blog = await BlogPost.findOne({ slug: identifier }).select("-__v");
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid blog ID");
    } else {
      throw error;
    }
  }
});

const createBlog = asyncHandler(async (req, res) => {
  try {
    const blogData = req.body;
    if (blogData.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "blogs",
      });
      blogData.image = { public_id: result.public_id, url: result.url };
    }

    if (blogData.tags) {
      blogData.tags = blogData.tags.map((tag) => tag.toLowerCase());
    }

    const blog = await BlogPost.create(blogData);
    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.log(error);
    if (error.name === "ValidationError") {
      res.status(400);
      throw new Error("Validation Error");
    } else {
      throw error;
    }
  }
});

const updateBlog = asyncHandler(async (req, res) => {
  try {
    let blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      res.status(404);
      throw new Error("Blog not found");
    }
    if (req.body.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "blogs",
      });
      req.body.image = { public_id: result.public_id, url: result.url };
    }
    blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.log("Update blog error:", error);
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid blog ID");
    } else if (error.name === "ValidationError") {
      res.status(400);
      throw new Error("Validation Error");
    } else {
      throw error;
    }
  }
});

const deleteBlog = asyncHandler(async (req, res) => {
  try {
    let blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      res.status(404);
      throw new Error("Blog not found");
    }
    await cloudinary.v2.uploader.destroy(blog.image.public_id);
    blog = await BlogPost.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: `Blog deleted ${blog}.`,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid blog ID");
    } else {
      throw error;
    }
  }
});

const getRecentBlogs = asyncHandler(async (req, res) => {
  const blogs = await BlogPost.find({})
    .sort({ createdAt: -1 })
    .limit(3)
  res.status(200).json({ success: true, blogs });
});

module.exports = {
  getAllBlogs,
  singleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getRecentBlogs,
};
