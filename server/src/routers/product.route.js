const express = require("express");
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Hello from product router!",
	});
});

module.exports = authRouter;
