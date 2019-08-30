/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';
import ReviewList from './reviewlist.jsx';
import Search from './search.jsx';
import NoResults from './noresults.jsx';

const ReviewDiv = styled.div`
  display: block;
  box-sizing: border-box;
`;

const MainStar = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SecondStar = styled.div`
  display: flex;
  margin-top: 5px;
  height: 30px;
`;

const StarBox = styled.div`
  display: block;
  box-sizing: border-box;
`;

const LeftBox = styled.div`
  width: 50%;
  float: left;
`;

const RightBox = styled.div`
  width: 50%;
  float: right;
`;

const MainH2 = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #484848;
  font-style: Roboto;
`;

const MainH3 = styled.h3`
  font-size: 14px;
  color: #484848;
  font-style: Helvetica;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      searchedTerm: null,
    };
    this.getAccuracyStars = this.getAccuracyStars.bind(this);
    this.getCommunicationStars = this.getCommunicationStars.bind(this);
    this.getCleanlinessStars = this.getCleanlinessStars.bind(this);
    this.getLocationStars = this.getLocationStars.bind(this);
    this.getCheckInStars = this.getCheckInStars.bind(this);
    this.getValueStars = this.getValueStars.bind(this);
    this.getTotalStars = this.getTotalStars.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.sortReviewsDate = this.sortReviewsDate.bind(this);
  }

  componentDidMount() {
    $.get('/api/reviews/1', (reviews) => {
      this.sortReviewsDate(reviews);
      this.getAccuracyStars();
      this.getCommunicationStars();
      this.getCleanlinessStars();
      this.getLocationStars();
      this.getCheckInStars();
      this.getValueStars();
      this.getTotalStars();
    });
  }

  getTotalStars() {
    const { accuracy } = this.state;
    const { communication } = this.state;
    const { cleanliness } = this.state;
    const { location } = this.state;
    const { checkIn } = this.state;
    const { value } = this.state;
    const total = accuracy + communication + cleanliness + location + checkIn + value;
    const avg = total / 6;
    this.setState({ totalScore: avg });
    return avg;
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

  handleSearch(searchedTerm) {
    this.setState({ searchedTerm });
  }

  clearSearch() {
    this.setState({ searchedTerm: null });
  }

  sortReviewsDate(reviews) {
    function sortFunction(a, b) {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateA < dateB ? 1 : -1;
    }
    const newReviews = reviews.sort(sortFunction);
    this.setState({ reviews: newReviews });
  }

  filterReviewsBySearchedTerm() {
    const { searchedTerm } = this.state;
    const { reviews } = this.state;
    const results = [];
    if (searchedTerm) {
      reviews.filter((review) => {
        if (review.reviewText.indexOf(searchedTerm) > -1) {
          results.push(review);
        }
        return undefined;
      });
      return results;
    }
    return reviews;
  }

  render() {
    const { reviews } = this.state;
    const { accuracy } = this.state;
    const { totalScore } = this.state;
    const { communication } = this.state;
    const { cleanliness } = this.state;
    const { location } = this.state;
    const { checkIn } = this.state;
    const { value } = this.state;
    const { searchedTerm } = this.state;
    const reviewList = this.filterReviewsBySearchedTerm();

    return (
      <ReviewDiv>
        <MainStar style={{ borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#e4e4e4' }}>
          <MainH2>{`${reviews.length} Reviews`}</MainH2>
          <div style={{ marginTop: '25px', marginLeft: '15px', marginRight: 'auto' }}>
            <StarRatings
              className="main-star"
              rating={totalScore}
              starDimension="20px"
              starRatedColor="teal"
              numberOfStars={5}
              name="rating"
            />
          </div>
          <Search handleSearch={this.handleSearch} />
        </MainStar>
        {searchedTerm ? <div />
          : (
            <StarBox>
              <LeftBox>
                <SecondStar>
                  <MainH3>Accuracy</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={accuracy}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
                <SecondStar>
                  <MainH3>Communication</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={communication}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
                <SecondStar style={{ marginBottom: '25px' }}>
                  <MainH3>Cleanliness</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={cleanliness}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
              </LeftBox>
              <RightBox>
                <SecondStar>
                  <MainH3>Location</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={location}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
                <SecondStar>
                  <MainH3>Check-In</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={checkIn}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
                <SecondStar>
                  <MainH3>Value</MainH3>
                  <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
                    <StarRatings
                      className="secondary-star"
                      rating={value}
                      starDimension="20px"
                      starRatedColor="teal"
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                </SecondStar>
              </RightBox>
            </StarBox>
          )}
        {reviewList.length
          ? <ReviewList reviews={reviewList} />
          : <NoResults searchedTerm={searchedTerm} handleSearch={this.handleSearch} />}
      </ReviewDiv>
    );
  }
}

export default App;
