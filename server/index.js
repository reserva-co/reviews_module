/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const db = require(`${__dirname}/../database/index.js`);

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log('listening on port 3000'));


app.get('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.find(id, (reviews, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('server log: ', reviews);
      res.send(reviews);
    }
  });
});
