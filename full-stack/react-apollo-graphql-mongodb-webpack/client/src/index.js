import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';

import { link } from './data/services/apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});

import { Provider } from 'react-redux';
import configureStore from './data/services/redux';
export const store = configureStore();


import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/layout';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
