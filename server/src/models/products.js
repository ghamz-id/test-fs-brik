"use strict";
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
			weight: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
					},
				},
			},
			width: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
					},
				},
			},
			length: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
					},
				},
			},
			height: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
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
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
					},
				},
			},
			sku: {
				type: DataTypes.STRING,
			},
			CategoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "This Field is required",
					},
					notNull: {
						msg: "This Field is required",
					},
				},
				references: {
					model: "Categories",
					key: "id",
				},
			},
		},
		{
			sequelize,
			modelName: "Products",
		}
	);
	return Products;
};
