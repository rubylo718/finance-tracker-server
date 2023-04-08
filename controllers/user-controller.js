const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
	login: async (req, res, next) => {
		// #swagger.tags = ['Users']
		try {
			let { email, password } = req.body
			if (!email?.trim() || !password?.trim()) {
				return res.status(400).json({
					status: 'error',
					message: 'Lack of info.',
				})
			}
			const user = await User.findOne({ email })
			if (!user) {
				return res.status(401).json({
					status: 'error',
					message: 'User is not found.',
				})
			}

			if (!bcrypt.compareSync(password, user.password)) {
				return res.status(401).json({
					status: 'error',
					message: 'Password incorrect.',
				})
			}

			const payload = { id: user.id }
			const token = jwt.sign(payload, process.env.JWT_SECRET, {
				expiresIn: '7d',
			})
			return res.status(200).json({
				status: 'success',
				message: 'Login successfully.',
				token: token,
			})
		} catch (err) {
			next(err)
		}
	},
	getCurrentUser: async (req, res) => {
		const id = req.user.id
		const user = await User.findById(id, '-password')
		if (!user)
			return res
				.status(404)
				.json({ status: 'error', message: 'User is not found.' })
		return res.status(200).json(user)
	},
}

module.exports = userController
