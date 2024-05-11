const { Op, where } = require("sequelize");
const { Products, Categories } = require("../models");

// 3rd Party
const cloudinary = require("cloudinary").v2;
cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
	secure: true,
});

class ProductController {
	// Create Product
	static async addProduct(req, res, next) {
		try {
			const { file } = req;
			if (!file) {
				await Products.create(req.body);
				return res.status(201).json({
					message: `Product ${req.body.name} has been added`,
				});
			}

			const base64Img = file.buffer.toString("base64");
			const imageUrl = `data:${file.mimetype};base64,${base64Img}`;
			const { secure_url } = await cloudinary.uploader.upload(imageUrl);
			req.body.image = secure_url;

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

	// Get Details
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

	// Update Product
	static async updateProduct(req, res, next) {
		try {
			const { id } = req.params;
			const dataProduct = await Products.findByPk(id);
			if (!dataProduct) throw { name: "notFound" };

			const { file } = req;
			if (!file) {
				await dataProduct.update(req.body, { where: { id } });
				return res.status(200).json({
					message: `Product ${req.body.name} has been updated`,
				});
			}

			const base64Img = file.buffer.toString("base64");
			const imageUrl = `data:${file.mimetype};base64,${base64Img}`;
			const { secure_url } = await cloudinary.uploader.upload(imageUrl);
			req.body.image = secure_url;

			await dataProduct.update(req.body, { where: { id } });
			return res.status(200).json({
				message: `Product ${req.body.name} has been updated`,
			});
		} catch (error) {
			next(error);
		}
	}

	// Delete Product
	static async deleteProduct(req, res, next) {
		try {
			const { id } = req.params;
			const product = await Products.findByPk(id);
			if (!product) throw { name: "notFound" };

			await product.destroy({ where: { id } });
			res.status(200).json({
				message: `${product.name} has been deleted`,
			});
		} catch (error) {
			next(error);
		}
	}
}

module.exports = ProductController;
