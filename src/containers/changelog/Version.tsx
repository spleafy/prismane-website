import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// Containers
import Section from "@/containers/Section";

type VersionProps = {
  version: string;
  content: string;
  data: {
    [key: string]: any;
  };
} & React.ComponentPropsWithoutRef<"article">;

const Version = ({ version, content, data, ...props }: VersionProps) => {
  return (
    <Section className="!block">
      <article className="flex flex-col md:flex-row gap-6 md:gap-32" {...props}>
        <div className="flex flex-col gap-2 w-48 min-w-[192px] md:sticky top-0 left-0">
          <Link
            href={`/changelog/${version}`}
            target="_blank"
            className="dark:text-primary-500 text-primary-700 bg-primary-700/20 rounded-md px-3 py-0.5 text-center w-fit font-medium cursor-pointer"
          >
            {version}
          </Link>
          {data.release && <span>{data.release}</span>}
        </div>
        <div className="flex flex-col gap-2 grow">
          <h1 className="text-base-900 dark:text-white text-3xl sm:text-4xl font-bold transition-all mb-10">
            {data.title || `🚀 Prismane Version ${version.split("v")[1]}`}
          </h1>
          <div className="flex w-full h-72 relative rounded-lg overflow-hidden mb-10">
            <Image
              src={`/release_banners/${version}.png`}
              className="object-cover"
              alt={`${version} Banner`}
              loading="lazy"
              fill
            />
          </div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children, ...props }: any) => {
                return (
                  <h1
                    className="text-base-900 dark:text-white text-2xl sm:text-3xl font-bold transition-all mt-12 mb-6"
                    {...props}
                  >
                    {children}
                  </h1>
                );
              },
              h2: ({ children, ...props }: any) => {
                return (
                  <h2
                    className="text-base-800 dark:text-base-100 text-xl sm:text-2xl font-bold transition-all mt-12 mb-6"
                    {...props}
                  >
                    {children}
                  </h2>
                );
              },
              h3: ({ children, ...props }: any) => {
                return (
                  <h3
                    className="text-base-800 dark:text-base-100 text-lg sm:text-xl font-bold transition-all mt-12 mb-6"
                    {...props}
                  >
                    {children}
                  </h3>
                );
              },
              h4: ({ children, ...props }: any) => {
                return (
                  <h4
                    className="text-base-800 dark:text-base-100 text-base sm:text-lg font-bold transition-all mt-12 mb-6"
                    {...props}
                  >
                    {children}
                  </h4>
                );
              },
              p: ({ children, ...props }) => (
                <p
                  className="text-base-700 dark:text-base-400 leading-7 w-full text-lg ts:ext-xl"
                  {...props}
                >
                  {children}
                </p>
              ),
              code: ({ children, ...props }) => (
                <code
                  className="text-primary-500 bg-primary-500/10 dark:bg-primary-700/10 px-1 sm:px-2 py-0.5 rounded-md text-lg sm:text-xl"
                  {...props}
                >
                  {children}
                </code>
              ),
              li: ({ children, ...props }) => (
                <li
                  className="dark:text-white text-base-800 text-lg sm:text-xl"
                  {...props}
                >
                  - {children}
                </li>
              ),
              hr: ({ children, ...props }) => (
                <hr
                  className="bg-base-700 dark:bg-base-400 border-none h-px"
                  {...props}
                >
                  {children}
                </hr>
              ),
              table: ({ children, ...props }) => (
                <div className="w-full overflow-x-auto">
                  <table
                    className="dark:text-white text-base-800 text-lg sm:text-xl w-full"
                    {...props}
                  >
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children, ...props }) => (
                <thead
                  className="dark:!bg-base-700/10 !bg-base-500/20 text-lg sm:text-xl"
                  {...props}
                >
                  {children}
                </thead>
              ),
              tr: ({ children, ...props }) => (
                <tr
                  className="w-full border-b dark:border-base-700 border-base-300"
                  {...props}
                >
                  {children}
                </tr>
              ),
              td: ({ children, ...props }) => (
                <td className="px-2 sm:px-6 md:px-8 py-2.5" {...props}>
                  {children}
                </td>
              ),
              th: ({ children, ...props }) => (
                <th
                  className="px-2 sm:px-6 md:px-8 py-2.5 text-left"
                  {...props}
                >
                  {children}
                </th>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
    </Section>
  );
};

export default Version;
