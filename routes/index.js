const express = require('express')
const router = express.Router()

const userRoute = require('./modules/user')
const categoryRoute = require('./modules/category')
const recordRoute = require('./modules/record')
const userController = require('../controllers/user-controller')
const authenticated = require('../middleware/authCheck')

const validationHelper = require('../helper/domain-verify-helper')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

router.use('/users', userRoute)
router.use('/categories', categoryRoute)
router.use('/records', authenticated, recordRoute)

router.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

router.get('/currentUser', authenticated, userController.getCurrentUser)

// for domain verification
router.get('/.well-known/pki-validation/:id', validationHelper)

router.get('/', authenticated, (req, res) => {
	// #swagger.tags = ['Index']
	res.send('welcome')
})

module.exports = router
