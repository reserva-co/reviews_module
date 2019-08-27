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
      totalScore: 0,
    };
  }

  componentDidMount() {
    $.get('/api/reviews/1', (reviews) => {
      this.setState({ reviews });
      this.getTotalStars();
    });
  }

  getTotalStars() {
    const { reviews } = this.state;
    const mainStars = [];
    let total = 0;
    reviews.map((review) => {
      mainStars.push(review.totalScore);
      total += review.totalScore;
    });
    const avg = total / mainStars.length;
    this.setState({ totalScore: avg });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <div>
          <h3>{`${reviews.length} Reviews`}</h3>
          <StarRatings
            className="main-star"
            rating={this.state.totalScore}
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
