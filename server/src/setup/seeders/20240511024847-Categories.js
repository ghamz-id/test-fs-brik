"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Categories",
			[
				{
					categoryName: "Food",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Drink",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					categoryName: "Snack",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Categories", null, {});
	},
};
