const bcrypt = require('bcrypt')
const User = require('../models/user-model')

const userController = {
	addUser: async (req, res, next) => {
    // #swagger.tags = ['Users']
		let { name, email, password, checkPassword } = req.body
		name = name?.trim()
		email = email?.trim()
		password = password?.trim()
		checkPassword = checkPassword?.trim()

		if (!name || !email || !password || !checkPassword) {
			return res.status(400).json({
				status: 'error',
				message: 'Lack of required info.',
			})
		}

		if (password.length < 8) {
			return res.status(400).json({
				status: 'error',
				message: 'Password length must grater than 8.',
			})
		}
		if (password !== checkPassword) {
			return res.status(400).json({
				status: 'error',
				message: 'Password and checkPassword are not same.',
			})
		}
		try {
			const emailExist = await User.findOne({ email })
			if (emailExist) {
				return res.status(400).json({
					status: 'error',
					message: 'This email has been registered.',
				})
			}
			const hash = await bcrypt.hash(password, 10)
			await User.create({ name, email, password: hash })

			return res.status(200).json({
				status: 'success',
				message: 'User registers successfully.',
			})
		} catch (err) {
			next(err)
		}
	},
}

module.exports = userController
