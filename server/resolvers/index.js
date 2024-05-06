const { MutationResolver } = require('./mutation');
const { QueryResolver } = require('./queuries');

const resolvers = {
    Query: Object.assign({}, QueryResolver.Query),
    Mutation: Object.assign({}, MutationResolver.Mutation)
}


module.exports = { resolvers }