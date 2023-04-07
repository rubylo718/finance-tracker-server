const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller')

router.post('/register', userController.addUser)

router.get('/', (req, res) => {
	res.send('welcome')
})

module.exports = router
