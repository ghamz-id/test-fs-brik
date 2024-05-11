"use strict";

// dummy
const { faker } = require("@faker-js/faker");
let products = [];
for (let index = 1; index <= 100; index++) {
	products.push({
		name: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		weight: faker.number.int({ min: 1, max: 10 }),
		width: faker.number.int({ min: 1, max: 10 }),
		length: faker.number.int({ min: 1, max: 10 }),
		height: faker.number.int({ min: 1, max: 10 }),
		image: faker.image.url(),
		price: faker.number.int({ min: 1000, max: 20000 }),
		sku: faker.number.hex({ min: 0, max: 65535 }),
		CategoryId: faker.number.int({ min: 1, max: 3 }),
		createdAt: new Date(),
		updatedAt: new Date(),
	});
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Products", products, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Products", null, {});
	},
};
