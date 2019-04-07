import React from 'react';
import styled from 'styled-components';

const MovieDesc = (props) => {
  if(!props.movie.Title) {
    return <></>;
  } else {
    return (
      <DescContainer>
        <div>
          <img
            src={
              props.movie.Poster === "N/A"
                ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"
                : props.movie.Poster
            }
            alt={props.movie.Title}
          />
        </div>
        <h2>{props.movie.Title}</h2>
        <h4>
          Directed by <span>{props.movie.Director}</span>
        </h4>
      </DescContainer>
    );
  }
};

const DescContainer = styled.div`
  & div img {
    height: 400px;
  }
`

export default MovieDesc;