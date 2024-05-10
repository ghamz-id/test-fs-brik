require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// engine
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./src/routers/index");
app.use("/", router);

// listener
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
