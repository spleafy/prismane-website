import Head from "next/head";
import Image from "next/image";
// Containers
import Hero from "../containers/home/Hero";
import Statistics from "../containers/home/Statistics";
import Theming from "@/containers/home/Theming";
import DarkTheme from "@/containers/home/DarkTheme";
import Customization from "@/containers/home/Customization";
import FormHook from "@/containers/home/FormHook";
import Features from "../containers/home/Features";
import Examples from "../containers/home/Examples";
import Preview from "../containers/home/Preview";
import Socials from "@/containers/Socials";
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
      {/* <Image
        src="/mesh_grid.png"
        alt="Grid Mesh Background"
        className="object-contain opacity-10 dark:opacity-20 blend-to-bottom"
        fill
      />
      <Image
        src="/mesh_gradient_6.png"
        alt="Mesh Gradient Background"
        className="object-cover opacity-20 blend-to-bottom"
        fill
      /> */}
      <Hero />
      <Statistics />
      <Theming />
      <DarkTheme />
      <Customization />
      <FormHook />
      {/* <Features />
      <Preview />
      <Examples /> */}
      <Socials />
      <Start />
    </>
  );
}
