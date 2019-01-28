import React from 'react';
import App from '../app';
import { withPrefix } from 'gatsby';

const default404 = withPrefix('/img/confused.gif');

const NotFoundPage = () => (
  <App>
    <div>
      <h1>NOT FOUND</h1>
      <img src={default404}/>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </App>
);

export default NotFoundPage;
