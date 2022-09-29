import { useTheme as useNextTheme } from "next-themes";
import { Navbar, Link, Switch, useTheme } from "@nextui-org/react";
import { Box } from "./Box";

export default function Nav() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Link href="/">Buzzinga</Link>
      </Navbar.Brand>
      <Navbar.Content activeColor="primary" variant="underline">
        <Navbar.Link isActive href="/products">
          Products
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contacts">Contacts</Navbar.Link>
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
