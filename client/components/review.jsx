import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  Review.propTypes = {
    review: PropTypes.shape({
      custName: PropTypes.string,
      custPic: PropTypes.string,
      reviewText: PropTypes.string,
      date: PropTypes.string,
    }),
  };
  Review.defaultProps = {
    review: '',
  };

  const { review } = props;
  return (
    <div>
      <img alt={review.custName} className="profile-pic" src={review.custPic} />
      <div className="username">{review.custName}</div>
      <div className="date">{review.date}</div>
      <div className="review-text">{review.reviewText}</div>
    </div>
  );
};

export default Review;
