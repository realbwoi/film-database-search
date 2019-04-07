import React, { Component } from 'react';
import styled from 'styled-components';

class PrevResults extends Component {
  onPrevResultsClick = () => {
    this.props.onPrevResults();
  }

  render() {
    return (
      <ResultsButton onClick={this.onPrevResultsClick}>Previous Results</ResultsButton>
    );
  }
}

const ResultsButton = styled.button`
  height: 40px;
  width: 100px;
  padding: 16px;
  color: white;
  background: green;
`

export default PrevResults;
