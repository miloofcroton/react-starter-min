import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const defaultLogo = withPrefix('/logo/logo.png');
const altLogo = withPrefix('logo/logo-alt1.png');

const LogoWrapper = styled.img`
  width: 50px;
  padding-top: 10px;
`;

export default class Logo extends PureComponent {

  logoMouseOver = ({ target }) => (target.src = altLogo);
  logoMouseOut = ({ target }) => (target.src = defaultLogo);

  render() {
    return (
      <a href="https://www.youtube.com/watch?v=kvDMlk3kSYg">
        <LogoWrapper
          alt="logo"
          src={defaultLogo}
          onMouseOver={this.logoMouseOver}
          onMouseOut={this.logoMouseOut}
        />
      </a>
    );
  }
}
