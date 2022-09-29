import { useTheme as useNextTheme } from "next-themes";
import { Navbar, Link, Switch, useTheme } from "@nextui-org/react";
import NextLink from "next/link";

export default function Nav() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar
      variant="sticky"
      maxWidth="fluid"
      css={{ borderBottom: "$borderWeights$light solid $colors$border" }}
    >
      <Navbar.Brand>
        <NextLink href="/">
          <Link color="secondary">Buzzinga</Link>
        </NextLink>
      </Navbar.Brand>
      <Navbar.Content activeColor="secondary" variant="underline">
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
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
