import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log(`
       .-.
      (0.0)
    '=.|m|.='
    .=''"''=.
   `);

  return (
    <Html lang="en" className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
