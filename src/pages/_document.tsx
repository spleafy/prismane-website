import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta
          name="keywords"
          content="React UI library, UI components, component library, design system, web development, front-end development, JavaScript, CSS, responsive design, accessibility, user interface, user experience, developer tools, code reusability, Prismane, Open-source"
        />
        <meta property="og:title" content="Prismane" />
        <meta
          property="og:description"
          content="Build stunning user interfaces with ease using 107+ components, 484+ themes, and 20+ custom hooks. Level up your productivity and create exceptional experiences. Join the Prismane community today!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gjy8wBF/opengraph-banner.png"
        />
        <meta property="og:url" content="https://www.prismane.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@prismaneui" />
        <meta name="twitter:title" content="Prismane" />
        <meta
          name="twitter:description"
          content="Build stunning user interfaces with ease using 107+ components, 484+ themes, and 20+ custom hooks. Level up your productivity and create exceptional experiences. Join the Prismane community today!"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/gjy8wBF/opengraph-banner.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/annieuseyourtelescope/v19/daaLSS4tI2qYYl3Jq9s_Hu74xwktnlKxH6osGVGTkz3A_0YFZQ.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="http://localhost:3000/_next/static/media/poppins-latin-700-normal.9a881e2a.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="http://localhost:3000/_next/static/media/poppins-latin-400-normal.916d3686.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbVmUiAr0klQmz24.woff2"
          as="font"
          type="font/woff2"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Poppins&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
