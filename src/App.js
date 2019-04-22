import React, { Component } from 'react';
import axios from 'axios';
import MovieDesc from './components/MovieDesc';
import MovieList from './components/MovieList';
import styled from 'styled-components';
import SearchInput from './components/SearchInput';
import { createGlobalStyle } from 'styled-components';
import MoreResults from './components/MoreResults';
import PrevResults from './components/PrevResults';
import Logo from './components/Logo';

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
    const { data } = await axFetch;
    this.setState({ movies: data.Search })
  };

  setRef = ref => {
    this.searchInput = ref;
  };

  onMovieClick = (title) => {
    let URL = `https://www.omdbapi.com/?apikey=d65fcc7d&t=${title}`;

    axios.get(URL).then(res => {
      const { data: result } = res;
      this.setState({ movieInfo: result });
    });
  };

  render() {
    return (
      <AppContainer className="App">

        <GlobalStyle />
        <HeaderContainer>
          <Logo />
          <SearchInput
            onFormSubmit={this.onFormSubmit}
            setRef={this.setRef}
            movies={this.state.movies}
          />
        </HeaderContainer>
        <HeroContainer>
          <MovieDesc movie={this.state.movieInfo} />
          {this.state.movies ? (
            <MovieList
              movies={this.state.movies}
              onMovieClick={this.onMovieClick}
            />
          ) : (
            <></>
          )}
        </HeroContainer>
        <ButtonContainer>
          {this.state.searchPage === 1 ? (
            <></>
          ) : (
            <PrevResults onPrevResults={this.onPrevResults} />
          )}
          {this.state.hasMoreResults === true ? (
            <MoreResults onMoreResults={this.onMoreResults} />
          ) : (
            <></>
          )}
        </ButtonContainer>
      </AppContainer>
    );
  }
}

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    color: white;
  }

  body {
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  #root {
    display: flex;
    justify-content: center;
  }
`;

const AppContainer = styled.main`
  max-height: 100vh;
  margin: 0 32px;
  width: 960px;
`

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 40px 0;
  padding: 8px 0;
`

export default App;