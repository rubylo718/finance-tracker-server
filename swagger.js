const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0'})

const doc = {
  info: {
    title: "Finance Tracker API",
    description: ""
  },
  servers: [
    {
      url: "https://infinite-atoll-36727.herokuapp.com",
      description: "heroku server"
    },    
    {
      url: "http://localhost:8080",
      description: "local server"
    }
  ],
  basePath: "/",
  tags: [
    {
      name: "Index",
      description: "Entry page"
    },
    {
      name: "Categories",
      description: "Category functions"
    },
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