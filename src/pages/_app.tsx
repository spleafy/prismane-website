import "../styles/globals.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/inter/variable.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import type { AppProps } from "next/app";
// Analytics
import GoogleAnalytics from "./GoogleAnalytics";
// Components
import Layout from "@/containers/Layout";
// Theme
import { PrismaneProvider, PRISMANE_COLORS } from "@prismane/core";

export default function App({ Component, pageProps }: AppProps) {
  const theme = {
    mode: "dark",
    colors: {
      primary: PRISMANE_COLORS.pink,
      base: PRISMANE_COLORS.gray,
    },
  };

  return (
    <>
      <GoogleAnalytics />
      <PrismaneProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismaneProvider>
    </>
  );
}
