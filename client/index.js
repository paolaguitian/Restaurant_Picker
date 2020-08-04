import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const httpLink = createHttpLink({
//   uri: 'https://api.yelp.com/v3/graphql',
//   credentials: 'include',
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${API_KEY}`,
//       'Access-Control-Allow-Origin': '*',
//       'content-type': 'application/json',
//       'Accept-Language': 'en-US',

//     }
//   }
// })
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),

// });

// client.
//   query({
//     query: gql`
//     query business {
//       query business(id: "garaje-san-francisco") {
//         name
//         id
//         alias
//         rating
//         url
//       }
//     }
//   `
//   })
//   .then(result => console.log(result))

ReactDOM.render(<App />, document.getElementById("root"));

