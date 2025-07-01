const express = require("express");
const { isAuthenticated } = require("../middleware/auth");
const {
  getSeoBySlug,
  createSeoEntry,
  updateSeoBySlug,
  deleteSeoBySlug,
  allEntries,
  allKeywords,
} = require("../controllers/seoController");
const router = express.Router();

router.get("/admin/:slug", getSeoBySlug);
router.post("/admin", isAuthenticated, createSeoEntry);
router
  .route("/admin/:slug")
  .put(isAuthenticated, updateSeoBySlug)
  .delete(isAuthenticated, deleteSeoBySlug);
router.get("/", allEntries);
router.get("/keywords", allKeywords);

module.exports = router;
