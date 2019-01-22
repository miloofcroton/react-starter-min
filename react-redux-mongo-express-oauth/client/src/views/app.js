import React, { Fragment } from 'react';

import { BrowserRouter, Switch } from 'react-router-dom';
import Switches from './layout/switches';

import { ThemeProvider } from 'styled-components';
import constants from './layout/theme/constants';
import GlobalStyle from './layout/theme/style';

import Head from './layout/head';
import Header from './layout/header';
import Footer from './layout/footer';

const App = () => {

  return (
    <ThemeProvider theme={constants}>
      <BrowserRouter>
        <Fragment>
          <Head/>
          <GlobalStyle/>
          <Header/>
          <Switch>{Switches()}</Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
