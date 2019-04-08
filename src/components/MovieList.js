import React from 'react';
import MovieItem from './MovieItem';
import styled from 'styled-components'

const MovieList = (props) => {
  const movies = props.movies;
  return (
    <UnorderedList>
      {movies.map((item, index) => {
        return <MovieItem
          key={index}
          movies={item}
          onMovieClick={props.onMovieClick}
        />;
      })}
    </UnorderedList>
  );
}

const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  justify-items: center;
  list-style: none;
  padding: 0;
  overflow: scroll;
`

export default MovieList;