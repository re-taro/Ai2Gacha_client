import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript, DocumentInitialProps } from "next/document";
import type { DocumentContext } from "next/document";
import type { ReactElement } from "react";

class Document extends NextDocument {
  static getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
    return NextDocument.getInitialProps(context);
  }

  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
