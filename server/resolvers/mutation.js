const { createAuthor } = require('../services/author.service')
const MutationResolver = {
    Mutation:{
        hello:() => `Hello graphql api mutation`,
        createAuthor:(parent,args, context, info) => createAuthor()
    }
}

module.exports = { MutationResolver }