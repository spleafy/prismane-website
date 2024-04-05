import { FC, ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  Tag,
  Intersect,
  Pen,
  ShootingStar,
  Chats,
  HandHeart,
  Note,
  Video,
} from "@phosphor-icons/react";
// Components
import Separator from "@/components/Separator";
// Containers
import Breadcrumbs from "./Breadcrumbs";
import TableOfContents from "./TableOfContents";
import Navigation from "./Navigation";
// Hooks
import useNavigation from "@/useNavigation";
// Content
import content from "@/content";
import findBySlugs from "@/findBySlugs";

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
  parentRoute,
}: SideNavigationProps) => (
  <div
    className={`flex flex-col gap-2 ${
      inner
        ? "ml-2.5 [&_.inner]:!ml-6 mb-3 border-l dark:border-base-800 border-base-200 inner"
        : ""
    }`}
  >
    {items.map((item: any) => (
      <>
        <Link
          href={
            parentRoute ? `${parentRoute}/${item.slug}` : `/docs/${item.slug}`
          }
          className={`flex items-center justify-between cursor-pointer ${
            inner
              ? `pl-5 -ml-px border-l border-transparent hover:border-base-400 dark:hover:border-base-500 ${
                  path.includes(item.route) ? "!border-primary-500" : ""
                }`
              : ""
          }`}
          onClick={(e) => {
            if (item.items) {
              e.preventDefault();
            }
          }}
        >
          <span
            className={`w-full text-sm font-medium flex whitespace-nowrap items-center gap-3 transition-colors ${
              item.items && item.items.length > 0
                ? "mb-2 mt-4 !font-semibold text-base-900 dark:text-base-200"
                : `text-base-700 hover:text-base-900 dark:text-base-400 dark:hover:text-base-300 py-0.5 ${
                    path.includes(item.route)
                      ? "!text-primary-500 !font-semibold"
                      : ""
                  }`
            }`}
          >
            {item.icon && (
              <div className="text-inherit flex items-center justify-center text-xl">
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
      </>
    ))}
  </div>
);

interface DocsProps {
  children?: ReactNode;
}

export const Docs: FC<DocsProps> = ({ children }) => {
  const router = useRouter();

  const { asPath } = router;

  const path = asPath.replace("/docs", "");

  const splitRoutes = path.split("/");

  splitRoutes.shift();

  const routes = splitRoutes.map((route) => {
    return route.replace(/[#?].*$/, "");
  });

  const current = content.find((nav: any) => nav.slug === routes[0]);

  const currentItem = findBySlugs(content, routes);

  const currentCategory = findBySlugs(content, routes.slice(0, -1));

  const { navigation, expanded, toggle } = useNavigation(content);

  return (
    <div className="flex gap-5 items-center mx-auto pt-5 max-w-[1280px]">
      <nav className="hidden md:flex flex-col items-stretch gap-5 min-w-[240px] max-h-[calc(100vh-100px)] p-5 pl-0 self-start sticky top-[88px] left-0 overflow-y-auto">
        {content.map((nav: any, index: number) => (
          <Link
            key={index}
            href={`/docs/${nav.slug}/${
              nav.items.length > 0 ? nav.items[0].slug : ""
            }`}
            className="flex flex-col gap-5 px-3 xl:px-0 group"
            {...nav.props}
          >
            <div className="flex items-center gap-4 cursor-pointer group">
              <div
                className={`flex w-6 h-6 items-center justify-center rounded ${
                  routes[0] === nav.slug
                    ? "gradient text-white"
                    : "border dark:border-base-700 dark:bg-base-900 border-base-300 bg-base-100 dark:text-base-400 text-base-500 group-hover:text-white group-hover:gradient group-hover:border-none"
                }`}
              >
                {nav.icon}
              </div>
              <span
                className={`font-medium text-sm transition-colors ${
                  routes[0] === nav.slug
                    ? "text-primary-500"
                    : "dark:text-base-400 text-base-500 dark:group-hover:text-white group-hover:text-base-700"
                }`}
              >
                {nav.title}
              </span>
            </div>
          </Link>
        ))}
        <Separator className="mt-2" />
        <div className="flex flex-col gap-0.5 px-3 xl:px-0 h-full max-h-full">
          <SideNavigation
            items={navigation.find((nav: any) => nav.slug === routes[0]).items}
            expanded={expanded}
            toggle={toggle}
            path={path}
            parentRoute={routes[0]}
          />
        </div>
      </nav>
      <div className="flex flex-col grow p-5 self-start [&:has(.docs-anchor)]:!max-w-[800px] max-w-[1040px]">
        <Breadcrumbs
          items={{
            parent: {
              title: current.title,
              slug: current.slug,
            },
            child: {
              title: currentItem.title,
              slug: currentItem.slug,
            },
          }}
        />
        {currentItem && (
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-base-900 dark:text-white tracking-tight">
              {currentItem.title}
            </h1>
            {currentItem.description && (
              <span className="mt-4 text-lg text-base-500 dark:text-base-400">
                {currentItem.description}
              </span>
            )}
            {currentItem &&
              ["components", "hooks"].includes(current.slug) &&
              routes.length >= 3 && (
                <div className="flex sm:items-center gap-2 flex-col sm:flex-row mt-8">
                  {currentItem.versatile && (
                    <Link
                      href="/docs/getting-started/versatile-components"
                      className="h-[30px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-primary-300 dark:ring-primary-700 text-primary-900 dark:text-white bg-white hover:bg-primary-50 disabled:bg-white dark:bg-primary-900/30 dark:hover:bg-primary-700/30 dark:disabled:bg-primary-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center transition-colors"
                    >
                      <Intersect size={18} /> Versatile Component
                    </Link>
                  )}
                  <Link
                    href={`/docs/${current.slug}/getting-started#${currentCategory.slug}`}
                    className="h-[30px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-base-300 dark:ring-base-700 text-base-900 dark:text-white bg-white hover:bg-base-50 disabled:bg-white dark:bg-base-900 dark:hover:bg-base-700/50 dark:disabled:bg-base-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center transition-colors"
                  >
                    <Tag size={18} /> Category:{" "}
                    {currentCategory.slug
                      .split("-")
                      .map(
                        (word: any) =>
                          word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Link>
                  <Link
                    href={
                      current.slug === "components"
                        ? `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}/${currentItem.title}.tsx`
                        : `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}/${currentItem.title}.ts`
                    }
                    target="_blank"
                    className="h-[30px] focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-base-300 dark:ring-base-700 text-base-900 dark:text-white bg-white hover:bg-base-50 disabled:bg-white dark:bg-base-900 dark:hover:bg-base-700/50 dark:disabled:bg-base-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  >
                    <Image
                      src="/github_logo.svg"
                      alt="Github Logo"
                      width={18}
                      height={18}
                      className="filter dark:brightness-[100]"
                    />{" "}
                    Source
                  </Link>
                </div>
              )}
            <Separator className="my-8" />
          </div>
        )}
        <div className="flex flex-col grow">{children}</div>
        {currentItem.slug !== "getting-started" && (
          <Navigation slugs={routes} />
        )}
      </div>
      <TableOfContents>
        <Separator className="my-4" />
        <span className="dark:text-white text-base-900 font-semibold text-sm">
          Community
        </span>
        <Link
          href={`https://github.com/spleafy/prismane-website/tree/main/src/content/${routes.join(
            "/"
          )}.mdx`}
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <Pen size={20} />
          <span>Edit this page</span>
        </Link>
        <Link
          href="https://www.github.com/prismaneui/prismane"
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <ShootingStar size={20} />
          <span>Star on GitHub</span>
        </Link>
        <Link
          href="https://discord.gg/gFvcmdpKeb"
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <Chats size={20} />
          <span>Chat on Discord</span>
        </Link>
        <Link
          href="https://opencollective.com/prismane"
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <HandHeart size={20} />
          <span>Become a sponsor</span>
        </Link>
        <Separator className="my-4" />
        <span className="dark:text-white text-base-900 font-semibold text-sm">
          Ecosystem
        </span>
        <Link
          href="https://medium.com/@prismaneui"
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <Note size={20} />
          <span>Tutorials</span>
        </Link>
        <Link
          href="https://www.youtube.com/@prismaneui"
          target="_blank"
          className="flex items-center gap-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 text-sm/6"
        >
          <Video size={20} />
          <span>Video Tutorials</span>
        </Link>
      </TableOfContents>
    </div>
  );
};

export default Docs;
