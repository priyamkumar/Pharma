const express = require("express");
const {
  allProducts,
  updateProduct,
  deleteProduct,
  singleProduct,
  createProduct,
} = require("../controllers/productController");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.get("/", allProducts);
router.post("/admin/create", isAuthenticated, createProduct);
router
  .route("/admin/:id")
  .put(isAuthenticated, updateProduct)
  .delete(isAuthenticated, deleteProduct);
router.get("/details/:id", singleProduct);

module.exports = router;
