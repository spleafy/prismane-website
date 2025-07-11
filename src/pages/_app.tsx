import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import '../styles/globals.css';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import '@fontsource/inter/variable.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
// Analytics
import GoogleAnalytics from './GoogleAnalytics';
// Components
import Layout from '@/containers/Layout';
import Loader from '@/components/Loader';
// Theme
import { PRISMANE_COLORS } from '@prismane/core';

const PrismaneProvider = dynamic(
  () => import('@prismane/core').then((mod) => mod.PrismaneProvider),
  { ssr: false }
);

export default function App({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timeout: any;

    Router.events.on('routeChangeStart', (url) => {
      if (!timeout) {
        timeout = setTimeout(() => {
          setLoading(true);
        }, 150);
      }
    });

    Router.events.on('routeChangeComplete', (url) => {
      clearTimeout(timeout);
      timeout = undefined;
      setLoading(false);
    });

    Router.events.on('routeChangeError', (url) => {
      clearTimeout(timeout);
      timeout = undefined;
      setLoading(false);
    });
  }, []);

  const theme = {
    mode: 'dark',
    colors: {
      primary: PRISMANE_COLORS.pink,
      base: PRISMANE_COLORS.slate
    }
  };

  return (
    <>
      <GoogleAnalytics />
      <PrismaneProvider theme={theme}>
        {loading && <Loader loading={loading} />}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PrismaneProvider>
    </>
  );
}
