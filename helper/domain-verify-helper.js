const fs = require('fs/promises')

const verificationHelper = async (req, res, next) => {
	const id = req.params.id
	try {
		const data = await fs.readFile(`/.well-known/pki-validation/${id}`, {
			encoding: 'utf8',
		})
		// console.log(data)
	} catch (err) {
		next(err)
	}
}

module.exports = verificationHelper
