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

const BackSpan = styled.span`
  color: teal;
  margin-left: 85px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ReviewList = (props) => {
  ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.any),
    searchedTerm: PropTypes.string,
    clearSearch: PropTypes.func,
  };
  ReviewList.defaultProps = {
    reviews: '',
    searchedTerm: null,
    clearSearch: PropTypes.func,
  };
  const { reviews } = props;
  const { searchedTerm } = props;
  const { clearSearch } = props;

  return (
    <TopDiv className="review-list">
      {reviews.map((review, i) => <Review key={i} review={review} />)}
      <Review review={props} />
      {searchedTerm ? <BackSpan onClick={clearSearch}>Back to all reviews</BackSpan> : null}
    </TopDiv>
  );
};

export default ReviewList;
