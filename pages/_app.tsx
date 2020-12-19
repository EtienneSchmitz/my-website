import "fontsource-roboto";
import "../styles/globals.css";

import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import Header from "../src/components/Header";
import theme from "../src/theme";

export const cache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>Etienne Schmitz | Développeur web et robotique</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      </CacheProvider>
  );
}

export default MyApp;
