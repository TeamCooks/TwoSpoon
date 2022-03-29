import { Html, Head, Main, NextScript } from 'next/document';
import { useContext } from 'react';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <div id="loading-start" aria-live="assertive"></div>
        <div id="loading-end" aria-live="assertive"></div>
        <div id="dialog"></div>
        <div id="toast"></div>
        <NextScript />
      </body>
    </Html>
  );
}
