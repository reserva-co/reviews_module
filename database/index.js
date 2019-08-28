/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reserva', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const reviewSchema = new mongoose.Schema({
  custName: String,
  custPic: String,
  date: String,
  reviewText: String,
  accuracy: Number,
  location: Number,
  communication: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  host: String,
  hostPic: String,
  responseText: String,
  reserva_id: Number,
});

const Review = mongoose.model('Review', reviewSchema);

const find = (id, callback) => {
  Review.find({ reserva_id: id }).exec(
    (err, reviews) => {
      if (err) {
        return console.log(err);
      }
      return callback(reviews);
    },
  );
};

module.exports.find = find;
