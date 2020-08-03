import React from 'react';
import styled from 'styled-components';

const MovieDesc = (props) => {
   function imgError(e) {
     e.target.onerror = null;
     e.target.src =
       "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg";
   };

   // Renders if the movie title exists
   if (props.movie.Title) {
    return (
      <DescContainer>
        <div className="img-wrapper">
          <img
            src={
              props.movie.Poster === "N/A"
                ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"
                : props.movie.Poster
            }
            alt={props.movie.Title}
            onError={imgError}
          />
        </div>
        <div className="film-info">
          <div className="film-info--head-container">
            <h3 className="film-info--title">{props.movie.Title}</h3>
            <span className="accent-text">{props.movie.Year}</span>
            <p className="film-info--summary">
              <span className="accent-text-strong">Plot Summary:</span>
              <br />
              {props.movie.Plot}
            </p>
          <a className="film-info--link" href={`https://www.imdb.com/title/${props.movie.imdbID}`} target="_blank" rel="noopener noreferrer">See on IMDB</a>
          </div>
        </div>
      </DescContainer>
    );

    // Renders on site initialization or if a movie hasn't been selected from the list
  } else if((props.query === "" && (Array.isArray(props.movieList) && props.movieList.length === 0)) || (props.query !== "" && (Array.isArray(props.movieList) && props.movieList.length > 0))) {
    return <DescContainer>
      <h2>Find information on your favorite pieces of film.</h2>
    </DescContainer>

    // Renders if there isn't a query match with the API
  } else if (props.query !== "" && !props.movie.Title){
    return <DescContainer>
      <p className="film-info--no-results">Unfortunately, there were no film results for "<span className="film-info--no-results-alt">{props.query}</span>"</p>
    </DescContainer>
  }
};

const DescContainer = styled.div`
  display: flex;
  height: calc(80vh - 128px);
  align-self: flex-start;
  width: 100%;

  & h2 {
    font-size: 48px;
    margin: 0;
    align-self: center;
    width: 50%;
  }

  & div img {
    height: 300px;
  }

  .film-info {
    &--head-container {
    }

    &--title {
      margin: 0;
      font-size: 24px;
      width: 100%;
      text-transform: uppercase;
    }

    &--summary {
      font-weight: 300;
      font-size: 14px;
    }

    &--link {
      text-decoration: none;
      color: #ff7844;
    }

    &--no-results {
      font-weight: 700;
      font-size: 18px;

      &-alt {
        color: #ff7844;
      }
    }
  }

  .img-wrapper {
    margin-right: 16px;
  }

  .accent-text {
    font-weight: 300;
    font-size: 16px;
    color: rgba(255, 255, 255, .4);

    &-strong {
      font-weight: 400;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
`

export default MovieDesc;