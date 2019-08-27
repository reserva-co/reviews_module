/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Review from './review.jsx';


const ReviewList = (props) => {
  ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.any),
  };
  ReviewList.defaultProps = {
    reviews: '',
  };
  const { reviews } = props;
  return (
    <ul className="review-list">
      {reviews.map((review, i) => <Review key={i} review={review} />)}
      <Review review={props} />
    </ul>
  );
};

export default ReviewList;
