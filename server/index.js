const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { resolvers } = require('./resolvers/index');
const { typeDefs } = require('./models/typeDefs');
const db = require('./models/sequelizeModel')
const app = express()
const PORT = 3000


const server = new ApolloServer({ resolvers, typeDefs });


server.start().then(req => {
    db.sequelize.sync({force:false}).then(() => {
        console.log('DB SYNC SUCCESS')
    })
    server.applyMiddleware({ app });
    app.listen({ port: 3000 }, () => {
        console.log(`graphQL server is running on ${PORT}`)
    })
})

// app.get('/', (req, res) => {
//     res.send('hai from express')
// })

// app.listen(PORT, () => console.log(`port is running on port ${PORT}`))