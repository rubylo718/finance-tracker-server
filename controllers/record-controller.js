const Category = require('../models/category-model')
const Record = require('../models/record-model')

const recordController = {
	addRecord: async (req, res, next) => {
		// #swagger.tags = ['Records']
		const userId = req.user._id
		const { name, categoryId, amount } = req.body
		try {
			const cat = await Category.findOne({ categoryId })
			const newRecord = await Record.create({
				name,
				amount,
				userId,
				categoryId: cat._id,
			})
			return res.status(200).json({
				status: 'success',
				message: 'Record is created successfully.',
				newRecord,
			})
		} catch (err) {
			next(err)
		}
	},
	getAllRecords: async (req, res, next) => {
		// #swagger.tags = ['Records']
		try {
			const allRecords = await Record.find()
				.populate('userId', ['name'])
				.populate('categoryId', ['name'])
				.exec()
			return res.status(200).json({
				status: 'success',
				allRecords,
			})
		} catch (err) {
			next(err)
		}
	},
	getRecord: async (req, res, next) => {
		// #swagger.tags = ['Records']
		const _id = req.params._id
		try {
			const foundRecord = await Record.findById(_id)
			return res.status(200).json({
				status: 'success',
				foundRecord,
			})
		} catch (err) {
			next(err)
		}
	},
	deleteRecord: async (req, res, next) => {
		// #swagger.tags = ['Records']
		const _id = req.params._id
		try {
			const foundRecord = await Record.findById(_id)
			if (!foundRecord) {
				return res.status(404).json({
					status: 'error',
					message: 'Record is not found.',
				})
			}
			await Record.deleteOne({ _id })
			return res.status(200).json({
				status: 'success',
			})
		} catch (err) {
			next(err)
		}
	},
	editRecord: async (req, res, next) => {
		// #swagger.tags = ['Records']
		const _id = req.params._id
		const { name, categoryId, amount } = req.body
		try {
			const cat = await Category.findOne({ categoryId })
			if (!cat) {
				return res
					.status(404)
					.json({ status: 'error', message: 'Can not find the category.' })
			}
			const updatedRecord = await Record.findByIdAndUpdate(
				_id,
				{ name, categoryId: cat._id, amount },
				{
					new: true,
				}
			)
				.populate('categoryId', ['name'])
				.populate('userId', ['name'])
			return res.status(200).json({
				status: 'success',
				updatedRecord,
			})
		} catch (err) {
			next(err)
		}
	},
}

module.exports = recordController
