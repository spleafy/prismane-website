import React from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { File, TerminalWindow, Browser } from '@phosphor-icons/react';
import fs from 'fs';
// MDX Parsing Plugins
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
// Logos
import Yarn from '../../../public/yarn_logo.svg';
import Npm from '../../../public/npm_logo.svg';
import Pnpm from '../../../public/pnpm_logo.svg';
// Content
import content from '@/content';
// Containers
import Docs from '@/containers/docs/Docs';
// MDX
import MDX from '@/components/MDX';
// Utils
import findBySlugs from '@/findBySlugs';
// Docs Components
import HeadingLink from '@/components/docs/HeadingLink';
import Code from '@/components/docs/Code';
import SingleCode from '@/components/docs/SingleCode';
import PreviewCode from '@/components/docs/PreviewCode';
import Details from '@/components/docs/Details';
import Note from '@/components/docs/Note';
import NoteLink from '@/components/docs/NoteLink';
import Warning from '@/components/docs/Warning';
import GettingStarted from '@/components/docs/GettingStarted';
import ColorPalette from '@/components/docs/ColorPalette';
import ImageBanner from '@/components/docs/ImageBanner';
import Community from '@/components/Community';
import VersatileComponents from '@/components/docs/VersatileComponents';

export async function getStaticPaths() {
  const paths: { params: { slug: string[] } }[] = [];

  const process = (items: any, parentRoutes?: string[]) => {
    items.forEach((item: any) => {
      const itemRoutes = parentRoutes
        ? [...parentRoutes, item.slug]
        : [item.slug];

      if (item.items && item.items.length > 0) {
        process(item.items, itemRoutes);
      }

      paths.push({
        params: {
          slug: itemRoutes
        }
      });
    });
  };

  process(content);

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  try {
    const { slug } = params;

    const data = fs.readFileSync(`src/content/${slug.join('/')}.mdx`, 'utf-8');

    const source = await serialize(data, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeMdxCodeProps as any]
      },
      parseFrontmatter: true
    });

    return {
      props: {
        source,
        slug
      }
    };
  } catch (err) {
    return {
      props: {
        source: '',
        slug: ''
      }
    };
  }
}

export default function Page(params: any) {
  const itemTitle = findBySlugs(content, params.slug).title;

  const title = `Prismane / ${itemTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Explore the customizable ${itemTitle} component of Prismane. Discover the power of Prismane's ${itemTitle} component today.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Docs>
        {
          <MDX
            {...params.source}
            transform={{
              h1: (el) => <HeadingLink>{el}</HeadingLink>,
              h2: (el) => <HeadingLink>{el}</HeadingLink>,
              h3: (el) => <HeadingLink>{el}</HeadingLink>
            }}
            components={{
              ColorPalette,
              ImageBanner,
              Community,
              NextImage,
              GettingStarted,
              Code,
              SingleCode,
              PreviewCode,
              Details,
              Note,
              NoteLink,
              Warning,
              VersatileComponents,
              Yarn: () => (
                <NextImage width={16} height={16} src={Yarn} alt="yarn Logo" />
              ),
              Npm: () => (
                <NextImage width={16} height={16} src={Npm} alt="npm Logo" />
              ),
              Pnpm: () => (
                <NextImage width={16} height={16} src={Pnpm} alt="pnpm Logo" />
              ),
              File: () => <File size={16} />,
              Terminal: () => <TerminalWindow size={16} />,
              Browser: () => <Browser size={16} />,
              Video: ({ src }: { src: string }) => (
                <iframe
                  width="100%"
                  height="auto"
                  style={{
                    aspectRatio: '16/9',
                    marginTop: 12
                  }}
                  src={src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )
            }}
          />
        }
      </Docs>
    </>
  );
}
