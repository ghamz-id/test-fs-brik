const express = require("express");
const productRouter = express.Router();
const upload = require("../helpers/uploader");
const ProductController = require("../controllers/product.controller");
const authentication = require("../middlewares/authentication");
const { adminOnly } = require("../middlewares/authorization");

productRouter.get("/", ProductController.allProducts);
productRouter.get("/:id", ProductController.detailProduct);

productRouter.use(authentication);
productRouter.use(adminOnly);
productRouter.post("/", upload.single("image"), ProductController.addProduct);
productRouter.put(
	"/:id",
	upload.single("image"),
	ProductController.updateProduct
);
productRouter.delete("/:id", ProductController.deleteProduct);

module.exports = productRouter;
