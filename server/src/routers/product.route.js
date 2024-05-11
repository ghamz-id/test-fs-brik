const express = require("express");
const authRouter = express.Router();
const ProductController = require("../controllers/product.controller");

authRouter.get("/", ProductController.allProducts);
authRouter.get("/:id", ProductController.detailProduct);
authRouter.post("/", ProductController.addProduct);

module.exports = authRouter;
