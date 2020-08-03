import React, { Component } from 'react';
import styled from 'styled-components';

class PrevResults extends Component {
  onPrevResultsClick = () => {
    this.props.onPrevResults();
  }

  render() {
    return (
      <ResultsButton onClick={this.onPrevResultsClick}>
<<<<<<< HEAD
        <i className="fas fa-chevron-left" />
=======
        <i class="fas fa-chevron-left" />
>>>>>>> 2875b2567f1ab5983ad7eed7b4b5a2464f84618e
        <span>Previous</span>
      </ResultsButton>
    );
  }
}

const ResultsButton = styled.button`
  font-weight: 700;
  color: white;
  background: none;
  text-transform: uppercase;
  font-size: 16px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: 8px;

  & span {
    padding: 16px;
    border-bottom: 4px solid transparent;
    transition: 125ms ease-in-out;
  }

  &:hover span {
    border-bottom: 4px solid #ff7844;
  }

  & .fa-chevron-left {
    transition: 125ms ease-in-out;
  }

  &:hover .fa-chevron-left {
    transform: translateX(-4px);
  }
`;

export default PrevResults;
