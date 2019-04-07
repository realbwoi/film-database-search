import React, { Component } from 'react';
import styled from 'styled-components';

class MovieItem extends Component {
  onFetch = () => {
    this.props.onMovieClick(this.props.movies.Title);
  }

  render() {
    return (
      <ListMovieItem onClick={this.onFetch}>
        <img src={this.props.movies.Poster === "N/A" ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg" : this.props.movies.Poster } alt={this.props.movies.Title} />
        <h4>{this.props.movies.Title}</h4>
      </ListMovieItem>
    );
  }
}

const ListMovieItem = styled.li`
  text-align: center;
  padding: 16px;

  & img {
    height: 200px;
  }

  & h4 {
    margin-top: 0;
    font-weight: 300px;
  }
`

export default MovieItem;