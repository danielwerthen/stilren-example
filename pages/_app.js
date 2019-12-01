import React from "react";
import App from "next/app";
import { styletron, debug } from "../utils/styletron";
import { StilrenProvider } from "stilren/react";
import { StylesProvider } from "@material-ui/core/styles";

const pseudos = ["hover", "focus"];
const breakpoints = {
  mobile: "(max-width: 768px)",
  desktop: "(min-width: 769px)"
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StylesProvider injectFirst>
        <StilrenProvider
          styletron={styletron}
          breakpoints={breakpoints}
          pseudos={pseudos}
        >
          <Component {...pageProps} />
        </StilrenProvider>
      </StylesProvider>
    );
  }
}
