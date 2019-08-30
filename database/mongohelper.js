/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/reserva', { useNewUrlParser: true });

const users = [
  { name: 'Robert', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/1.jpg' },
  { name: 'Stannis', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/2.jpg' },
  { name: 'Gendry', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/3.jpg' },
  { name: 'Renly', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/4.jpg' },
  { name: 'Brienne', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/5.jpg' },
  { name: 'Melisandre', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/6.jpg' },
  { name: 'Cersei', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/7.jpg' },
  { name: 'Jaimie', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/8.jpg' },
  { name: 'Tywin', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/9.jpg' },
  { name: 'Tyrion', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/10.jpg' },
  { name: 'Varys', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/11.jpg' },
  { name: 'Tommen', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/12.jpg' },
  { name: 'Bronn', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/13.jpg' },
  { name: 'Petyr', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/14.jpg' },
  { name: 'Joffrey', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/15.jpg' },
  { name: 'Margaery', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/16.jpg' },
  { name: 'Sandor', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/17.jpg' },
  { name: 'Gregor', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/18.jpg' },
  { name: 'Aegon', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/19.jpg' },
  { name: 'Daenerys', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/20.jpg' },
  { name: 'Drogo', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/21.jpg' },
  { name: 'Arya', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/22.jpg' },
  { name: 'Bran', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/23.jpg' },
  { name: 'Jon', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/24.jpg' },
  { name: 'Ned', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/25.jpg' },
  { name: 'Sansa', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/26.jpg' },
  { name: 'Robb', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/27.jpg' },
  { name: 'Catelyn', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/28.jpg' },
  { name: 'Asha', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/29.jpg' },
  { name: 'Theon', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/30.jpg' },
  { name: 'Ramsay', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/31.jpg' },
  { name: 'Benjen', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/32.jpg' },
  { name: 'Samwell', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/33.jpg' },
  { name: 'Tormund', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/34.jpg' },
  { name: 'Davos', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/35.jpg' },
  { name: 'Eddard', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/36.jpg' },
  { name: 'Ellaria', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/37.jpg' },
  { name: 'Balon', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/38.jpg' },
  { name: 'Jaqen', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/39.jpg' },
  { name: 'Lyanna', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/40.jpg' },
  { name: 'Jorah', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/41.jpg' },
  { name: 'Nymeria', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/42.jpg' },
  { name: 'Oberyn', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/43.jpg' },
  { name: 'Osha', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/44.jpg' },
  { name: 'Rhaegal', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/45.jpg' },
  { name: 'Rickard', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/46.jpg' },
  { name: 'Ghost', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/47.jpg' },
  { name: 'Lady', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/48.jpg' },
  { name: 'Edmure', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/49.jpg' },
  { name: 'Walder', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/50.jpg' },
  { name: 'Hodor', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/51.jpg' },
  { name: 'Greywind', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/52.jpg' },
  { name: 'Missandei', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/53.jpg' },
  { name: 'Rickon', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/54.jpg' },
  { name: 'Jeyne', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/55.jpg' },
  { name: 'Roose', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/56.jpg' },
  { name: 'Viserys', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/57.jpg' },
  { name: 'Podrick', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/58.jpg' },
  { name: 'Beric', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/59.jpg' },
  { name: 'Ygritte', pic: 'https://reviewmodulepics.s3-us-west-2.amazonaws.com/60.jpg' },
];

const years = [2016, 2017, 2018];


const db = mongoose.connection;

const reviewSchema = new mongoose.Schema({
  accuracy: Number,
  checkIn: Number,
  cleanliness: Number,
  communication: Number,
  custName: String,
  custPic: String,
  date: String,
  host: String,
  hostPic: String,
  location: Number,
  reserva_id: Number,
  responseText: String,
  reviewText: String,
  value: Number,
});

const Review = mongoose.model('Review', reviewSchema);

const getRandomInt = (min, max) => Math.floor(Math.random() * max + min);

const getUser = () => users[getRandomInt(0, 60)];

const getDate = () => {
  const date = `${faker.date.month()} ${years[getRandomInt(0, 3)]}`;
  return date;
};

const getText = () => {
  const text = faker.lorem.sentences(3);
  return text;
};

const getScore = () => {
  const score = getRandomInt(1, 6);
  return score;
};

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Seeding data to MongoDB');

  for (let i = 1; i < 100; i += 1) {
    const totalReviews = getRandomInt(6, 33);
    const host = getUser();
    const responses = Math.floor(totalReviews * 0.3);
    let responseCount = 0;
    for (let j = 1; j < totalReviews; j += 1) {
      const user = getUser();
      const date = getDate();
      if (responses !== responseCount) {
        const review = new Review({
          custName: user.name, custPic: user.pic, date, reviewText: getText(), accuracy: getScore(), location: getScore(), communication: getScore(), checkIn: getScore(), cleanliness: getScore(), value: getScore(), host: host.name, hostPic: host.pic, responseText: getText(), reserva_id: i,
        });
        responseCount += 1;
        review.save((err) => {
          if (err) return console.error(err);
        });
      } else {
        const review = new Review({
          custName: user.name, custPic: user.pic, date, reviewText: getText(), accuracy: getScore(), location: getScore(), communication: getScore(), checkIn: getScore(), cleanliness: getScore(), value: getScore(), host: null, hostPic: null, responseText: null, reserva_id: i,
        });
        review.save((err) => {
          if (err) return console.error(err);
        });
      }
    }
  }
});
