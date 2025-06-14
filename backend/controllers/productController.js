const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const cloudinary = require("cloudinary");

const allProducts = asyncHandler(async (req, res) => {
  const productCount = await Product.countDocuments();
  const inStockCount = await Product.find({ inStock: true }).countDocuments();
  let products = await Product.find();
  res.status(200).json({
    success: true,
    products,
    productCount,
    inStockCount
  });
});

const singleProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid product ID");
    } else {
      throw error;
    }
  }
});

const createProduct = asyncHandler(async (req, res) => {
  try {
    let images = [];
    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }
    const imagesLink = [];
    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });
      imagesLink.push({
        public_id: result.public_id,
        url: result.url,
      });
    }
    req.body.images = imagesLink;
    req.body.user = req.user._id;
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
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

const updateProduct = asyncHandler(async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }

    let images = [];
    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images || [];
    }

    if (images.length > 0) {
      // Separate existing images (URLs) from new images (base64)
      const existingImages = [];
      const newImages = [];
      
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        // Check if it's a base64 string (starts with data:image)
        if (typeof img === 'string' && img.startsWith('data:image')) {
          newImages.push(img);
        } 
        // Check if it's a Cloudinary URL (contains cloudinary.com or res.cloudinary.com)
        else if (typeof img === 'string' && (img.includes('cloudinary.com') || img.includes('res.cloudinary.com'))) {
          // Find the corresponding image object in the current product
          const existingImg = product.images.find(prodImg => prodImg.url === img);
          if (existingImg) {
            existingImages.push(existingImg);
          }
        }
        // Handle other URL formats or direct image objects
        else if (typeof img === 'object' && img.url && img.public_id) {
          existingImages.push(img);
        }
      }

      // Only delete images that are not being kept
      const imagesToDelete = product.images.filter(prodImg => 
        !existingImages.some(keepImg => keepImg.public_id === prodImg.public_id)
      );

      // Delete unused images from Cloudinary
      for (let i = 0; i < imagesToDelete.length; i++) {
        try {
          await cloudinary.v2.uploader.destroy(imagesToDelete[i].public_id);
        } catch (deleteError) {
          console.log(`Failed to delete image ${imagesToDelete[i].public_id}:`, deleteError);
        }
      }

      // Upload new base64 images to Cloudinary
      const uploadedImages = [];
      for (let i = 0; i < newImages.length; i++) {
        try {
          const result = await cloudinary.v2.uploader.upload(newImages[i], {
            folder: "products",
          });
          uploadedImages.push({
            public_id: result.public_id,
            url: result.url,
          });
        } catch (uploadError) {
          console.log(`Failed to upload image ${i}:`, uploadError);
        }
      }

      // Combine existing and newly uploaded images
      const finalImages = [...existingImages, ...uploadedImages];
      req.body.images = finalImages;
    }

    // Update the product
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log("Update product error:", error);
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid product ID");
    } else if (error.name === "ValidationError") {
      res.status(400);
      throw new Error("Validation Error");
    } else {
      throw error;
    }
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }
    product = await Product.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: `Product deleted ${product}.`,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid product ID");
    } else {
      throw error;
    }
  }
});

module.exports = {
  allProducts,
  singleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
