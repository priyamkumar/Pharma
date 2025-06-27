const express = require("express");
const {
  allDivisions,
  updateDivision,
  deleteDivision,
  createDivision,
} = require("../controllers/divisionController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.get("/", allDivisions);
router.post("/admin/create", isAuthenticated, createDivision);
router
  .route("/admin/:id")
  .put(isAuthenticated, updateDivision)
  .delete(isAuthenticated, deleteDivision);

module.exports = router;