import React from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { File, TerminalWindow, Browser } from '@phosphor-icons/react';
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
// Lib
import { getAllDocFiles, buildDocsTree, findDocBySlug } from '@/lib/docs';
// Types
import { DocsFrontmatter, DocFile, DocDirectory } from '@/types/docs';

interface PageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>, DocsFrontmatter>;
  slugs: string[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docsTree = await buildDocsTree(
    path.join(process.cwd(), 'src/content/docs')
  );

  const paths = getAllDocFiles(docsTree).map((file) => ({
    params: { slug: file.slug.split('/') }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  try {
    const slugs = params?.slug as string[];

    if (!slugs) {
      return { notFound: true };
    }

    const filePath = `src/content/docs/${slugs.join('/')}.mdx`;

    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const source = await serialize<Record<string, unknown>, DocsFrontmatter>(
      fileContent,
      {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeMdxCodeProps as any]
        },
        parseFrontmatter: true
      }
    );

    return {
      props: {
        source,
        slugs
      }
    };
  } catch (error) {
    console.error('Error fetching MDX content:', error);

    return { notFound: true };
  }
};

export default function Page({ source, slugs }: PageProps) {
  const itemTitle = source.frontmatter.title;

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
      <Docs slugs={slugs} frontmatter={source.frontmatter}>
        {
          <MDX
            {...source}
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
