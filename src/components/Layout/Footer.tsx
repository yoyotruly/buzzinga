import { Container, Link, Spacer, useTheme } from "@nextui-org/react";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Container
      fluid
      display="flex"
      alignItems="center"
      css={{
        borderTop: "$borderWeights$light solid $colors$border",
        fontSize: "$sm",
        height: "50px",
      }}
    >
      <Link
        href="https://github.com/yoyotruly/buzzinga"
        block
        color="text"
        target="_blank"
      >
        GitHub
      </Link>

      <Spacer />

      <Link
        href="https://www.linkedin.com/in/yoyoyangca/"
        block
        color="text"
        target="_blank"
      >
        LinkedIn
      </Link>
    </Container>
  );
}
