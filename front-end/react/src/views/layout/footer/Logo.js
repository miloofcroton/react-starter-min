import React, { PureComponent } from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.img`
  width: 50px;
  padding-top: 10px;
`;

export default class Logo extends PureComponent {

  defaultLogo = '/src/assets/logo/logo.png';
  altLogo = '/src/assets/logo/logo-alt1.png';

  logoMouseOver = ({ target }) => target.src = this.altLogo;
  logoMouseOut = ({ target }) => target.src = this.defaultLogo;

  render() {
    return (
      <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">
        <LogoWrapper
          alt="logo"
          src="/src/assets/logo/logo.png"
          onMouseOver={this.logoMouseOver}
          onMouseOut={this.logoMouseOut}
        />
      </a>
    );
  }
}
