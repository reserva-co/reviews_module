/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import Review from './review.jsx';

const TopDiv = styled.div`
  display: box;
  margin-top: 16px;
  box-sizing: border-box;
`;

const ResultDiv = styled.div`
  border-bottom: 1px solid #e4e4e4;
`;

const InnerDiv = styled.div`
  margin-left: 200px;
`;

const BackSpan = styled.span`
  display: -webkit-box;
  color: teal;
  margin-left: 255px;
  margin-bottom: 25px;
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
      {searchedTerm
        ? (
          <ResultDiv>
            <InnerDiv>
              {`${reviews.length} `}
              of our guests have mentioned "
              <b>{searchedTerm}</b>
              "
            </InnerDiv>
            <BackSpan onClick={clearSearch}>Back to all reviews</BackSpan>
          </ResultDiv>
        ) : null }
      {reviews.map((review, i) => <Review key={i} review={review} />)}
      <Review review={props} />
    </TopDiv>
  );
};

export default ReviewList;
