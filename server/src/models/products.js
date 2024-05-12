"use strict";
const { faker } = require("@faker-js/faker");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Products.belongsTo(models.Categories);
		}
	}
	Products.init(
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Product name is required",
					},
					notEmpty: {
						msg: "Product name is required",
					},
				},
			},
			CategoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Select the category",
					},
					notNull: {
						msg: "Select the category",
					},
					min: {
						args: [1],
						msg: "Select the category",
					},
				},
				references: {
					model: "Categories",
					key: "id",
				},
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Price must be greater than 1000",
					},
					notNull: {
						msg: "Price must be greater than 1000",
					},
					min: {
						args: [1000],
						msg: "Price must be greater than 1000",
					},
				},
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Image is required",
					},
					notEmpty: {
						msg: "Image is required",
					},
				},
			},
			weight: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Weight must be greater than 0",
					},
					notNull: {
						msg: "Weight must be greater than 0",
					},
					min: {
						args: [1],
						msg: "Weight must be greater than 0",
					},
				},
			},
			width: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Width must be greater than 0",
					},
					notNull: {
						msg: "Width must be greater than 0",
					},
					min: {
						args: [1],
						msg: "Width must be greater than 0",
					},
				},
			},
			length: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Length must be greater than 0",
					},
					notNull: {
						msg: "Length must be greater than 0",
					},
					min: {
						args: [1],
						msg: "Length must be greater than 0",
					},
				},
			},
			height: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "Height must be greater than 0",
					},
					notNull: {
						msg: "Height must be greater than 0",
					},
					min: {
						args: [1],
						msg: "Height must be greater than 0",
					},
				},
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Description is required",
					},
					notEmpty: {
						msg: "Description is required",
					},
				},
			},
			sku: {
				type: DataTypes.STRING,
				defaultValue: faker.number.hex({ min: 0, max: 65535 }),
			},
		},
		{
			sequelize,
			modelName: "Products",
		}
	);
	return Products;
};
