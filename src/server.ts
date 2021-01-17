import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs, resolvers } from './schema'

const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

const PORT = process.env.PORT ?? 3000

app.get('/', (_, res) => res.json({ msg: 'Hello World' }))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${PORT}!`)
})
