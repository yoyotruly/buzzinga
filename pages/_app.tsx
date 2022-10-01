import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Head>
          <title>Buzzinga</title>
          <meta name="description" content="Find what to drink next" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
