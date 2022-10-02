import Nav from "./Nav";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import Box from "../Utilities/Box.styled";

export default function Layout({ children }) {
  return (
    <Box css={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <Container as="main" xl display="flex" css={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
