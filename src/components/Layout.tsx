import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Buzzinga</title>
        <meta name="description" content="Find what to drink next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div>{ children }</div>

      <Footer />
    </div>
  );
}