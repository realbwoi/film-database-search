import React, { Component } from 'react';
import styled from 'styled-components';

class MoreResults extends Component {
  onMoreResultsClick = () => {
    this.props.onMoreResults();
  }

  render() {
    return (
      <NextResults onClick={this.onMoreResultsClick}>
        <span>Next</span>
        <i className="fas fa-chevron-right" />
      </NextResults>
    );
  }
}

const NextResults = styled.button`
  font-weight: 700;
  color: white;
  background: none;
  text-transform: uppercase;
  font-size: 16px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 8px;
  width: 140px;

  & span {
    padding: 16px;
    border-bottom: 4px solid transparent;
    transition: 125ms ease-in-out;
  }

  &:hover span {
    border-bottom: 4px solid #ff7844;
  }

  & .fa-chevron-right {
    transition: 125ms ease-in-out;
  }

  &:hover .fa-chevron-right {
    transform: translateX(4px);
  }
`;

export default MoreResults;
