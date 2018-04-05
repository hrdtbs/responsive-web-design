import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
          />
          <link
            href="https://fonts.googleapis.com/earlyaccess/mplus1p.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/atom-one-dark.min.css"
          />
          <link
            rel="stylesheet"
            href={process.env.BACKEND_URL + "static/css/typography.css"}
          />
          <title>Responsive Web Design</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
