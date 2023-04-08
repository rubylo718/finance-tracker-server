const mongoose = require('mongoose')
const catSchema = new mongoose.Schema({
	categoryId: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	faIconClass: {
		type: String,
		required: true,
		default: 'fa-solid fa-pen',
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
})

module.exports = mongoose.model('Category', catSchema)
