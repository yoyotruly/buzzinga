import { useTheme as useNextTheme } from "next-themes";
import { Navbar, Link, Switch, useTheme } from "@nextui-org/react";
import NextLink from "next/link";
import Box from "../Utilities/Box.styled";
import { border, activeColor } from "../Utilities/constants";

export default function Nav() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Box
      css={{
        borderBottom: border,
        position: "sticky",
        top: 0,
        zIndex: "$max",
      }}
    >
      <Navbar maxWidth="xl">
        <Navbar.Brand>
          <NextLink href="/">
            <Link color={activeColor}>Buzzinga</Link>
          </NextLink>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} variant="underline">
          <NextLink href="/products">
            <Navbar.Link isActive href="/products">
              Products
            </Navbar.Link>
          </NextLink>
          <NextLink href="/about">
            <Navbar.Link>About</Navbar.Link>
          </NextLink>
          <NextLink href="/contacts">
            <Navbar.Link href="/contacts">Contacts</Navbar.Link>
          </NextLink>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>Sign Up</Navbar.Item>
          <Navbar.Item>Log In</Navbar.Item>
          <Navbar.Item>
            <Switch
              shadow
              color={activeColor}
              checked={isDark}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
}
