const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/category-controller')

router.post('/new', categoryController.addCategory)
router.get('/:_id', categoryController.getCategory)
router.put('/:_id', categoryController.editCategory)
router.delete('/:_id', categoryController.deleteCategory)
router.get('/', categoryController.getAllCategories)

module.exports = router