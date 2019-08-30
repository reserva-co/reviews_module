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

const NoResults = (props) => {
  NoResults.propTypes = {
    searchedTerm: PropTypes.string,
  };
  NoResults.defaultProps = {
    searchedTerm: '',
  };
  const { searchedTerm } = props;

  return (
    <NoResult>
      <div>{`None of our guests have mentioned "${searchedTerm}"`}</div>
    </NoResult>
  );
};

export default NoResults;
