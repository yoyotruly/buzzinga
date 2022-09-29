import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import { Box } from "./Box";

export default function Layout({ children }) {
  return (
    <Box css={{ maxW: "100%" }}>
      <Head>
        <title>Buzzinga</title>
        <meta name="description" content="Find what to drink next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      {children}
      <Footer />
    </Box>
  );
}
