import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Head from './Head';
import Header from './header';
import Footer from './footer';
import { theme, GlobalStyle } from './constants';

import addIcons from './fontAwesome';
addIcons();

const LayoutDiv = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`;

const Inner = styled.div`
  margin: 0px auto;
`;

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LayoutDiv>
          <Head />
          <GlobalStyle />
          <Header />
          <Inner>{this.props.children}</Inner>
        </LayoutDiv>
      </ThemeProvider>
    );
  }
}

export default Layout;
