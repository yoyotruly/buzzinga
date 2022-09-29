import Nav from "./Nav";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";

export default function Layout({ children }) {
  return (
    <Container
      fluid
      display="flex"
      direction="column"
      gap={0}
      css={{ minHeight: "100vh" }}
    >
      <Nav />

      <Container as="main" fluid display="flex" css={{ flexGrow: 1 }}>
        {children}
      </Container>

      <Footer />
    </Container>
  );
}
