const errorHandler = (err, req, res, next) => {
	switch (err.name) {
		case "SequelizeValidationError":
			res.status(400).json({ message: err.errors[0].message });
			break;
		case "emailExist":
			res.status(400).json({ message: "Email already exist" });
			break;
		case "usernameExist":
			res.status(400).json({ message: "Username already exist" });
			break;
		case "emptyField":
			res.status(400).json({ message: "No username or password" });
			break;
		case "notFound":
			res.status(404).json({ message: "Data not found" });
			break;
		case "invalidLogin":
			res.status(401).json({ message: "Username or Password is wrong" });
		default:
			res.status(500).json({ message: "Internal server error" });
			break;
	}
};

module.exports = errorHandler;
