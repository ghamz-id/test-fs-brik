const { Op } = require("sequelize");
const { Products, Categories } = require("../models");

class ProductController {
	// Create Product
	static async addProduct(req, res, next) {
		try {
			await Products.create(req.body);
			return res.status(201).json({
				message: `Product ${req.body.name} has been added`,
			});
		} catch (error) {
			next(error);
		}
	}

	// Get all products
	static async allProducts(req, res, next) {
		try {
			const search = req.query.search || "";
			const sort = req.query.sort || "ASC";
			const sortBy = req.query.sortBy || "id";
			const page = req.query.page ? parseInt(req.query.page) : 1;
			const limit = req.query.limit ? parseInt(req.query.limit) : 10;
			const offset = page === 1 ? 0 : (page - 1) * limit;

			const products = await Products.findAll({
				where: {
					name: { [Op.iLike]: `%${search}%` },
				},
				order: [[sortBy, sort]],
				limit: limit,
				offset: offset,
				include: {
					model: Categories,
					attributes: ["categoryName"],
				},
			});

			// Pagination
			const totalData = await Products.count();
			const totalPage = Math.ceil(totalData / limit);
			const dataOnPage = products.length;

			return res.status(200).json({
				totalData,
				totalPage,
				page,
				dataOnPage,
				data: products,
			});
		} catch (error) {
			next(error);
		}
	}

	// Get details
	static async detailProduct(req, res, next) {
		try {
			const { id } = req.params;
			const product = await Products.findOne({
				where: { id },
				include: {
					model: Categories,
					attributes: ["categoryName"],
				},
			});
			if (!product) throw { name: "notFound" };
			return res.status(200).json({
				data: product,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
