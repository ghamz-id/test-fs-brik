const express = require("express");
const router = express.Router();
const errorHandler = require("../middlewares/error.handler");

router.get("/", (req, res) => {
	res.json({
		success: true,
		message: "API is working!",
	});
});

router.use("/auth", require("./auth.router"));
router.use("/products", require("./product.route"));

router.get("*", (req, res) => {
	res.json({
		success: false,
		message: "API route not found",
	});
});

router.use(errorHandler);
module.exports = router;
