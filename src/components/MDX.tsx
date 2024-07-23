import React, { HTMLAttributes } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import Link from 'next/link';
import { LinkSimple as LinkIcon } from '@phosphor-icons/react';
// Components
import PreviewCode from './docs/PreviewCode';
import SingleCode from './docs/SingleCode';
import Code from './docs/Code/Code';
// Config
import mdx from '@/config/mdx';

type MDXComponents =
  | 'pre'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'code'
  | 'li'
  | 'ul'
  | 'hr'
  | 'table'
  | 'thead'
  | 'tbody'
  | 'tr'
  | 'td'
  | 'th'
  | 'a'
  | 'em';

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
    classNames && classNames[key] ? classNames[key] : '';

  return (
    <MDXRemote
      {...props}
      scope={mdx}
      components={{
        pre: ({ children, ...props }: any) => {
          const language =
            children.props.className?.replace('language-', '') || 'jsx';

          const code = (children?.props.children?.trim() as string) || '';

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
              className={`text-3xl font-bold tracking-tight text-base-900 dark:text-white sm:text-4xl ${c(
                'h1'
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
              className={`text-xl font-bold tracking-tight text-base-900 dark:text-white sm:text-2xl ${c(
                'h2'
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
              className={`text-lg font-bold tracking-tight text-base-900 dark:text-white sm:text-xl ${c(
                'h3'
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
              className={`my-2 w-full leading-7 text-base-700 dark:text-base-200 ${c(
                'p'
              )}`}
              {...props}
            >
              {children}
            </p>
          ),
        em: ({ children, ...props }) =>
          t(
            <em
              className={`h-fit rounded-md bg-primary-800/10 px-1.5 py-0.5 not-italic text-primary-500 dark:bg-primary-400/10 ${c(
                'em'
              )}`}
              {...props}
            >
              {children}
            </em>
          ),
        code: ({ children, ...props }) =>
          t(
            <code
              className={`rounded border border-base-300 bg-base-100 px-1.5 py-0.5 text-sm text-base-900 dark:border-base-700 dark:bg-base-800 dark:text-white ${c(
                'code'
              )}`}
              {...props}
            >
              {children}
            </code>
          ),
        ul: ({ children, ...props }) =>
          t(
            <ul
              className={`my-2 list-inside list-disc text-base-800 dark:text-white ${c(
                'ul'
              )}`}
              {...props}
            >
              {children}
            </ul>
          ),
        li: ({ children, ...props }) =>
          t(
            <li
              className={`my-1 text-base-800 dark:text-white [&>ul]:ml-6 [&>ul]:!list-[circle] ${c(
                'li'
              )}`}
              {...props}
            >
              {children}
            </li>
          ),
        hr: ({ children, ...props }) =>
          t(
            <hr
              className={`h-px border-none bg-base-700 dark:bg-base-400 ${c(
                'hr'
              )}`}
              {...props}
            >
              {children}
            </hr>
          ),
        table: ({ children, ...props }) =>
          t(
            <table
              className={`mt-4 text-sm text-base-800 dark:text-white ${c(
                'table'
              )}`}
              {...props}
            >
              {children}
            </table>
          ),
        thead: ({ children, ...props }) =>
          t(
            <thead
              className={`border-base-300 dark:border-base-700 ${c('thead')}`}
              {...props}
            >
              {children}
            </thead>
          ),
        tbody: ({ children, ...props }) =>
          t(
            <tbody
              className={`border-base-200 dark:border-base-800 ${c('tbody')}`}
              {...props}
            >
              {children}
            </tbody>
          ),
        tr: ({ children, ...props }) =>
          t(
            <tr className={`border-b border-inherit ${c('tr')}`} {...props}>
              {children}
            </tr>
          ),
        td: ({ children, ...props }) =>
          t(
            <td className={`p-2 first:!pl-0 ${c('td')}`} {...props}>
              {children}
            </td>
          ),
        th: ({ children, ...props }) =>
          t(
            <th
              className={`whitespace-nowrap px-2 pb-2 text-left font-semibold first:!pl-0 ${c(
                'th'
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
              className={`text-primary-500 decoration-primary-500 hover:underline [&>code]:!border-dashed [&>code]:underline [&>code]:decoration-primary-500 hover:[&>code]:!border-solid hover:[&>code]:border-primary-500 ${c(
                'a'
              )}`}
            >
              {/* <LinkIcon size={12} /> */}
              {children}
            </Link>
          ),
        ...components
      }}
    />
  );
};

export default MDX;
