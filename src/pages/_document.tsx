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
      <Head>
        <meta property="og:title" content="Prismane" />
        <meta
          property="og:description"
          content="Build stunning user interfaces with ease using 107+ components, 484+ themes, and 20+ custom hooks. Level up your productivity and create exceptional experiences. Join the Prismane community today!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gZN3hZ6/opengraph-banner.png"
        />
        <meta property="og:url" content="https://www.prismane.io" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
