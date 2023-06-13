import "reflect-metadata"
import {ApolloServer } from "apollo-server-express";
import  * as Express from "express";
import {buildSchema, Resolver, Query} from 'type-graphql';
const express =require('express')

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return "Hello World";
  }
}


const main =async () => {
    const schema = await buildSchema({
        resolvers: [HelloResolver],
      })

    const apolloServer = new ApolloServer({});

    const app = express()

    apolloServer.applyMiddleware({app})

    app.listen(4000, () => {
        console.log("Server started on http://localhost:4000/graphql"); 
        
    })
    
}
main();