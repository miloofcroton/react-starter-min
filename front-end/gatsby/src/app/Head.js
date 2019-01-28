import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ data }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />

      <link
        rel="apple-touch-icon"
        href="/logo/logo.png"
      />
      <link rel="icon" href="/logo/favicon.ico"/>

      <link rel="mask-icon" href="/logo/logo.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
    </Helmet>
  );
};

export default Head;
