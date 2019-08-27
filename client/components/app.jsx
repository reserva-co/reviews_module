/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
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
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
