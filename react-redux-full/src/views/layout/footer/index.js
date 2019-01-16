import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import IconList from './IconList';
import Statements from './Statements';

const StyledFooter = styled.footer`
  color: black;
  p {
    margin: 5px auto;
  }
`;

const Footer = () => {

  return (
    <StyledFooter>
      <Logo/>
      <Statements/>
      <IconList/>
    </StyledFooter>
  );
};

export default Footer;
