import React, { Component } from 'react';
import styled from 'styled-components';

class SearchInput extends Component {
  handleSubmit = (e) => {
    this.props.onFormSubmit(e);
  };

  render() {
    return (
      <InputForm className="search" onSubmit={this.handleSubmit}>
        <input
          className="search--input"
          type="search"
          placeholder="SEARCH BY FILM TITLE..."
          name="movie-search"
          ref={this.props.setRef}
        />
        <button className="search--submit" type="submit">
          <i className="fas fa-arrow-right" />
        </button>
      </InputForm>
    );
  }
};

const InputForm = styled.form`
  width: 320px;
  margin: 12px 0 40px 0;

  & .search--input {
    width: 240px;
    padding: 8px;
    outline: none;
    border: 0;
    border-bottom: 1px solid #ff7844;
    height: 48px;
    vertical-align: middle;
    color: white;
    background: transparent;
    transition: 125ms ease-in-out;
    font-size: 16px;

    &:focus {
      border-bottom: 4px solid #ff7844;
    }
  }

  & .search--submit {
    margin-left: 16px;
    outline: none;
    border: 0;
    height: 48px;
    vertical-align: middle;
    text-transform: uppercase;
    color: #ff7844;
    background: transparent;
    transition: 125ms ease-in-out;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      transform: translateX(4px);
    }
  }
`;

export default SearchInput;