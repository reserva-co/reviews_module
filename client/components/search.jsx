import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search reviews "
            value={value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
