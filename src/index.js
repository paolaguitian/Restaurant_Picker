import React from 'react';
import ReactDOM from 'react-dom';
// import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { API_KEY } from '../.env';
import App from './App';


/*
FILED GITUB ISSUE: https://github.com/Yelp/yelp-fusion/issues/579.
Moving to rest in meantime

const httpLink = createHttpLink({
  uri: 'https://api.yelp.com/v3/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${API_KEY}`,
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
      'Accept-Language': 'en-US',

    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

});

client.
  query({
    query: gql`
    query business {
      query business(id: "garaje-san-francisco") {
        name
        id
        alias
        rating
        url
      }
    }
  `
  })
  .then(result => console.log(result))
  */
ReactDOM.render(<App />, document.getElementById("root"));

