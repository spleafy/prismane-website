import Head from 'next/head';
import Image from 'next/image';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import semver from 'semver';
// MDX Parsing Plugins
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
// Containers
import Hero from '@/containers/changelog/Hero';
import Version from '@/containers/changelog/Version';

export async function getStaticProps() {
  const directoryPath = path.join(process.cwd(), 'src/content/changelog/');

  const files = fs.readdirSync(directoryPath);

  const sorted = files
    .map((fileName) => {
      const version = fileName.replace('.mdx', '');

      return {
        fileName,
        version: semver.valid(version) || version
      };
    })
    .sort((a, b) => semver.compare(b.version, a.version));

  const versions: any[] = [];

  sorted.forEach(async (version) => {
    const filePath = path.join(directoryPath, version.fileName);

    const data = fs.readFileSync(filePath, 'utf-8');

    const source = await serialize(data, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeMdxCodeProps as any]
      },
      parseFrontmatter: true
    });

    versions.push({
      version: version.fileName.replace('.mdx', ''),
      source
    });
  });

  return {
    props: {
      versions
    }
  };
}

export default function Changelog({ versions }: any) {
  return (
    <>
      <Head>
        <title>Prismane / Changelog</title>
        <meta
          name="description"
          content="Stay updated with the latest changes and enhancements in Prismane UI library. Discover new features, improvements, and bug fixes in our detailed changelog."
        />
      </Head>
      {/* <Image
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
      /> */}
      <Hero />
      {versions.map((version: any, index: number) => (
        <Version key={index} {...version} />
      ))}
    </>
  );
}
