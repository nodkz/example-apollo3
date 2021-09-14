import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// The document (which is SSR-only) needs to be customized to expose the locale
// data for the user's locale for React Intl to work in the browser.
export default class MyDocument extends Document<any> {
  render() {
    const { locale } = this.props;

    return (
      <Html lang={locale}>
        <Head>
          <script src="https://unpkg.com/react-render-tracker" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
