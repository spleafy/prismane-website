import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import {
  File,
  TerminalWindow,
  Browser,
  ArrowLeft
} from '@phosphor-icons/react';
// Logos
import Yarn from '@/../public/yarn_logo.svg';
import Npm from '@/../public/npm_logo.svg';
import Pnpm from '@/../public/pnpm_logo.svg';
// MDX Parsing Plugins
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
// MDX
import MDX from '@/components/MDX';
// Components
import HeadingLink from '@/components/docs/HeadingLink';
import TableOfContents from '@/containers/docs/TableOfContents';
import Separator from '@/components/Separator';
import Note from '@/components/docs/Note';
import Tooltip from '@/components/Tooltip';
// Authors
import authors from '@/authors';
// Containers
import Hero from '@/containers/blog/Hero';

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), 'src/content/blog/');

  const files = fs.readdirSync(directoryPath);

  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace('.mdx', '') }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  const data = fs.readFileSync(`src/content/blog/${slug}.mdx`, 'utf-8');

  const source: any = await serialize(data, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeMdxCodeProps as any]
    },
    parseFrontmatter: true
  });

  source.frontmatter.authors = source.frontmatter.authors.map(
    (author: string) => {
      return authors.find(
        (x) => x.id === (author.length > 0 ? JSON.parse(author) : 1)
      );
    }
  );

  source.frontmatter.name = slug;

  return {
    props: {
      blog: source
    }
  };
}

const Page = ({ blog }: any) => {
  return (
    <>
      <Head>
        <title>Prismane / {blog.frontmatter.title}</title>
        <meta
          name="description"
          content="Stay updated with the latest changes and enhancements in Prismane UI library. Discover new features, improvements, and bug fixes in our detailed changelog."
        />
      </Head>
      <div className="relative mx-auto flex max-w-[1280px] items-center gap-5 px-5 pt-5 xl:px-0">
        <div className="flex w-full grow flex-col">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-base-500 dark:text-base-400">
              <span className="text-primary-500">{blog.frontmatter.tag}</span>
              <span>•</span>
              <span>{blog.frontmatter.release}</span>
            </div>
            <h1 className="relative text-xl font-bold tracking-tight text-base-900 dark:text-white sm:text-3xl sm:text-4xl">
              {blog.frontmatter.title}
              <div className="group relative hidden xl:flex">
                <Link href="/blog">
                  <button className="absolute -left-6 inline-flex flex-shrink-0 -translate-x-full -translate-y-full items-center gap-x-2.5 rounded-full bg-base-50 p-2.5 text-sm font-medium text-base-700 shadow-sm ring-1 ring-inset ring-base-300 hover:bg-base-100 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:bg-base-50 disabled:opacity-75 dark:bg-base-800 dark:text-base-200 dark:ring-base-700 dark:hover:bg-base-700/50 dark:focus-visible:ring-primary-400 dark:disabled:bg-base-800">
                    <ArrowLeft size={24} />
                  </button>
                </Link>
                <Tooltip className="-left-6 -translate-x-full -translate-y-full">
                  Go back to blog
                </Tooltip>
              </div>
            </h1>
            <p className="text-base-500 dark:text-base-400 sm:text-lg">
              {blog.frontmatter.description}
            </p>
            <div className="flex items-center gap-2">
              {blog.frontmatter.authors.map((author: any, index: number) => (
                <Link
                  href={`https://www.twitter.com/${author.handle}`}
                  target="_blank"
                  key={index}
                >
                  <button className="group flex items-center gap-2">
                    <Image
                      width={36}
                      height={36}
                      src={author.picture}
                      alt="Author Picture"
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-left text-sm">
                      <span className="font-medium text-base-900 transition-colors group-hover:text-primary-500 dark:text-white">
                        {author.name}
                      </span>
                      <span className="leading-4 text-base-500 dark:text-base-400">
                        @{author.handle}
                      </span>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
            <Separator className="mb-8 mt-4" />
          </div>
          <MDX
            {...blog}
            transform={{
              h1: (el) => <HeadingLink>{el}</HeadingLink>,
              h2: (el) => <HeadingLink>{el}</HeadingLink>,
              h3: (el) => <HeadingLink>{el}</HeadingLink>
            }}
            components={{
              Note,
              Yarn: () => (
                <Image width={16} height={16} src={Yarn} alt="npm Logo" />
              ),
              Npm: () => (
                <Image width={16} height={16} src={Npm} alt="npm Logo" />
              ),
              Pnpm: () => (
                <Image width={16} height={16} src={Pnpm} alt="pnpm Logo" />
              ),
              File: () => <File size={16} />,
              Terminal: () => <TerminalWindow size={16} />,
              Browser: () => <Browser size={16} />,
              img: ({ children, ...props }) => {
                return (
                  <img
                    src={`/blog/${blog.frontmatter.name}/${props.src}`}
                    alt={props.alt ?? ''}
                    className="rounded-md border border-base-200 dark:border-base-700"
                  />
                );
              },
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
        </div>
        <TableOfContents />
      </div>
    </>
  );
};

export default Page;
