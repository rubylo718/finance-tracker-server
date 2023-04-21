const Category = require('../models/category-model')

const categoryController = {
	addCategory: async (req, res, next) => {
		// #swagger.tags = ['Categories']
		let { categoryId, name } = req.body
		try {
			const newCategory = await Category.create({ categoryId, name })
			return res.status(200).json({
				status: 'success',
				message: 'Category is created successfully.',
				newCategory,
			})
		} catch (err) {
			next(err)
		}
	},
	deleteCategory: async (req, res, next) => {
		// #swagger.tags = ['Categories']
		let _id = req.params._id
		try {
			let categoryFound = await Category.findById(_id)
			if (!categoryFound) {
				return res.status(404).json({ status: 'error', message: 'Not found.' })
			}
			await Category.deleteOne({ _id })
			return res.status(200).json({
				status: 'success',
			})
		} catch (err) {
			next(err)
		}
	},
	getAllCategories: async (req, res, next) => {
		// #swagger.tags = ['Categories']
		try {
			const allCategories = await Category.find().lean()
			return res.status(200).json({
				status: 'success',
				allCategories,
			})
		} catch (err) {
			next(err)
		}
	},
	getCategory: async (req, res, next) => {
		// #swagger.tags = ['Categories']
		let _id = req.params._id
		try {
			let categoryFound = await Category.findById(_id)
			if (!categoryFound) {
				return res.status(404).json({ status: 'error', message: 'Not found.' })
			}
			return res.status(200).json({
				status: 'success',
				categoryFound,
			})
		} catch (err) {
			next(err)
		}
	},
	editCategory: async (req, res, next) => {
		// #swagger.tags = ['Categories']
		let _id = req.params._id
		let { categoryId, name } = req.body
		try {
			let updatedCategory = await Category.findByIdAndUpdate(
				_id,
				{
					categoryId,
					name,
				},
				{ new: true }
			)
			return res.status(200).json({
				status: 'success',
				updatedCategory,
			})
		} catch (err) {
			next(err)
		}
	},
}

module.exports = categoryController
