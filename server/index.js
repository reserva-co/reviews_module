const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require(__dirname + '/../database/mongohelper.js');

app.use(express.static('public'))
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log('listening on port 3000'));


app.get('/api/reviews/1', function (req, res) {
  db.find(1, (reviews, err)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('server log: ', reviews);
      res.send(reviews);
    }
  })
});