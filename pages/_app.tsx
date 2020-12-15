import "../styles/globals.css";
import Head from 'next/head'
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Etienne Schmitz | Développeur web et robotique</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
