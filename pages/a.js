import React from "stilren/react";
import Link from "next/link";
import { Button } from "@material-ui/core";

export default function APage() {
  return (
    <div>
      <p>Stilren A</p>
      <Link href="/b" passHref>
        <Button variant="outlined" $color="red">
          Go to b
        </Button>
      </Link>
      <Link href="/c" passHref>
        <a>C</a>
      </Link>
    </div>
  );
}
