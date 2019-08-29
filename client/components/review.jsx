import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  border-radius: 50%;
  height: 50px;
  float: left;
  margin: 3px;
  margin-right: 15px;
  display: block;
`;

const TopDiv = styled.div`
  box-sizing: border-box;
  float: left;
  font-family: Helvetica;
  letter-spacing: 1px;
  font-size: 13px;
  height: 125px;
  width: auto;
  margin-right: 80px;
  margin-top: 10px;
  border-bottom: 1px solid #e4e4e4;
  padding: 10px;
`;

const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 19px;
  margin-bottom: 3px;
`;

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 15px;
  height: 19px;
  margin-bottom: 3px;
`;

const TextDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  word-wrap: break-word;
  height: 19px;
`;

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
    <TopDiv>
      <Img alt={review.custName} className="profile-pic" src={review.custPic} />
      <UserDiv className="username">{review.custName}</UserDiv>
      <ReviewDiv className="date">{review.date}</ReviewDiv>
      <div style={{ clear: 'both' }} />
      <TextDiv className="review-text">{review.reviewText}</TextDiv>
    </TopDiv>
  );
};

export default Review;
