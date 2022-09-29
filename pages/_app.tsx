import { NextUIProvider } from "@nextui-org/react";
import Layout from "../src/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}

export default MyApp;
