import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Buzzinga</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/contacts">Contacts</Link></li>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
    </nav>
  );
}