/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const db = require(`${__dirname}/../database/index.js`);

const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => console.log('listening on port 3001'));


app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.find(id, (reviews, err) => {
    if (err) {
      console.log(err);
    } else {
      res.send(reviews);
    }
  });
});
