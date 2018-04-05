import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/earlyaccess/mplus1p.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/atom-one-dark.min.css"
          />
          <style jsx global>{`
            html {
              font-family: "Mplus 1p";
            }
          `}</style>
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
