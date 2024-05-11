const { faker } = require("@faker-js/faker");

let dataProduct = [];

for (let index = 0; index < 100; index++) {
	dataProduct.push({
		categoryId: faker.number.int({ min: 1, max: 3 }),
		sku: faker.number.hex({ min: 0, max: 65535 }),
		name: faker.commerce.productName(),
		description: faker.commerce.productDescription(),
		weight: faker.number.int({ min: 1, max: 10 }),
		width: faker.number.int({ min: 1, max: 10 }),
		length: faker.number.int({ min: 1, max: 10 }),
		height: faker.number.int({ min: 1, max: 10 }),
		image: faker.image.url(),
		price: faker.number.int({ min: 1000, max: 20000 }),
	});
}

console.log(dataProduct);
