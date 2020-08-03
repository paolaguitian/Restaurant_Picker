import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TOKEN } from '../.env';
import App from './App';


/*
FILED GITUB ISSUE: https://github.com/Yelp/yelp-fusion/issues/579.
Moving to rest in meantime
*/

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`

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
    query {
      repository(owner:"octocat", name:"Hello-World") {
        issues(last:20, states:CLOSED) {
          edges {
            node {
              title
              url
              labels(first:5) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  })
  .then(result => console.log(result))

ReactDOM.render(<App />, document.getElementById("root"));

