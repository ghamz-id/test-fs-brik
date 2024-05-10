const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.json({
		success: true,
		message: "API is working!",
	});
});

router.use("/auth", require("./auth.router"));
router.use("/product", require("./product.route"));
router.use("/category", require("./category.route"));

router.get("*", (req, res) => {
	res.json({
		success: false,
		message: "Resource not found",
	});
});

module.exports = router;
