import React from "stilren/react";
import Link from "next/link";

export default function C() {
  return (
    <div>
      <p $color="green">Stilren C</p>
      <Link href="/a">
        <a>A</a>
      </Link>
      <Link href="/b">
        <a>B</a>
      </Link>
    </div>
  );
}
