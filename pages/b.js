import React from "stilren/react";
import Link from "next/link";

export default function B() {
  return (
    <div>
      <p $color="yellow">Stilren B</p>
      <Link href="/a">
        <a>A</a>
      </Link>
      <Link href="/c">
        <a>C</a>
      </Link>
    </div>
  );
}
