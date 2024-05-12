require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// engine
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const router = require("./src/routers/index");
app.use("/", router);

// listener
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
