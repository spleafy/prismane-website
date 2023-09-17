import Head from "next/head";
import Image from "next/image";
// Containers
import Hero from "../../containers/sponsor/Hero";
import Support from "../../containers/sponsor/Support";
import Start from "../../containers/Start";

export default function Sponsor() {
  return (
    <>
      <Head>
        <title>Prismane / Sponsor</title>
        <meta
          name="description"
          content="Support the growth and development of Prismane! By becoming a sponsor, you contribute to the continuous improvement of Prismane, enabling us to provide free, high-quality tools and resources to the developer community. Together, we can drive innovation, foster collaboration, and make great UI accessible to all."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Image
        src="/mesh_grid_3.png"
        alt="Grid Mesh Background"
        className="object-contain opacity-10 dark:opacity-20 blend-to-bottom"
        fill
      />
      <Image
        src="/mesh_gradient_8.png"
        alt="Mesh Gradient Background"
        className="object-cover opacity-20 blend-to-bottom"
        fill
      />
      <Hero />
      <Support />
      <Start />
    </>
  );
}
