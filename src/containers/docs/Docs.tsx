import { FC, ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GithubLogo, Tag } from "@phosphor-icons/react";
import { Chip } from "@prismane/core";
// Content
import content from "@/content";
import categories from "@/categories";

interface T {
  children?: ReactNode;
}

const Versatile = ({ children }: any) => (
  <div className="flex items-center gap-5">
    <h1 className="text-base-900 dark:text-white text-2xl sm:text-4xl font-bold">
      {children}
    </h1>
    <Link href="/docs/getting-started/versatile-components">
      <Chip>Versatile Component</Chip>
    </Link>
  </div>
);

export const Docs: FC<T> = ({ children }) => {
  const router = useRouter();

  const { asPath } = router;

  const path = asPath.replace("/docs", "");

  const splitRoutes = path.split("/");

  splitRoutes.shift();

  const routes = splitRoutes.map((route) => {
    return route.replace(/[#?].*$/, "");
  });

  const current = content.find((nav: any) => nav.slug === routes[0]);

  const currentIndex = current.items.findIndex(
    (obj: any) => obj.slug === routes[1]
  );

  const currentItem = current.items[currentIndex];

  const [tableOfContents, setTableOfContents] = useState([]);

  useEffect(() => {
    const headings = document.querySelectorAll(".docs-anchor");
    const toc: any = [];

    let currentHeading: any = null;

    headings.forEach((element) => {
      if (element.children[0].tagName === "H2") {
        currentHeading = {
          title: element.children[0].textContent,
          id: element.id,
          subheadings: [],
        };
        toc.push(currentHeading);
      } else if (element.children[0].tagName === "H3" && currentHeading) {
        currentHeading.subheadings.push({
          title: element.children[0].textContent,
          id: element.id,
        });
      }
    });

    setTableOfContents(toc);
  }, [asPath]);

  const [visible, setVisible] = useState<any>("");

  useEffect(() => {
    const elementIds: string[] = tableOfContents.flatMap((item: any) => [
      item.id,
      ...(item.subheadings
        ? item.subheadings.map((subheading: any) => subheading.id)
        : []),
    ]);

    const observer = new IntersectionObserver((entries) => {
      const active = entries.reduceRight(
        (acc: any, item: any) =>
          item.isIntersecting === true && !acc ? item : acc,
        null
      );

      setVisible((pv: any) =>
        active ? active.target.children[0].textContent : pv
      );
    });

    elementIds.forEach((id: any) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        observer.observe(targetElement);
      }
    });
  }, [tableOfContents]);

  return (
    <div className="flex gap-5 items-center mx-auto max-w-[1440px]">
      <nav className="hidden md:flex flex-col gap-5 min-w-[240px] p-5 pl-0 self-start sticky top-24 left-0 max-h-[84vh]">
        {content.map((nav: any, index: number) => (
          <Link
            key={index}
            href={`/docs/${nav.slug}/${nav.items[0].slug}`}
            className="flex flex-col gap-5 px-3 group"
          >
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="flex w-6 h-6 items-center justify-center text-white rounded-sm gradient">
                {nav.icon}
              </div>
              <span
                className={`font-medium text-sm transition-colors ${
                  routes[0] === nav.slug
                    ? "dark:text-primary-500 text-primary-700"
                    : "dark:text-white text-base-900 dark:group-hover:text-base-300 group-hover:text-base-700"
                }`}
              >
                {nav.title}
              </span>
            </div>
          </Link>
        ))}
        <div className="mt-5 flex flex-col gap-2 overflow-y-auto h-full">
          {current.items.map((item: any, index: number) => (
            <Link
              key={index}
              href={`/docs/${
                content.find((nav: any) => nav.slug === routes[0]).slug
              }/${item.slug}`}
              className={`text-sm px-3 py-1 rounded-md font-medium ${
                path.split("/")[path.split("/").length - 1] === item.slug
                  ? "dark:text-primary-500 text-primary-700 bg-primary-700/20"
                  : "dark:text-white text-base-900"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex flex-col grow gap-4 p-5 w-full self-start">
        {currentItem && (
          <>
            {currentItem.versatile ? (
              <Versatile>{currentItem.title}</Versatile>
            ) : (
              <h1 className="text-base-900 dark:text-white text-2xl sm:text-4xl font-bold">
                {currentItem.title}
              </h1>
            )}
            <span className="text-base-800 dark:text-base-100 leading-7 w-full">
              {currentItem.description}
            </span>
          </>
        )}
        {currentItem &&
          ["components", "hooks"].includes(current.slug) &&
          currentItem.category && (
            <div className="flex items-center gap-2 flex-col sm:flex-row">
              <Link
                href={`/docs/${current.slug}/getting-started#${currentItem.category}`}
                className="flex text-sm items-center gap-2 w-full sm:w-fit border rounded-md dark:hover:bg-base-700/10 hover:bg-base-500/10 transition-colors px-4 py-2 cursor-pointer"
              >
                <Tag size={18} /> Category:{" "}
                {currentItem.category
                  .split("-")
                  .map(
                    (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </Link>
              <Link
                href={
                  current.slug === "components"
                    ? `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}/${currentItem.title}.tsx`
                    : `https://github.com/prismaneui/prismane/tree/master/src/${current.slug}/${currentItem.title}.ts`
                }
                target="_blank"
                className="flex text-sm items-center gap-2 w-full sm:w-fit border rounded-md dark:hover:bg-base-700/10 hover:bg-base-500/10 transition-colors px-4 py-2 cursor-pointer"
              >
                <GithubLogo size={18} /> Source
              </Link>
            </div>
          )}
        {children}
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-5">
          <div className="flex grow">
            {currentIndex > 0 && (
              <Link
                className="flex grow justify-between items-center p-3 sm:p-4 sm:pr-6 rounded-md border border-primary-500 text-primary-500 dark:hover:bg-primary-500/5 hover:bg-primary-500/20 transition-colors"
                href={`/docs/${routes[0]}/${
                  current.items[currentIndex - 1].slug
                }`}
              >
                <ArrowLeft size={24} weight="bold" />
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lg sm:text-2xl self-end">
                    Go Back
                  </span>
                  <span className="dark:text-white text-base-900 self-end text-sm sm:text-base">
                    {current.items[currentIndex - 1].title}
                  </span>
                </div>
              </Link>
            )}
          </div>
          <div className="flex grow">
            {currentIndex < current.items.length - 1 && (
              <Link
                className="flex grow justify-between items-center p-3 sm:p-4 sm:pr-6 rounded-md border border-primary-500 text-primary-500 dark:hover:bg-primary-500/5 hover:bg-primary-500/20 transition-colors"
                href={`/docs/${routes[0]}/${
                  current.items[currentIndex + 1].slug
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-lg sm:text-2xl ">
                    Up Next
                  </span>
                  <span className="dark:text-white text-base-900 text-sm sm:text-base">
                    {current.items[currentIndex + 1].title}
                  </span>
                </div>
                <ArrowRight size={24} weight="bold" />
              </Link>
            )}
          </div>
        </div>
      </div>
      {tableOfContents.length > 0 && (
        <div className="hidden lg:flex flex-col self-start w-96 p-5 sticky top-24 left-0 max-h-[84vh] overflow-y-auto">
          <span className="dark:text-white text-base-900 font-bold">
            On This Page
          </span>
          <ul>
            {tableOfContents.map((section: any, index) => (
              <li key={index} className="mt-4 text-sm">
                <Link
                  className={
                    visible === section.title
                      ? "text-primary-500 font-medium"
                      : ""
                  }
                  href={`${router.asPath.replace(/[#?].*$/, "")}#${section.id}`}
                >
                  {section.title}
                </Link>
                {section.subheadings.length > 0 && (
                  <ul className="ml-4">
                    {section.subheadings.map(
                      (subheading: any, subIndex: any) => (
                        <Link
                          key={subIndex}
                          className={
                            visible === subheading.title
                              ? "text-primary-500 font-medium"
                              : ""
                          }
                          href={`${router.asPath.replace(/[#?].*$/, "")}#${
                            subheading.id
                          }`}
                        >
                          <li className="mt-2">{subheading.title}</li>
                        </Link>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Docs;
