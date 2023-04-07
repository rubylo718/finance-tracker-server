const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0'})

const doc = {
  info: {
    title: "Finance Tracker API",
    description: ""
  },
  host: "localhost:8080",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "User functions"
    },
    {
      name: "Records",
      description: "Record functions"
    }
  ]
}

const outputFile = './swagger_output.json'
const endPointFiles = ['./app.js']

swaggerAutogen(outputFile, endPointFiles, doc)