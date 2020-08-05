const express = require('express')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'))

//TODO: PROXY YELP GRAPHQL API
app.get('/buisness', (req, res) => {
  res.send('send fields !')
})

console.log(`listening on ${PORT}`);
app.listen(PORT);

