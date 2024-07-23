import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
// MDX Parsing Plugins
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
// Containers
import Hero from '@/containers/blog/Hero';
import Section from '@/containers/Section';
// Components
import Card from '@/components/Card';
// Authors
import authors from '@/authors';

export function getStaticProps() {
  const directoryPath = path.join(process.cwd(), 'src/content/blog/');

  const fileNames = fs.readdirSync(directoryPath);

  const files: any[] = [];

  fileNames.forEach(async (fileName) => {
    const filePath = path.join(directoryPath, fileName);

    const data = fs.readFileSync(filePath, 'utf-8');

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

    source.frontmatter.name = fileName.replace('.mdx', '');

    files.push(source);

    files.sort(
      (a, b) =>
        new Date(b.frontmatter.release).getTime() -
        new Date(a.frontmatter.release).getTime()
    );
  });

  return {
    props: {
      blogs: files
    }
  };
}

export default function Blog({ blogs }: any) {
  return (
    <>
      <Head>
        <title>Prismane / Blog</title>
        <meta
          name="description"
          content="Engage with insightful articles, explore real-world applications, and stay ahead of the curve with Prismane's official blog."
        />
      </Head>
      <Hero />
      <Section className="grid grid-cols-1 !items-start !pt-0 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog: any, index: number) => (
          <Link
            href={`/blog/${blog.frontmatter.name}`}
            key={index}
            className="h-full"
          >
            <Card
              classNames={{
                wrapper: 'h-full'
              }}
            >
              <div className="relative w-full pb-[55%]">
                <Image
                  src={`/blog/${blog.frontmatter.name}/banner.png`}
                  alt="Blog Post Image"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1 px-4 py-5 sm:p-6">
                <div className="mb-6 inline-flex w-fit items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-500 ring-1 ring-inset ring-primary-500 ring-opacity-25 dark:bg-primary-400 dark:bg-opacity-10 dark:text-primary-400 dark:ring-primary-400 dark:ring-opacity-25">
                  {blog.frontmatter.tag}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="flex items-center gap-1.5 truncate text-lg font-semibold text-base-900 dark:text-white">
                    {blog.frontmatter.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-base-500 dark:text-base-400">
                    {blog.frontmatter.description}
                  </p>
                </div>
              </div>
              <div className="mt-auto flex items-center justify-between gap-3 px-4 py-4 pt-0 sm:px-6">
                <div className="text-base-500 dark:text-base-400">
                  {blog.frontmatter.release}
                </div>
                <div
                  className="flex items-center"
                  style={{
                    direction: 'rtl'
                  }}
                >
                  {blog.frontmatter.authors.map(
                    (author: any, index: number) => {
                      return (
                        <Image
                          width={28}
                          height={28}
                          src={author.picture}
                          alt="Author Picture"
                          className="-mr-2 inline-flex flex-shrink-0 items-center justify-center rounded-full text-xs ring-2 ring-white transition-transform first:mr-0 dark:ring-gray-900 lg:hover:scale-110 lg:hover:ring-primary-500"
                          key={index}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </Section>
    </>
  );
}
