import "fontsource-roboto";
import "../styles/globals.css";

import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import Header from "../src/components/Header";
import theme from "../src/theme";

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file
import * as locales from "../locale";

export const cache = createCache({ key: "css", prepend: true });

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

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
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={messages}
        >
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
