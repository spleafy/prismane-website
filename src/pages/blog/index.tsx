import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
// MDX Parsing Plugins
import remarkGfm from "remark-gfm";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
// Containers
import Hero from "@/containers/blog/Hero";
import Section from "@/containers/Section";
// Components
import GlowCard from "@/components/GlowCard";
// Authors
import authors from "@/authors";

export function getStaticProps() {
  const directoryPath = path.join(process.cwd(), "src/content/blog/");

  const fileNames = fs.readdirSync(directoryPath);

  const files: any[] = [];

  fileNames.forEach(async (fileName) => {
    const filePath = path.join(directoryPath, fileName);

    const data = fs.readFileSync(filePath, "utf-8");

    const source: any = await serialize(data, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeMdxCodeProps as any],
      },
      parseFrontmatter: true,
    });

    source.frontmatter.authors = source.frontmatter.authors.map(
      (author: string) => {
        return authors.find(
          (x) => x.id === (author.length > 0 ? JSON.parse(author) : 1)
        );
      }
    );

    source.frontmatter.name = fileName.replace(".mdx", "");

    files.push(source);

    files.sort(
      (a, b) =>
        new Date(b.frontmatter.release).getTime() -
        new Date(a.frontmatter.release).getTime()
    );
  });

  return {
    props: {
      blogs: files,
    },
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
      <Section className="grid !items-start !pt-0 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog: any, index: number) => (
          <Link
            href={`/blog/${blog.frontmatter.name}`}
            key={index}
            className="h-full"
          >
            <GlowCard className="h-full [&>div]:h-full">
              <div className="w-full pb-[55%] relative">
                <Image
                  src={`/blog/${blog.frontmatter.name}/banner.png`}
                  alt="Blog Post Image"
                  fill
                />
              </div>
              <div className="flex flex-col gap-1 px-4 py-5 sm:p-6">
                <div className="inline-flex w-fit mb-6 items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">
                  {blog.frontmatter.tag}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base-900 dark:text-white font-semibold truncate flex items-center gap-1.5 text-lg">
                    {blog.frontmatter.title}
                  </p>
                  <p className="text-sm text-base-500 dark:text-base-400 mt-1 line-clamp-2">
                    {blog.frontmatter.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 mt-auto px-4 py-4 sm:px-6 pt-0">
                <div className="text-base-500 dark:text-base-400">
                  {blog.frontmatter.release}
                </div>
                <div
                  className="flex items-center"
                  style={{
                    direction: "rtl",
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
                          className="inline-flex items-center justify-center flex-shrink-0 rounded-full text-xs ring-2 ring-white dark:ring-gray-900 -mr-2 first:mr-0 lg:hover:scale-110 lg:hover:ring-primary-500 transition-transform"
                          key={index}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </GlowCard>
          </Link>
        ))}
      </Section>
    </>
  );
}
