import Document, { Head, Main, NextScript } from "next/document";
import { Provider as StyletronProvider } from "styletron-react";
import { styletron } from "../utils/styletron";
import { StilrenProvider } from "stilren/react";
import { ServerStyleSheets } from "@material-ui/core/styles";

const pseudos = ["hover", "focus"];
const breakpoints = {
  mobile: "(max-width: 768px)",
  desktop: "(min-width: 769px)"
};

class MyDocument extends Document {
  static getInitialProps(props) {
    const sheets = new ServerStyleSheets();
    const page = props.renderPage(App => props =>
      sheets.collect(
        <StilrenProvider
          styletron={styletron}
          breakpoints={breakpoints}
          pseudos={pseudos}
        >
          <App {...props} />
        </StilrenProvider>
      )
    );
    const stylesheets = styletron.getStylesheets() || [];
    return { ...page, stylesheets, materialStyles: sheets.getStyleElement() };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.materialStyles}
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs["data-hydrate"]}
              key={i}
            />
          ))}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            body { font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif; margin: 0; }
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
