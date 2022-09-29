import Nav from "./Nav";
import Footer from "./Footer";
import { Container } from "@nextui-org/react";
import { StyledLayout } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Nav />
      <Container xl css={{ flexGrow: 1 }}>
        {children}
      </Container>
      <Footer />
    </StyledLayout>
  );
}
