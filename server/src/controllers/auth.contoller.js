const { Op } = require("sequelize");
const { comparePassword } = require("../helpers/bcrypt");
const { Users } = require("../models");
const { signToken } = require("../helpers/jwt");

class AuthController {
	static async register(req, res, next) {
		try {
			const { email, username } = req.body;

			const emailExist = await Users.findOne({ where: { email } });
			if (emailExist) throw { name: "emailExist" };

			const usernameExist = await Users.findOne({ where: { username } });
			if (usernameExist) throw { name: "usernameExist" };

			await Users.create(req.body);
			return res.status(201).json({
				message: "User created",
			});
		} catch (error) {
			next(error);
		}
	}

	static async login(req, res, next) {
		try {
			const { username, password } = req.body;
			if (!username || !password) throw { name: "emptyField" };

			const user = await Users.findOne({
				where: {
					[Op.or]: [{ username }, { email: username }],
				},
			});
			if (!user) throw { name: "invalidLogin" };

			const isValidPassword = comparePassword(password, user.password);
			if (!isValidPassword) throw { name: "invalidLogin" };

			const token = signToken({ id: user.id, username: user.username });

			return res.status(200).json({
				message: "Login success",
				token: token,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = AuthController;
