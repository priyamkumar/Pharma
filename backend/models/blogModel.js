const mongoose = require("mongoose");

// Schema for content sections within a blog post
const contentSectionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { _id: false }
); // Disable _id for subdocuments

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog post title is required"],
      trim: true,
      maxLength: [200, "Title cannot exceed 200 characters"],
    },

    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain only lowercase letters, numbers, and hyphens",
      ],
    },
    tags: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    categories: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },

    content: {
      type: [contentSectionSchema],
      required: [true, "At least one content section is required"],
      validate: {
        validator: function (sections) {
          return sections && sections.length > 0;
        },
        message: "Blog post must have at least one content section",
      },
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      trim: true,
      maxLength: [500, "Meta description cannot exceed 500 characters"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

blogPostSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
  }
  next();
});

blogPostSchema.methods.addTag = function (tag) {
  if (!this.tags.includes(tag.toLowerCase())) {
    this.tags.push(tag.toLowerCase());
  }
  return this.save();
};

module.exports = mongoose.model("BlogPost", blogPostSchema);
