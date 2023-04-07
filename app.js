if (process.env.NODE_ENV !== "production") {
	require("dotenv").config()
}
require("./config/mongoose")

const express = require("express")
const port = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`)
})
