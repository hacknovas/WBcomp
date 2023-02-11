const express = require("express")
const router = express.Router();
const { singleProduct, searchProduct, addProducts, Allproducts, searchCategory } = require("../Controller/productcontroller")

router.route("/search").get(Allproducts).post(searchProduct);
router.route("/category").post(searchCategory);
router.route("/single").post(singleProduct);
router.route("/addProd").post(addProducts);

module.exports = router;