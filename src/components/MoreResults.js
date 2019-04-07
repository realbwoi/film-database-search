import React, { Component } from 'react';
import styled from 'styled-components';

class MoreResults extends Component {
  onMoreResultsClick = () => {
    this.props.onMoreResults();
  }

  render() {
    return (
      <NextResults onClick={this.onMoreResultsClick}>Show More</NextResults>
    );
  }
}

const NextResults = styled.button`
  height: 40px;
  width: 100px;
  padding: 16px;
  color: white;
  background: green;
`

export default MoreResults;
