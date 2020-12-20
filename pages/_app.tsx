import "fontsource-roboto";

import "../styles/globals.css";


import React from "react";
import Head from "next/head";

import Header from "../components/Header";

import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
// import all locales through barrel file
import * as locales from "../locale";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const messages = localeCopy[pathname];

  return (
    <React.Fragment>
      <Head>
        <title>Etienne Schmitz | Développeur web et robotique</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </React.Fragment>
  );
}

export default MyApp;
