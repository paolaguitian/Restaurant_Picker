import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import API_KEY from '../.env';
import App from './App';

const httpLink = createHttpLink({
  uri: 'https://api.yelp.com/v3',
  credentials: 'include',
});

console.log(API_KEY)
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: 'Bearer 2LoDZqt1aOH-XPiM1ef_kmKybmCiWC4zubqBznxU67xeHgcmg3SXXepn2bT-kavlQT4jwRwd9kZ0Z9zUrm-J_HwcJEKWMYklFbEyHjVz1MGwbeagllK0bJ4_JCMOX3Yx',
      'Content-Type': 'application/graphql',
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
      business(id: "garaje-san-francisco") {
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
ReactDOM.render(<App />, document.getElementById("root"));
