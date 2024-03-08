import React, { HTMLAttributes } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import Link from "next/link";
import { LinkSimple as LinkIcon } from "@phosphor-icons/react";
// Components
import PreviewCode from "./docs/PreviewCode";
import SingleCode from "./docs/SingleCode";
import Code from "./docs/Code/Code";
// Config
import mdx from "@/config/mdx";

type MDXComponents =
  | "pre"
  | "h1"
  | "h2"
  | "h3"
  | "p"
  | "code"
  | "li"
  | "ul"
  | "hr"
  | "table"
  | "thead"
  | "tbody"
  | "tr"
  | "td"
  | "th"
  | "a"
  | "em";

interface MDXProps extends MDXRemoteProps {
  classNames?: Partial<Record<MDXComponents, string>>;
  transform?: Partial<
    Record<MDXComponents, (el: React.JSX.Element) => React.ReactNode>
  >;
}

const MDX = ({ components, classNames, transform, ...props }: MDXProps) => {
  const t = (el: React.JSX.Element): any => {
    const key: MDXComponents = el.type;

    if (!transform || transform[key] === undefined) {
      return el;
    }

    const func: (el: React.ReactNode) => React.ReactNode = transform[
      key
    ] as any;

    return func(el);
  };

  const c = (key: MDXComponents) =>
    classNames && classNames[key] ? classNames[key] : "";

  return (
    <MDXRemote
      {...props}
      scope={mdx}
      components={{
        pre: ({ children, ...props }: any) => {
          const language =
            children.props.className?.replace("language-", "") || "jsx";

          const code = (children?.props.children?.trim() as string) || "";

          if (props.preview) {
            return t(
              <PreviewCode
                name={props.name}
                icon={props.icon}
                value={code}
                language={language}
                {...props}
              />
            );
          }

          if (Array.isArray(props.files) && props.files.length > 1) {
            return t(<Code files={props.files} {...props} />);
          }

          return t(
            <SingleCode
              value={code}
              language={language}
              name={props.name}
              icon={props.icon}
              {...props}
            />
          );
        },
        h1: ({ children, ...props }) => {
          return t(
            <h1
              className={`text-3xl sm:text-4xl font-bold text-base-900 dark:text-white tracking-tight ${c(
                "h1"
              )}`}
              {...props}
            >
              {children}
            </h1>
          );
        },
        h2: ({ children, ...props }) => {
          return t(
            <h2
              className={`text-xl sm:text-2xl font-bold text-base-900 dark:text-white tracking-tight ${c(
                "h2"
              )}`}
              {...props}
            >
              {children}
            </h2>
          );
        },
        h3: ({ children, ...props }) => {
          return t(
            <h3
              className={`text-lg sm:text-xl font-bold text-base-900 dark:text-white tracking-tight ${c(
                "h3"
              )}`}
              {...props}
            >
              {children}
            </h3>
          );
        },
        p: ({ children, ...props }) =>
          t(
            <p
              className={`text-base-700 dark:text-base-200 leading-7 my-2 w-full ${c(
                "p"
              )}`}
              {...props}
            >
              {children}
            </p>
          ),
        em: ({ children, ...props }) =>
          t(
            <em
              className={`text-primary-500 not-italic h-fit px-1.5 py-0.5 dark:bg-primary-400/10 bg-primary-800/10 rounded-md ${c(
                "em"
              )}`}
              {...props}
            >
              {children}
            </em>
          ),
        code: ({ children, ...props }) =>
          t(
            <code
              className={`dark:text-white text-base-900 dark:bg-base-800 bg-base-100 border dark:border-base-700 border-base-300 px-1.5 py-0.5 rounded text-sm ${c(
                "code"
              )}`}
              {...props}
            >
              {children}
            </code>
          ),
        ul: ({ children, ...props }) =>
          t(
            <ul
              className={`dark:text-white text-base-800 list-disc list-inside my-2 ${c(
                "ul"
              )}`}
              {...props}
            >
              {children}
            </ul>
          ),
        li: ({ children, ...props }) =>
          t(
            <li
              className={`dark:text-white text-base-800 ${c("li")}`}
              {...props}
            >
              {children}
            </li>
          ),
        hr: ({ children, ...props }) =>
          t(
            <hr
              className={`bg-base-700 dark:bg-base-400 border-none h-px ${c(
                "hr"
              )}`}
              {...props}
            >
              {children}
            </hr>
          ),
        table: ({ children, ...props }) =>
          t(
            <table
              className={`dark:text-white text-base-800 text-sm mt-4 ${c(
                "table"
              )}`}
              {...props}
            >
              {children}
            </table>
          ),
        thead: ({ children, ...props }) =>
          t(
            <thead
              className={`dark:border-base-700 border-base-300 ${c("thead")}`}
              {...props}
            >
              {children}
            </thead>
          ),
        tbody: ({ children, ...props }) =>
          t(
            <tbody
              className={`dark:border-base-800 border-base-200 ${c("tbody")}`}
              {...props}
            >
              {children}
            </tbody>
          ),
        tr: ({ children, ...props }) =>
          t(
            <tr className={`border-b border-inherit ${c("tr")}`} {...props}>
              {children}
            </tr>
          ),
        td: ({ children, ...props }) =>
          t(
            <td className={`p-2 first:!pl-0 ${c("td")}`} {...props}>
              {children}
            </td>
          ),
        th: ({ children, ...props }) =>
          t(
            <th
              className={`pb-2 px-2 first:!pl-0 text-left font-semibold ${c(
                "th"
              )}`}
              {...props}
            >
              {children}
            </th>
          ),
        a: ({ children, ...props }: any) =>
          t(
            <Link
              {...props}
              target="_blank"
              className={`text-primary-500 [&>code]:!border-dashed hover:[&>code]:!border-solid hover:[&>code]:border-primary-500 underline decoration-primary-500 decoration-dashed hover:decoration-solid ${c(
                "a"
              )}`}
            >
              {/* <LinkIcon size={12} /> */}
              {children}
            </Link>
          ),
        ...components,
      }}
    />
  );
};

export default MDX;
