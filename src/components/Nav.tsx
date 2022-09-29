import Link from "next/link";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

export default function Nav() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Buzzinga</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>Sign Up</li>
        <li>Log In</li>
        <li>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
        </li>
      </ul>
    </nav>
  );
}
