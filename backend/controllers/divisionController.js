const asyncHandler = require("express-async-handler");
const Division = require("../models/divisionModel.js");
const cloudinary = require("cloudinary");

const allDivisions = asyncHandler(async (req, res) => {
  let divisions = await Division.find();
  res.status(200).json({
    success: true,
    divisions,
  });
});

const createDivision = asyncHandler(async (req, res) => {
  try {
    if (req.body.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "divisions",
      });
      req.body.image = { public_id: result.public_id, url: result.secure_url };
    }

    const division = await Division.create(req.body);
    res.status(201).json({ success: true, division });
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

const updateDivision = asyncHandler(async (req, res) => {
  try {
    let division = await Division.findById(req.params.id);
    if (!division) {
      res.status(404);
      throw new Error("Division not found");
    }
    if (req.body.image) {
      const result = await cloudinary.v2.uploader.upload(req.body.image, {
        folder: "divisions",
      });
      req.body.image = { public_id: result.public_id, url: result.secure_url };
    }
    division = await Division.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      division,
    });
  } catch (error) {
    console.log("Update division error:", error);
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid division ID");
    } else if (error.name === "ValidationError") {
      res.status(400);
      throw new Error("Validation Error");
    } else {
      throw error;
    }
  }
});

const deleteDivision = asyncHandler(async (req, res) => {
  try {
    let division = await Division.findById(req.params.id);
    if (!division) {
      res.status(404);
      throw new Error("Division not found");
    }
    await cloudinary.v2.uploader.destroy(division.image.public_id);
    division = await Division.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: `Division deleted ${division}.`,
    });
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400);
      throw new Error("Invalid division ID");
    } else {
      throw error;
    }
  }
});

module.exports = {
  allDivisions,
  createDivision,
  updateDivision,
  deleteDivision,
};
