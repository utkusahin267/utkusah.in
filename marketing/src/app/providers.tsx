"use client"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.URI,
  cache: new InMemoryCache(),
});

const Providers = ({ children }: {
  children: React.ReactNode
}) => (
  <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
);


export default Providers;