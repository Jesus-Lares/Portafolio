import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../src/components/Layout";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Jesús Lares</title>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="Jesús Lares es un ingeniero mecatronico especializado en robotica y programación (ocasionalmente diseñador)."
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content="Jesús Lares"
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content="Jesús Lares es un ingeniero mecatronico especializado en robotica y programación (ocasionalmente diseñador)."
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content="https://jesuslares.com/"
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" data-react-helmet="true" />
        <meta
          property="twitter:title"
          content="Jesús Lares"
          data-react-helmet="true"
        />
        <meta
          property="twitter:description"
          content="Jesús Lares es un ingeniero mecatronico especializado en robotica y programación (ocasionalmente diseñador)."
          data-react-helmet="true"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
