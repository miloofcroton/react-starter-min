import React, { Fragment } from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { history } from '../data/store';
import { Switch } from 'react-router-dom';
import Switches from './layout/switches';

import { ThemeProvider } from 'styled-components';
import constants from './layout/theme/constants';
import GlobalStyle from './layout/theme/style';

import Head from './layout/head';
import Header from './layout/header';
import Footer from './layout/footer';

import { hot } from 'react-hot-loader/root';

const App = () => {

  return (
    <ThemeProvider theme={constants}>
      <ConnectedRouter history={history}>
        <Fragment>
          <Head/>
          <GlobalStyle/>
          <Header/>
          <Switch>{Switches()}</Switch>
          <Footer/>
        </Fragment>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default hot(App);
