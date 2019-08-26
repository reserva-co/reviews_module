const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/reserva', {useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Connected to MongoDB');
})

const reviewSchema = new mongoose.Schema({
  custName: String,
  custPic: String,
  date: String,
  reviewText: String,
  totalScore: Number,
  accuracy: Number,
  location: Number,
  communication: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  host: String,
  hostPic: String,
  responseText: String,
  reserva_id: Number 
})

const Review = mongoose.model('Review', reviewSchema);

const find = (id, callback) => {
  Review.find({reserva_id: id}).exec(
    function(err, reviews) {
      if (err) {
        return console.log(err);
      } else {
        return callback(reviews);
      }
    }
  );
}

module.exports.find = find;