import React, { Component } from 'react';

class SearchInput extends Component {
  handleSubmit = (e) => {
    this.props.onFormSubmit(e);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="search"
          placeholder="Search by movie title"
          name="movie-search"
          ref={this.props.setRef}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
};

export default SearchInput;