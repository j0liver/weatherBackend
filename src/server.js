const { GraphQLServer } = require('graphql-yoga')
const typeDefs = `
type Query {
  description: String
}
`
const resolvers = {
    Query: {
      description: () => `This is the API for a simple blogging application`
    }
  }

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

module.exports = server;