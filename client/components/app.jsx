/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import ReviewList from './reviewlist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    $.get('/api/reviews/1', (reviews) => {
      this.setState({ reviews });
      this.getTotalStars();
      this.getAccuracyStars();
      this.getCommunicationStars();
      this.getCleanlinessStars();
      this.getLocationStars();
      this.getCheckInStars();
      this.getValueStars();
    });
  }

  getTotalStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.totalScore);
      total += review.totalScore;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ totalScore: avg });
  }

  getAccuracyStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.accuracy);
      total += review.accuracy;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ accuracy: avg });
  }

  getCommunicationStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.communication);
      total += review.communication;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ communication: avg });
  }

  getCleanlinessStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.cleanliness);
      total += review.cleanliness;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ cleanliness: avg });
  }

  getLocationStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.location);
      total += review.location;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ location: avg });
  }

  getCheckInStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.checkIn);
      total += review.checkIn;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ checkIn: avg });
  }

  getValueStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.value);
      total += review.value;
      return total;
    });
    const avg = total / mainStars.length;
    this.setState({ value: avg });
  }

  render() {
    const { reviews } = this.state;
    const { totalScore } = this.state;
    const { accuracy } = this.state;
    const { communication } = this.state;
    const { cleanliness } = this.state;
    const { location } = this.state;
    const { checkIn } = this.state;
    const { value } = this.state;
    return (
      <div>
        <div>
          <h2>{`${reviews.length} Reviews`}</h2>
          <StarRatings
            className="main-star"
            rating={totalScore}
            starDimension="33px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Accuracy</h3>
          <StarRatings
            className="accuracy-star"
            rating={accuracy}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Communication</h3>
          <StarRatings
            className="communication-star"
            rating={communication}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Cleanliness</h3>
          <StarRatings
            className="cleanliness-star"
            rating={cleanliness}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Location</h3>
          <StarRatings
            className="location-star"
            rating={location}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Check-In</h3>
          <StarRatings
            className="checkin-star"
            rating={checkIn}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <div>
          <h3>Value</h3>
          <StarRatings
            className="value-star"
            rating={value}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
