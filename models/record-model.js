const mongoose = require('mongoose')
const recordSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now,
	},
	amount: {
		type: Number,
		required: true,
		min: 0,
	},
	isIncome: {
		type: Boolean,
		required: true,
		default: false,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		index: true,
		required: true,
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('Record', recordSchema)
