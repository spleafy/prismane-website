import Head from "next/head";
// Containers
import Hero from "../containers/home/Hero";
import Statistics from "../containers/home/Statistics";
import Features from "../containers/home/Features";
import Examples from "../containers/home/Examples";
import Start from "../containers/Start";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prismane / Make great React apps, ultra fast</title>
        <meta
          name="description"
          content="Discover Prismane, an innovative open-source React UI library with 107+ components, 20+ hooks, native dark theme support and TypeScript support  that empowers developers to create exceptional user interfaces."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <Statistics />
      <Features />
      <Examples />
      <Start />
    </>
  );
}
