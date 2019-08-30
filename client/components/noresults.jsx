import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NoResult = styled.div`
  font-family: Roboto;
  font-size: 15px;
  color: #484848;
  margin-top: 4%;
  margin-left: 25%;
`;

const BackSpan = styled.span`
  color: teal;
  margin-left: 85px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const NoResults = (props) => {
  NoResults.propTypes = {
    searchedTerm: PropTypes.string,
    handleSearch: PropTypes.func,
  };
  NoResults.defaultProps = {
    searchedTerm: null,
    handleSearch: PropTypes.func,
  };
  const { searchedTerm } = props;
  const { handleSearch } = props;

  return (
    <NoResult>
      <div>{`None of our guests have mentioned "${searchedTerm}"`}</div>
      <BackSpan onClick={handleSearch}>Back to all reviews</BackSpan>
    </NoResult>
  );
};

export default NoResults;
