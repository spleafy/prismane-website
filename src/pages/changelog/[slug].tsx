import Head from "next/head";
import Image from "next/image";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import semver from "semver";
// Containers
import Hero from "@/containers/changelog/Hero";
import Version from "@/containers/changelog/Version";

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), "src/content/changelog/");

  const files = fs.readdirSync(directoryPath);

  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".mdx", "") },
  }));

  paths.push({
    params: { slug: "latest" },
  });

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({ params }: any) {
  const { slug } = params;

  const directoryPath = path.join(process.cwd(), "src/content/changelog/");

  if (slug === "latest") {
    const files = fs.readdirSync(directoryPath);

    const sorted = files
      .map((fileName) => {
        const version = fileName.replace(".mdx", "");

        return {
          fileName,
          version: semver.valid(version) || version,
        };
      })
      .sort((a, b) => semver.compare(b.version, a.version));

    const filePath = path.join(directoryPath, sorted[0].fileName);

    const file = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(file);

    const version = {
      version: sorted[0].fileName.split(".mdx")[0],
      content,
      data,
    };

    return {
      props: {
        version,
      },
    };
  }

  const filePath = path.join(directoryPath, `${slug}.mdx`);

  const file = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(file);

  const version = {
    version: slug,
    content,
    data,
  };

  return {
    props: {
      version,
    },
  };
}

const Page = ({ version }: any) => {
  return (
    <>
      <Head>
        <title>Prismane / {version.version}</title>
        <meta
          name="description"
          content="Stay updated with the latest changes and enhancements in Prismane UI library. Discover new features, improvements, and bug fixes in our detailed changelog."
        />
        <meta
          name="twitter:image"
          content={`/release_banners/${version.version}.png`}
        />
        <meta
          property="og:image"
          content={`/release_banners/${version.version}.png`}
        />
      </Head>
      <Image
        src="/mesh_grid.png"
        alt="Grid Mesh Background"
        className="object-contain opacity-10 blend-to-bottom"
        fill
      />
      <Image
        src="/mesh_gradient_11.png"
        alt="Mesh Gradient Background"
        className="object-cover dark:opacity-20 opacity-30 blend-to-top rotate-180"
        fill
      />
      <Hero />
      <Version {...version} />
    </>
  );
};

export default Page;
