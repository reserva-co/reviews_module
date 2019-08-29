/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Review from './review.jsx';

const TopDiv = styled.div`
  display: box;
  margin-top: 16px;
  box-sizing: border-box;
`;

const ReviewList = (props) => {
  ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.any),
  };
  ReviewList.defaultProps = {
    reviews: '',
  };
  const { reviews } = props;
  return (
    <TopDiv className="review-list">
      {reviews.map((review, i) => <Review key={i} review={review} />)}
      <Review review={props} />
    </TopDiv>
  );
};

export default ReviewList;
