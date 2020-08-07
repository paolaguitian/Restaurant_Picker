const express = require('express')
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'))

const config = {
  method: 'post',
  url: 'https://api.yelp.com/v3/graphql',
  headers: {
    'Authorization': 'Bearer 2LoDZqt1aOH-XPiM1ef_kmKybmCiWC4zubqBznxU67xeHgcmg3SXXepn2bT-kavlQT4jwRwd9kZ0Z9zUrm-J_HwcJEKWMYklFbEyHjVz1MGwbeagllK0bJ4_JCMOX3Yx',
    'Content-Type': 'application/graphql'
  },
  data: `
  {
    business(id: "garaje-san-francisco") {
        name
        id
        rating
        url
    }
  }
  `
};


//TODO: PROXY YELP GRAPHQL API
app.get('/business', (req, res) => {
  //send a REST request with req.body and return
  //error handling
  console.log('making request')

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
