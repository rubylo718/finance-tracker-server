const express = require('express')
const router = express.Router()
const recordController = require('../../controllers/record-controller')

router.post('/new', recordController.addRecord)
router.get('/:_id', recordController.getRecord)
router.put('/:_id', recordController.editRecord)
router.delete('/:_id', recordController.deleteRecord)
router.get('/', recordController.getAllRecords)

module.exports = router