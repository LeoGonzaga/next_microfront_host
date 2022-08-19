/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <script src="http://localhost:3000/_next/static/chunks/remoteEntry.js" />
      <script src="http://localhost:3001/_next/static/chunks/remoteEntry_2.js" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}