import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoHead>Film Info Search</LogoHead>
  )
}

const LogoHead = styled.h1`
  font-size: 24px;
  margin: 40px 0;
  text-transform: uppercase;
`;

export default Logo;