const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/category-controller')

router.get('/', categoryController.getAllCategories)
router.post('/new', categoryController.addCategory)
router.get('/:_id', categoryController.getCategory)
router.put('/:_id', categoryController.editCategory)
router.delete('/:_id', categoryController.deleteCategory)

module.exports = router