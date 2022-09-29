import { Container, Link, Row, Spacer, useTheme } from "@nextui-org/react";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Container
      as="footer"
      fluid
      display="flex"
      alignItems="center"
      css={{
        height: "50px",
        borderTop: "$borderWeights$light solid $colors$border",
        fontSize: "$sm",
      }}
    >
      <Link
        href="https://github.com/yoyotruly/buzzinga"
        color="text"
        target="_blank"
      >
        GitHub
      </Link>

      <Spacer />

      <Link
        href="https://www.linkedin.com/in/yoyoyangca/"
        color="text"
        target="_blank"
      >
        LinkedIn
      </Link>
    </Container>
  );
}
