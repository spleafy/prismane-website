import { Html, Head, Main, NextScript } from "next/document";
// Analytics
import GoogleAnalytics from "./GoogleAnalytics";

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
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
