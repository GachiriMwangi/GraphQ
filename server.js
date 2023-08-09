const express = require('express') 
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema.js')
const dotenv = require('dotenv')
dotenv.config()

const app = express() 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
}) 