const { getAuthors } = require("../services/author.service")

const QueryResolver = {
    Query:{
        hello:() => `Hello graphql API`,
        getAuthors:() => getAuthors()
    }
}

module.exports = {QueryResolver} 