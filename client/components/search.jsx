import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  box-sizing: border-box;
  float: right;
  border: none;
  margin-right: auto;
`;

const SearchDiv = styled.div`
  border: 1px solid #e4e4e4;
  width: 250px;
  height: 25px;
  float: right;
  display: flex;
  align-self: center;
  flex-direction: row-reverse;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Search.propTypes = {
      handleSearch: PropTypes.func,
    };
    Search.defaultProps = {
      handleSearch: PropTypes.func,
    };
    const { value } = this.state;
    const { handleSearch } = this.props;
    handleSearch(value);
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    return (
      <SearchDiv className="search-container">
        <SearchForm onSubmit={this.handleSubmit}>
          <span role="img" aria-label="glass"> 🔍</span>
          <input
            style={{ border: 'none', width: '200px' }}
            type="text"
            placeholder="Search reviews "
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchDiv>
    );
  }
}

export default Search;
