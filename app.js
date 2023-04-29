if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}
require('./config/mongoose')

const express = require('express')
const passport = require('passport')
const indexRoutes = require('./routes/index')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
	express.static(path.join(__dirname, 'public'), {
		dotfiles: 'allow',
	})
)
app.use(passport.initialize())
app.use(indexRoutes)

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`)
})
