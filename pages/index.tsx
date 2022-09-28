import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buzzinga</title>
        <meta name="description" content="Find what to drink next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Link href="/products">Products</Link>
      </nav>

      <main>Main</main>

      <footer>Footer</footer>
    </div>
  );
}
