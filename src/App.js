import React, { Component } from 'react';
import axios from 'axios';
import MovieDesc from './components/MovieDesc'
import MovieList from './components/MovieList';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import { createGlobalStyle } from 'styled-components';
import MoreResults from './components/MoreResults';
import PrevResults from './components/PrevResults';

class App extends Component {
  state = {
    movies: '',
    movieInfo: {},
    searchQuery: "",
    searchPage: 1,
    hasMoreResults: false
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    let query = this.searchInput.value;
    if (query === "") {
      return;
    }
    let noSpace = query.replace(" ", "%20");
    this.searchInput.value = "";

    this.setState({ searchQuery: noSpace });

    this.onMovieSearch(noSpace);
  };

  onMovieSearch = async (query) => {
    // Grab first URL for search
    await this.setState({ searchPage: 1 });

    let url = await `https://www.omdbapi.com/?apikey=d65fcc7d&s=${query}&page=${
      this.state.searchPage
    }`;

    // Add JSON result to state
    const axFetch = await axios.get(url);
    const data = await axFetch.data;
    this.setState({ movies: data.Search });

    // Check if more results are available
    await this.checkMoreResults(query);
  };

  checkMoreResults = async (query) => {
    const showMoreUrl = await `https://www.omdbapi.com/?apikey=d65fcc7d&s=${query}&page=${this
      .state.searchPage}`;

    const axFetchMore = await axios.get(showMoreUrl);

    if (axFetchMore.data.Search) {
      this.setState({ hasMoreResults: true });
    }
  };

  onMoreResults = async () => {
    await this.setState(prevState => ({
      searchPage: prevState.searchPage + 1
    }));

    let url = await `https://www.omdbapi.com/?apikey=d65fcc7d&s=${this.state.searchQuery}&page=${this.state.searchPage}`;

    const axFetch = await axios.get(url);
    const data = await axFetch.data;
    await this.setState({ movies: data.Search });

    await this.checkMoreResults(this.state.searchQuery);
  };

  onPrevResults = async () => {
    await this.setState(prevState => ({
      searchPage: prevState.searchPage - 1
    }));
    let url = await `https://www.omdbapi.com/?apikey=d65fcc7d&s=${
      this.state.searchQuery
    }&page=${this.state.searchPage}`;

    const axFetch = await axios.get(url);
    const data = await axFetch.data;
    this.setState({ movies: data.Search })
  };

  setRef = ref => {
    this.searchInput = ref;
  };

  onMovieClick = (title) => {
    let URL = `https://www.omdbapi.com/?apikey=d65fcc7d&t=${title}`;

    axios.get(URL).then(res => {
      const result = res.data;
      this.setState({ movieInfo: result });
    });
  };

  render() {
    return (
      <AppContainer className="App">
        <GlobalStyle />
        <HeroContainer>
          <MovieDesc movie={this.state.movieInfo} />
          <Main>
            <h1>
              Movie info,
              <br />à la Carte!
            </h1>
            <SearchInput
              onFormSubmit={this.onFormSubmit}
              setRef={this.setRef}
            />
          </Main>
        </HeroContainer>
        {this.state.movies ? (
          <MovieList
            movies={this.state.movies}
            onMovieClick={this.onMovieClick}
          />
        ) : (
          <></>
        )}
        { this.state.searchPage === 1 ? <></> : <PrevResults onPrevResults={this.onPrevResults} /> }
        { this.state.hasMoreResults === true ? <MoreResults onMoreResults={this.onMoreResults} /> : <></> }
      </AppContainer>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
    font-family: 'Poppins', sans-serif;
    background:
      radial-gradient( circle at right, rgba(240,105,72,1) 0%, rgba(51, 51, 51, 1) 30%) no-repeat,
      radial-gradient( rgba(51, 51, 51, 1), rgba(51, 51, 51, 1));
    color: white;
  }
`;

const AppContainer = styled.div`

`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Main = styled.div`
  & h1 {
    margin: 0;
    padding: 32px 0;
  }
`;

export default App;