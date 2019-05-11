import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class CommonDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...initialProps, ...page, ...styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>GitBlog</title>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CommonDocument;
