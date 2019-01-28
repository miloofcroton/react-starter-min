import React from 'react';
import styled from 'styled-components';
import NavLinks from './Links';

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const Header = () => {
  return (
    <header>
      <h1>Jack Toumey</h1>
      <StyledNav>{NavLinks()}</StyledNav>
    </header>
  );
};

export default Header;
