import Head from 'next/head';
import { Fragment } from 'react';
import GlobalStyle from './global-styled-component';

const _App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default _App
