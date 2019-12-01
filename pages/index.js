import React from "stilren/react";
import Head from "next/head";
import Nav from "../components/nav";

function Card(props) {
  return (
    <a
      $padding="18px 18px 24px"
      $width="220px"
      $textAlign="left"
      $textDecoration="none"
      $color="#434343"
      $border="1px solid #9b9b9b"
      {...props}
    />
  );
}

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />

    <div $width="100%" $color="#333">
      <h1
        $margin="0"
        $width="100%"
        $paddingTop="80px"
        $lineHeight="1.15"
        $fontSize="48px"
        $textAlign="center"
      >
        Welcome to Next.js!
      </h1>
      <p $textAlign="center">
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div
        $maxWidth="800px"
        $margin="80px auto 40px"
        $display="flex"
        $flexDirection="row"
        $justifyContent="space-around"
      >
        <Card href="https://nextjs.org/docs">
          <h3 $margin="0" $color="#067df7" $fontSize="18px">
            Documentation &rarr;
          </h3>
          <p $margin="0" $padding="12px 0 0" $fontSize="13px" $color="#333">
            Learn more about Next.js in the documentation.
          </p>
        </Card>
        <Card href="https://nextjs.org/learn">
          <h3 $margin="0" $color="#067df7" $fontSize="18px">
            Next.js Learn &rarr;
          </h3>
          <p $margin="0" $padding="12px 0 0" $fontSize="13px" $color="#333">
            Learn about Next.js by following an interactive tutorial!
          </p>
        </Card>
        <Card href="https://github.com/zeit/next.js/tree/master/examples">
          <h3 $margin="0" $color="#067df7" $fontSize="18px">
            Examples &rarr;
          </h3>
          <p $margin="0" $padding="12px 0 0" $fontSize="13px" $color="#333">
            Find other example boilerplates on the Next.js GitHub.
          </p>
        </Card>
      </div>
    </div>
  </div>
);

export default Home;
