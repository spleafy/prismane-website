import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/router";
import {
  GithubLogo,
  TwitterLogo,
  Sun,
  Moon,
  Equals,
  X,
} from "@phosphor-icons/react";
// Components
import { ActionButton, Divider, usePrismaneTheme } from "@prismane/core";
// Content
import content from "@/content";

const Header = () => {
  const router = useRouter();

  const { theme, toggleThemeMode } = usePrismaneTheme();

  const [sticky, setSticky] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const { asPath } = router;

  const path = asPath.replace("/docs", "");

  const routes = path.split("/");

  routes.shift();

  const current = content.find((nav: any) =>
    content.map((obj: any) => obj.slug).includes(routes[0])
      ? nav.slug === routes[0]
      : nav.slug === "getting-started"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setSticky(scrollTop !== 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-center z-50 sticky left-0 top-0 transition-all px-5 sm:px-10 ${
        sticky
          ? "dark:bg-[#0c0c0c] bg-white shadow-lg dark:shadow-base-500/5 shadow-base-900/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="flex max-w-[1440px] w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 z-10"
          onClick={() => setExpanded(false)}
        >
          <>
            <Image src="/logo.svg" alt="Logo" width={48} height={48} />
            <span className="hidden sm:inline-block text-3xl whitespace-nowrap dark:text-white text-base-900 font-bold">
              Prismane
            </span>
          </>
        </Link>
        <div
          className={`fixed md:static dark:shadow-base-500/5 shadow-base-900/5 md:shadow-none flex items-center gap-8 transition-all flex-col md:flex-row w-full md:w-fit ${
            sticky ? "top-0 h-full pt-24" : "h-[calc(100%-48px)] top-12 pt-28"
          } md:h-fit bg-white dark:bg-[#0c0c0c] md:bg-transparent md:dark:bg-transparent p-5  md:!p-0 ${
            expanded ? "left-0" : "left-full"
          }`}
        >
          <div className="w-full md:w-fit flex items-center justify-center gap-4 md:gap-8">
            <Link
              href="/docs"
              className="whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-base font-medium gap-2 flex items-center justify-center rounded-md w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 sm:px-4"
              onClick={() => setExpanded(false)}
            >
              <>
                {router.pathname.includes("docs") && (
                  <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
                )}
                Docs
              </>
            </Link>
            <Link
              href="/about-us"
              className="whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-base font-medium gap-2 flex items-center justify-center rounded-md w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 sm:px-4"
              onClick={() => setExpanded(false)}
            >
              <>
                {router.pathname.includes("/about-us") && (
                  <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
                )}
                About Us
              </>
            </Link>
            <Link
              href="/sponsor"
              className="whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-base font-medium gap-2 flex items-center justify-center rounded-md w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 sm:px-4"
              onClick={() => setExpanded(false)}
            >
              {router.pathname.includes("/sponsor") && (
                <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
              )}
              Sponsor
            </Link>
          </div>
          <Divider className="!h-px !w-full md:!hidden" grow={false} />
          <div className="flex md:hidden flex-col w-full gap-5">
            <div className="grid grid-cols-2 gap-5">
              {content.length > 0 &&
                content.map((nav: any, index: number) => (
                  <Link
                    key={index}
                    href={`/docs/${nav.slug}/${nav.items[0].slug}`}
                    className="flex flex-col group"
                    onClick={() => setExpanded(false)}
                  >
                    <div className="flex items-center gap-4 cursor-pointer group">
                      <div className="flex w-6 h-6 min-w-[24px] min-h-[24px] items-center justify-center text-white rounded-sm gradient">
                        {nav.icon}
                      </div>
                      <span
                        className={`font-medium text-sm transition-colors whitespace-nowrap ${
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
            </div>
            <div className="mt-5 flex flex-col gap-2 h-[24vh] overflow-y-auto">
              {content.length > 0 &&
                current &&
                current.items.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={`/docs/${
                      content.find(
                        (nav: any) =>
                          nav.slug ===
                          (content
                            .map((obj: any) => obj.slug)
                            .includes(routes[0])
                            ? routes[0]
                            : "getting-started")
                      ).slug
                    }/${item.slug}`}
                    className={`text-sm px-3 py-1 rounded-md font-medium ${
                      path.split("/")[path.split("/").length - 1] === item.slug
                        ? "dark:text-primary-500 text-primary-700 bg-primary-700/20"
                        : "dark:text-white text-base-900"
                    }`}
                    onClick={() => setExpanded(false)}
                  >
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 z-10">
          <Link href="https://github.com/prismaneui/prismane" target="_blank">
            <ActionButton
              color="pink"
              variant="secondary"
              icon={<GithubLogo />}
            />
          </Link>
          <Link href="https://twitter.com/prismaneui" target="_blank">
            <ActionButton
              color="pink"
              variant="secondary"
              icon={<TwitterLogo />}
            />
          </Link>
          <ActionButton
            color="pink"
            variant="secondary"
            icon={theme.mode === "dark" ? <Sun /> : <Moon />}
            onClick={() => {
              document.documentElement.classList.remove(
                theme.mode === "dark" ? "dark" : "light"
              );
              document.documentElement.classList.add(
                theme.mode === "dark" ? "light" : "dark"
              );
              toggleThemeMode();
            }}
          />
          <ActionButton
            color="pink"
            variant="secondary"
            icon={expanded ? <X /> : <Equals />}
            onClick={() => setExpanded(!expanded)}
            className="!flex md:!hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
