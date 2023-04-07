const express = require('express')
const router = express.Router()

const userController = require('../controllers/user-controller')
const authenticated = require('../middleware/authCheck')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

router.post('/register', userController.addUser)
router.post('/login', userController.login)

router.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

router.get('/', authenticated, (req, res) => {
	res.send('welcome')
})

module.exports = router
