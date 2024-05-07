const { createAuthor } = require('../services/author.service')
const { createBook } = require('../services/books.service')
const MutationResolver = {
    Mutation:{
        hello:() => `Hello graphql api mutation`,
        createAuthor:(parent,args, context, info) => createAuthor(args,info),
        createBooks:(parent,args,context,info) => createBook(args,info)
    }
}

module.exports = { MutationResolver }