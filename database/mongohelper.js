const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/reserva', {useNewUrlParser:true});

const users = [
  {name: "Robert", pic: `https://picsum.photos/id/1/200`},
  {name: "Stannis", pic: `https://picsum.photos/id/0/200`},
  {name: "Gendry", pic: `https://picsum.photos/id/10/200`},
  {name: "Renly", pic: `https://picsum.photos/id/100/200`},
  {name: "Brienne", pic: `https://picsum.photos/id/1001/200`},
  {name: "Melisandre", pic: `https://picsum.photos/id/1002/200`},
  {name: "Cersei", pic: `https://picsum.photos/id/1003/200`},
  {name: "Jaimie", pic: `https://picsum.photos/id/1004/200`},
  {name: "Tywin", pic: `https://picsum.photos/id/1005/200`},
  {name: "Tyrion", pic: `https://picsum.photos/id/1006/200`},
  {name: "Varys", pic: `https://picsum.photos/id/1007/200`},
  {name: "Tommen", pic: `https://picsum.photos/id/1008/200`},
  {name: "Bronn", pic: `https://picsum.photos/id/1009/200`},
  {name: "Petyr", pic: `https://picsum.photos/id/1011/200`},
  {name: "Joffrey", pic: `https://picsum.photos/id/1010/200`},
  {name: "Margaery", pic: `https://picsum.photos/id/1012/200`},
  {name: "Sandor", pic: `https://picsum.photos/id/1013/200`},
  {name: "Gregor", pic: `https://picsum.photos/id/1014/200`},
  {name: "Aegon", pic: `https://picsum.photos/id/1015/200`},
  {name: "Daenerys", pic: `https://picsum.photos/id/1016/200`},
  {name: "Drogo", pic: `https://picsum.photos/id/1017/200`},
  {name: "Arya", pic: `https://picsum.photos/id/1018/200`},
  {name: "Bran", pic: `https://picsum.photos/id/1019/200`},
  {name: "Jon", pic: `https://picsum.photos/id/1020/200`},
  {name: "Ned", pic: `https://picsum.photos/id/1021/200`},
  {name: "Sansa", pic: `https://picsum.photos/id/1022/200`},
  {name: "Robb", pic: `https://picsum.photos/id/1023/200`},
  {name: "Catelyn", pic: `https://picsum.photos/id/1024/200`},
  {name: "Asha", pic: `https://picsum.photos/id/1025/200`},
  {name: "Theon", pic: `https://picsum.photos/id/1026/200`},
  {name: "Ramsay", pic: `https://picsum.photos/id/1027/200`},
  {name: "Benjen", pic: `https://picsum.photos/id/1028/200`},
  {name: "Samwell", pic: `https://picsum.photos/id/1029/200`},
  {name: "Tormund", pic: `https://picsum.photos/id/1030/200`},
  {name: "Davos", pic: `https://picsum.photos/id/1031/200`},
  {name: "Eddard", pic: `https://picsum.photos/id/1032/200`},
  {name: "Ellaria", pic: `https://picsum.photos/id/1033/200`},
  {name: "Balon", pic: `https://picsum.photos/id/1034/200`},
  {name: "Jaqen", pic: `https://picsum.photos/id/1035/200`},
  {name: "Lyanna", pic: `https://picsum.photos/id/1036/200`},
  {name: "Jorah", pic: `https://picsum.photos/id/1037/200`},
  {name: "Nymeria", pic: `https://picsum.photos/id/1038/200`},
  {name: "Oberyn", pic: `https://picsum.photos/id/1039/200`},
  {name: "Osha", pic: `https://picsum.photos/id/1040/200`},
  {name: "Rhaegal", pic: `https://picsum.photos/id/1041/200`},
  {name: "Rickard", pic: `https://picsum.photos/id/1042/200`},
  {name: "Ghost", pic: `https://picsum.photos/id/1043/200`},
  {name: "Lady", pic: `https://picsum.photos/id/1044/200`},
  {name: "Edmure", pic: `https://picsum.photos/id/1045/200`},
  {name: "Walder", pic: `https://picsum.photos/id/1046/200`}
];

const years = [2016, 2017, 2018];


const db = mongoose.connection;

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

const getRandomInt = (max, min) => {
  return Math.floor(Math.random() * max + min);
}

const getUser = () => {
  return users[getRandomInt(50, 0)];
}

const getDate = () => {
  const date = `${faker.date.month()} ${years[getRandomInt(3, 0)]}`;
  return date
}

const getText = () => {
  const text = faker.lorem.sentences(3);
  return text;
}

const getScore = () => {
  const score = getRandomInt(5, 0);
}

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {

  console.log('Seeding data to MongoDB');

  for (var i = 1; i < 101; i++) {
    let totalReviews = getRandomInt(21, 7);
    let host = getUser();
    let responses = Math.floor(totalReviews * .3);
    let responseCount = 0;
    for (var j = 1; j < totalReviews; j++) {
      let user = getUser();
      let date = getDate();
      if (responses !== responseCount) {
        var review = new Review({custName: user.name, custPic: user.pic, date: date, reviewText: getText(), totalScore: getScore(), accuracy: getScore(), location: getScore(), communication: getScore(), checkIn: getScore(), cleanliness: getScore(), value: getScore(), host: host.name, hostPic: host.pic, responseText: getText(), reserva_id: i});
        responseCount++;
        review.save(function (err, review) {
          if (err) return console.error(err);
        })
      } else {
        var review = new Review({custName: user.name, custPic: user.pic, date: date, reviewText: getText(), totalScore: getScore(), accuracy: getScore(), location: getScore(), communication: getScore(), checkIn: getScore(), cleanliness: getScore(), value: getScore(), host: null, hostPic: null, responseText: null, reserva_id: i});
        review.save(function (err, review) {
          if (err) return console.error(err);
        })
      }
    }
  }
})