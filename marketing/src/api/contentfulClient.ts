import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const clientHttpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/ls9tnx01wozt/environments/${process.env.CONTENTFUL_CDN_ENVIRONMENT}`,
});

const clientAuthLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`,
    },
  }
});

const client = new ApolloClient({
  link: clientAuthLink.concat(clientHttpLink),
  cache: new InMemoryCache(),
});

export default client