/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import PropTypes from 'prop-types';

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
    clearSearch: PropTypes.func,
  };
  NoResults.defaultProps = {
    searchedTerm: null,
    clearSearch: PropTypes.func,
  };
  const { searchedTerm } = props;
  const { clearSearch } = props;

  return (
    <NoResult>
      <div>
        None of our guests have mentioned "
        <b>{searchedTerm}</b>
        "
      </div>
      <BackSpan onClick={clearSearch}>Back to all reviews</BackSpan>
    </NoResult>
  );
};

export default NoResults;
