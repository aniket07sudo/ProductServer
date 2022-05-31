const express = require("express");
const ProductController = require('../controller/ProductController');
const router = express.Router();

router.route("/addProduct").post(ProductController.addProduct);
router.route("/product").get(ProductController.displayProduct);

module.exports = router;