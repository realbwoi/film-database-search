import React, { Component } from 'react';
import styled from 'styled-components';

class MovieItem extends Component {
  onFetch = () => {
    this.props.onMovieClick(this.props.movies.Title);
  }

  imgError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg";
  }

  render() {
    return (
      <ListMovieItem onClick={this.onFetch}>
        <img src={this.props.movies.Poster === "N/A" ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg" : this.props.movies.Poster } alt={this.props.movies.Title} onError={this.imgError} />
        <h4>{this.props.movies.Title}</h4>
      </ListMovieItem>
    );
  }
}

const ListMovieItem = styled.li`
  text-align: center;
  padding: 16px;
  max-width: 148px;
  transition: 125ms ease-in-out;
  animation: fadeInTop 500ms both;
  border-bottom: 4px solid transparent;
  cursor: pointer;

  &:hover {
    background: #27303a;
    border-bottom: 4px solid #ff7844;
  }

  & img {
    width: 96px;
    background: none;
  }

  & h4 {
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 16px;
  }

  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-24px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default MovieItem;