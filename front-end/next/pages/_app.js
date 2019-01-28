import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../layout';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps } { ...router } />
        </Layout>
      </Container>
    );
  }
}
