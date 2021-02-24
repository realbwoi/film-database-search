import React from 'react';
import MovieItem from './MovieItem';
import styled from 'styled-components'

const MovieList = ({ movies, onMovieClick }) => {

  return (
    <UnorderedList>
      {movies.map((item, index) => {
        return <MovieItem
          key={index}
          movies={item}
          onMovieClick={onMovieClick}
        />;
      })}
    </UnorderedList>
  );
}

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  justify-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  @media(max-width: 560px) {
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  }
`

export default MovieList;