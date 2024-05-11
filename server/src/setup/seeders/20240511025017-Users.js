"use strict";

const { hashPassword } = require("../../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					name: "Administrator",
					username: "admin",
					email: "admin@mail.com",
					password: hashPassword("admin123"),
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
