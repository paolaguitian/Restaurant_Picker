require('dotenv').config()
const express = require('express')
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('dist'))

app.get('/search', (req, res) => {
  const { term, location } = req.query;

  const config = {
    method: 'post',
    url: 'https://api.yelp.com/v3/graphql',
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`,
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
      res.send(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error);
    });

})


console.log(`listening on ${PORT}`);
app.listen(PORT);
