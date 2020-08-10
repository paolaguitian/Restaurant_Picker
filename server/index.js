const express = require('express')
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'))

// const config = {
//   method: 'post',
//   url: 'https://api.yelp.com/v3/graphql',
//   headers: {
//     'Authorization': 'Bearer 2LoDZqt1aOH-XPiM1ef_kmKybmCiWC4zubqBznxU67xeHgcmg3SXXepn2bT-kavlQT4jwRwd9kZ0Z9zUrm-J_HwcJEKWMYklFbEyHjVz1MGwbeagllK0bJ4_JCMOX3Yx',
//     'Content-Type': 'application/graphql'
//   },
//   data: `
//   {
//     search(term: "burrito",
//             location: "miami",
//             limit: 5) {
//         total
//         business {
//             name
//             url
//         }
//     }
// }
//   `
// };

app.get('/search', (req, res) => {
  const { term, location } = req.query;

  console.log("PAOLA 2", term, location)

  const config = {
    method: 'post',
    url: 'https://api.yelp.com/v3/graphql',
    headers: {
      'Authorization': 'Bearer 2LoDZqt1aOH-XPiM1ef_kmKybmCiWC4zubqBznxU67xeHgcmg3SXXepn2bT-kavlQT4jwRwd9kZ0Z9zUrm-J_HwcJEKWMYklFbEyHjVz1MGwbeagllK0bJ4_JCMOX3Yx',
      'Content-Type': 'application/graphql'
    },
    data: `
    {
      search(term: "${term}",
              location: "${location}",
              limit: 5) {
          total
          business {
              name
              rating
              url
          }
      }
  }
    `
  };
  axios(config)
    .then(function (response) {
      console.log("PAOLA 3")
      res.send(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });

})
console.log("PAOLA 4")

console.log(`listening on ${PORT}`);
app.listen(PORT);
