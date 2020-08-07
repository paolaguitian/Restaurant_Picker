const express = require('express')
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'))

//TODO: PROXY YELP GRAPHQL API
app.get('/buisness', (req, res) => {
  //send a REST request with req.body and return
  //error handling
  res.send('send json !')
})

console.log(`listening on ${PORT}`);
app.listen(PORT);



