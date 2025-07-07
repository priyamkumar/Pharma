const asyncHandler = require("express-async-handler");
const BlogPost = require("../models/blogModel.js");
const cloudinary = require("cloudinary");
const mongoose = require("mongoose");
const Subscriber = require("../models/subscriberModel.js");
const sendEmail = require("../utils/sendEmail.js");

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

    const subscribers = await Subscriber.find({});

    const blogHtml = `
      <div style="font-family:sans-serif;background:#f4f4f4;padding:20px;">
        <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.05);">
          <h2 style="color:#333;">📝 New Blog: ${req.body.title}</h2>
          <p style="color:#555;font-size:16px;line-height:1.6;">${req.body.metaDescription}...</p>
          <a href="${process.env.FRONTEND_URL}/blogs/${req.body.slug}" style="display:inline-block;margin-top:20px;background:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Read Full Blog</a>
          <hr style="margin:30px 0;border:none;border-top:1px solid #eee;">
          <p style="font-size:12px;color:#999;">
            You’re receiving this email because you subscribed to our blog.
            <br>
            <a href="${process.env.FRONTEND_URL}/unsubscribe/{{EMAIL}}" style="color:#aaa;">Unsubscribe</a>
          </p>
        </div>
      </div>
    `;

    const emailPromises = subscribers.map((sub) => {
      const htmlWithUnsubscribe = blogHtml.replace(
        "{{EMAIL}}",
        encodeURIComponent(sub.email)
      );
      return sendEmail(
        sub.email,
        `New Blog: ${req.body.title}`,
        req.body.metaDesciption,
        htmlWithUnsubscribe
      );
    });
    await Promise.all(emailPromises);
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
  const blogs = await BlogPost.find({}).sort({ createdAt: -1 }).limit(4);
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
