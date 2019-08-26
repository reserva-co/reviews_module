const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require(__dirname + '/../database/index.js');

app.use(express.static('public'))
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => console.log('listening on port 3000'));


app.get('/api/reviews/:id', function (req, res) {
  let id = req.params.id;
  db.find(id, (reviews, err)=> {
    if (err) {
      console.log(err);
    } else {
      console.log('server log: ', reviews);
      res.send(reviews);
    }
  })
});