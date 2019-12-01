import React from "stilren/react";
import Link from "next/link";

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Anchor = React.forwardRef((props, ref) => {
  return (
    <a
      $color="#067df7"
      $textDecoration="none"
      $fontSize="13px"
      {...props}
      ref={ref}
    />
  );
});

const Nav = () => (
  <nav>
    <ul $display="flex" $justifyContent="space-between">
      <li $display="flex">
        <Link href="/">
          <Anchor>Home</Anchor>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key} $display="flex">
          <Anchor href={href}>{label}</Anchor>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
