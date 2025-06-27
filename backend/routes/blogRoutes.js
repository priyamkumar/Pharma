const express = require("express");
const {
  getAllBlogs,
  singleBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getRecentBlogs
} = require("../controllers/blogController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.get("/", getAllBlogs);
router.post("/admin/create", isAuthenticated, createBlog);
router
  .route("/admin/:id")
  .put(isAuthenticated, updateBlog)
  .delete(isAuthenticated, deleteBlog);

router.get("/details/:identifier", singleBlog);
router.get("/recent", getRecentBlogs);

module.exports = router;
