const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { resolvers } = require('./resolvers/index');
const { typeDefs } = require('./models/typeDefs');
const app = express()
const PORT = 3000


const server = new ApolloServer({ resolvers, typeDefs });


server.start().then(req => {
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () => {
        console.log(`graphQL server is running on ${PORT}`)
    })
})

// app.get('/', (req, res) => {
//     res.send('hai from express')
// })

// app.listen(PORT, () => console.log(`port is running on port ${PORT}`))