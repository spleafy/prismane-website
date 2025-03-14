import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tag,
  Intersect,
  Pen,
  ShootingStar,
  Chats,
  HandHeart,
  Note,
  Video,
  Flask
} from '@phosphor-icons/react';
// Components
import Separator from '@/components/Separator';
import Warning from '@/components/docs/Warning';
// Containers
import Breadcrumbs from './Breadcrumbs';
import TableOfContents from './TableOfContents';
import Navigation from './Navigation';
// Hooks
import useNavigation from '@/useNavigation';
// Content
import content from '@/content';
import findBySlugs from '@/findBySlugs';

type SideNavigationProps = {
  items: any;
  toggle: (item: any) => void;
  path: string;
  expanded: any;
  inner?: boolean;
  parentRoute?: string;
};

const SideNavigation = ({
  items,
  toggle,
  path,
  expanded,
  inner,
  parentRoute
}: SideNavigationProps) => (
  <div
    className={`flex flex-col gap-2 ${
      inner
        ? 'inner mb-3 ml-2.5 border-l border-base-200 dark:border-base-800 [&_.inner]:!ml-6'
        : ''
    }`}
  >
    {items.map((item: any, index: number) => (
      <React.Fragment key={index}>
        <Link
          href={
            parentRoute ? `${parentRoute}/${item.slug}` : `/docs/${item.slug}`
          }
          className={`flex cursor-pointer items-center justify-between ${
            inner
              ? `-ml-px border-l border-transparent pl-5 hover:border-base-400 dark:hover:border-base-500 ${
                  path.includes(item.route) ? '!border-primary-500' : ''
                }`
              : ''
          }`}
          onClick={(e) => {
            if (item.items) {
              e.preventDefault();
            }
          }}
        >
          <span
            className={`flex w-full items-center gap-3 whitespace-nowrap text-sm font-medium transition-colors ${
              item.items && item.items.length > 0
                ? 'mb-2 mt-4 !font-semibold text-base-900 dark:text-base-200'
                : `py-0.5 text-base-700 hover:text-base-900 dark:text-base-400 dark:hover:text-base-300 ${
                    path.includes(item.route)
                      ? '!font-semibold !text-primary-500'
                      : ''
                  }`
            }`}
          >
            {item.icon && (
              <div className="flex items-center justify-center text-xl text-inherit">
                {item.icon}
              </div>
            )}
            {item.title}
          </span>
        </Link>
        {item.items && (
          <SideNavigation
            items={item.items}
            path={path}
            toggle={toggle}
            expanded={expanded}
            inner
            parentRoute={
              parentRoute ? `${parentRoute}/${item.slug}` : `/docs/${item.slug}`
            }
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

interface DocsProps {
  children?: ReactNode;
}

export const Docs: FC<DocsProps> = ({ children }) => {
  const { asPath } = useRouter();

  const path = asPath.replace('/docs', '');

  const splitRoutes = path.split('/');

  splitRoutes.shift();

  const routes = splitRoutes.map((route) => {
    return route.replace(/[#?].*$/, '');
  });

  const current = content.find((nav: any) => nav.slug === routes[0]);

  const currentItem = findBySlugs(content, routes);

  const currentCategory = findBySlugs(content, routes.slice(0, -1));

  const { navigation, expanded, toggle } = useNavigation(content);

  return (
    <div className="mx-auto flex w-full max-w-[1280px] items-center gap-5 pt-5">
      <nav className="sticky left-0 top-[88px] hidden max-h-[calc(100vh-100px)] min-w-[240px] flex-col items-stretch gap-5 self-start overflow-y-auto p-5 pl-0 md:flex">
        {content.map((nav: any, index: number) => (
          <Link
            key={index}
            href={`/docs/${nav.slug}/${
              nav.items.length > 0 ? nav.items[0].slug : ''
            }`}
            className="group flex flex-col gap-5 px-3 xl:px-0"
            {...nav.props}
          >
            <div className="group flex cursor-pointer items-center gap-4">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded ${
                  routes[0] === nav.slug
                    ? 'gradient text-white'
                    : 'group-hover:gradient border border-base-300 bg-base-100 text-base-500 group-hover:border-none group-hover:text-white dark:border-base-700 dark:bg-base-900 dark:text-base-400'
                }`}
              >
                {nav.icon}
              </div>
              <span
                className={`text-sm font-medium transition-colors ${
                  routes[0] === nav.slug
                    ? 'text-primary-500'
                    : 'text-base-500 group-hover:text-base-700 dark:text-base-400 dark:group-hover:text-white'
                }`}
              >
                {nav.title}
              </span>
            </div>
          </Link>
        ))}
        <Separator className="mt-2" />
        <div className="flex h-full max-h-full flex-col gap-0.5 px-3 xl:px-0">
          <SideNavigation
            items={navigation.find((nav: any) => nav.slug === routes[0]).items}
            expanded={expanded}
            toggle={toggle}
            path={path}
            parentRoute={routes[0]}
          />
        </div>
      </nav>
      <div className="flex w-full max-w-[1040px] flex-col self-start p-5 [&:has(.docs-anchor)]:!max-w-[800px]">
        <Breadcrumbs
          items={{
            parent: {
              title: current.title,
              slug: current.slug
            },
            child: {
              title: currentItem.title,
              slug: currentItem.slug
            }
          }}
        />
        {currentItem && (
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight text-base-900 dark:text-white sm:text-4xl">
              {currentItem.title}
            </h1>
            {currentItem.description && (
              <span className="mt-4 text-lg text-base-500 dark:text-base-400">
                {currentItem.description}
              </span>
            )}
            {currentItem &&
              ['components', 'hooks'].includes(current.slug) &&
              routes.length >= 3 && (
                <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center">
                  {currentItem.versatile && (
                    <Link
                      href="/docs/getting-started/versatile-components"
                      className="inline-flex h-[30px] flex-shrink-0 items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 transition-colors hover:bg-primary-50 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:bg-white disabled:opacity-75 dark:bg-primary-900/30 dark:text-white dark:ring-primary-700 dark:hover:bg-primary-700/30 dark:focus-visible:ring-primary-400 dark:disabled:bg-primary-900"
                    >
                      <Intersect size={18} /> Versatile Component
                    </Link>
                  )}
                  <Link
                    href={`/docs/${current.slug}/getting-started#${currentCategory.slug}`}
                    className="inline-flex h-[30px] flex-shrink-0 items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-base-900 shadow-sm ring-1 ring-inset ring-base-300 transition-colors hover:bg-base-50 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:bg-white disabled:opacity-75 dark:bg-base-900 dark:text-white dark:ring-base-700 dark:hover:bg-base-700/50 dark:focus-visible:ring-primary-400 dark:disabled:bg-base-900"
                  >
                    <Tag size={18} /> Category:{' '}
                    {currentCategory.slug
                      .split('-')
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')}
                  </Link>
                  <Link
                    href={
                      current.slug === 'components'
                        ? `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}/${currentItem.title}.tsx`
                        : `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}/${currentItem.title}.ts`
                    }
                    target="_blank"
                    className="inline-flex h-[30px] flex-shrink-0 items-center gap-x-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-base-900 shadow-sm ring-1 ring-inset ring-base-300 hover:bg-base-50 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:bg-white disabled:opacity-75 dark:bg-base-900 dark:text-white dark:ring-base-700 dark:hover:bg-base-700/50 dark:focus-visible:ring-primary-400 dark:disabled:bg-base-900"
                  >
                    <Image
                      src="/github_logo.svg"
                      alt="Github Logo"
                      width={18}
                      height={18}
                      className="filter dark:brightness-[100]"
                    />{' '}
                    Source
                  </Link>
                </div>
              )}
            {currentItem && ['components-api'].includes(current.slug) && (
              <Warning className="!mb-0">
                This section of the documentation is currently being updated!
              </Warning>
            )}
            <Separator className="my-8" />
          </div>
        )}
        <div className="flex grow flex-col">{children}</div>
        {currentItem.slug !== 'getting-started' && (
          <Navigation slugs={routes} />
        )}
      </div>
      <TableOfContents>
        <Separator className="my-4" />
        <span className="text-sm font-semibold text-base-900 dark:text-white">
          Community
        </span>
        <Link
          href={`https://github.com/spleafy/prismane-website/tree/main/src/content/${routes.join(
            '/'
          )}.mdx`}
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <Pen size={20} />
          <span>Edit this page</span>
        </Link>
        <Link
          href="https://www.github.com/prismaneui/prismane"
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <ShootingStar size={20} />
          <span>Star on GitHub</span>
        </Link>
        <Link
          href="https://discord.gg/gFvcmdpKeb"
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <Chats size={20} />
          <span>Chat on Discord</span>
        </Link>
        <Link
          href="https://opencollective.com/prismane"
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <HandHeart size={20} />
          <span>Become a sponsor</span>
        </Link>
        <Separator className="my-4" />
        <span className="text-sm font-semibold text-base-900 dark:text-white">
          Ecosystem
        </span>
        <Link
          href="https://medium.com/@prismaneui"
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <Note size={20} />
          <span>Tutorials</span>
        </Link>
        <Link
          href="https://www.youtube.com/@prismaneui"
          target="_blank"
          className="flex items-center gap-1.5 text-sm/6 text-base-500 hover:text-base-700 dark:text-base-400 dark:hover:text-base-200"
        >
          <Video size={20} />
          <span>Video Tutorials</span>
        </Link>
      </TableOfContents>
    </div>
  );
};

export default Docs;
