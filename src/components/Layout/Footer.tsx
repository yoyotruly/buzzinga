import { Container, Link, Spacer, useTheme } from "@nextui-org/react";
import Box from "../Utilities/Box.styled";
import { border, footerHeight } from "../../utilities/constants";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <Box
      css={{
        height: footerHeight,
        borderTop: border,
        fontSize: "$sm",
        display: "flex",
      }}
    >
      <Container as="footer" xl display="flex" alignItems="center">
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
    </Box>
  );
}
