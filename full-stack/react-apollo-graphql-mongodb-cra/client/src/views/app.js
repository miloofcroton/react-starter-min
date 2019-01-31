import React, { Fragment } from 'react';
import { Router } from 'react-router-dom';


import { Switch } from 'react-router-dom';
import Switches from './layout/switches';

import { ThemeProvider } from 'styled-components';
import constants from './layout/theme/constants';
import GlobalStyle from './layout/theme/style';

import Head from './layout/head';
import Header from './layout/header';
import Footer from './layout/footer';

import history from './routes/history';

import withSession from './lib/session/withSession';

const App = ({ session, refetch }) => (
  <ThemeProvider theme={constants}>
    <Router history={history}>
      <Fragment>
        <Head />
        <GlobalStyle />
        <Header session={session} />
        <Switch>{Switches(refetch)}</Switch>
        <Footer />
      </Fragment>
    </Router>
  </ThemeProvider>
);

export default withSession(App);
