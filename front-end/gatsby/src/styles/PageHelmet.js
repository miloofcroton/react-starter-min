import React from 'react';
import Helmet from 'react-helmet';

const PageHelmet = ({ title }) => (
  <Helmet title={`Jack Toumey | ${title}`} />
);

export default PageHelmet;
