import React from 'react';
import styled from 'styled-components';

const MovieDesc = ({ query, movie, movieList, loading }) => {
  function imgError(e) {
    e.target.onerror = null;
    e.target.src ="https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg";
  }

  // Renders if the movie title exists
  if (loading) {
    return (
      <DescContainer>
        <span style={{ textTransform: 'uppercase' }}>Loading...</span>
      </DescContainer>
    )
  }
  if (movie.Title) {
    return (
      <DescContainer>
        <div className="img-wrapper">
          <img
            src={
              movie.Poster === "N/A"
                ? "https://www.wildhareboca.com/wp-content/uploads/sites/310/2018/03/image-not-available.jpg"
                : movie.Poster
            }
            alt={movie.Title}
            onError={imgError}
          />
        </div>
        <div className="film-info">
          <div className="film-info--head-container">
            <h3 className="film-info--title">{movie.Title}</h3>
            <span className="accent-text">{movie.Year}</span>
            <p className="film-info--summary">
              <span className="accent-text-strong">Plot Summary:</span>
              <br />
              {movie.Plot}
            </p>
          <a className="film-info--link" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">See on IMDB</a>
          </div>
        </div>
      </DescContainer>
    );

    // Renders on site initialization or if a movie hasn't been selected from the list
  } else if((query === "" && (Array.isArray(movieList) && movieList.length === 0)) || (query !== "" && (Array.isArray(movieList) && movieList.length > 0))) {
    return <DescContainer>
      <h2>Find information on your favorite pieces of film.</h2>
    </DescContainer>

    // Renders if there isn't a query match with the API
  } else if (query !== "" && !movie.Title){
    return <DescContainer>
      <p className="film-info--no-results">Unfortunately, there were no film results for "<span className="film-info--no-results-alt">{query}</span>"</p>
    </DescContainer>
  }
};

const DescContainer = styled.div`
  display: flex;
  height: 460px;
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

  @media(max-width: 560px) {
    height: 380px;
    padding: 24px 0 0 0;

    & h2 {
      width: 100%;
      font-size: 36px;
      align-self: flex-start;
    }

    & div img {
      height: 160px;
    }
  }
`

export default MovieDesc;