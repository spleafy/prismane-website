import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Sun, Moon, Equals, X } from "@phosphor-icons/react";
import { Divider, usePrismaneTheme } from "@prismane/core";
// Components
import Search from "@/components/Search";
import HeaderLink from "@/components/HeaderLink";
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

  useEffect(() => {
    setExpanded(false);
  }, [asPath]);

  return (
    <header
      className={`flex items-center justify-center z-50 sticky left-0 top-10 transition-colors duration-150 px-5 sm:px-10 border-b py-4 ${
        sticky
          ? "dark:bg-base-900/50 bg-white/50 backdrop-blur-xl dark:border-white/10 border-black/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex max-w-[1440px] w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 z-10 md:w-1/3"
          onClick={() => setExpanded(false)}
        >
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
          <span className="hidden sm:inline-block text-xl whitespace-nowrap dark:text-white text-base-900 font-bold">
            Prismane
          </span>
        </Link>
        <div
          className={`fixed md:static pt-20 h-screen dark:shadow-base-500/5 shadow-base-900/5 md:shadow-none flex items-center gap-8 transition-all flex-col md:flex-row w-full md:w-fit md:h-fit bg-white dark:bg-[#0A0118] md:bg-transparent md:dark:bg-transparent p-5 md:!p-0 ${
            expanded ? "left-0" : "left-full"
          } ${sticky ? "top-0" : "top-10"}`}
        >
          <div className="w-full md:w-fit flex items-center justify-center gap-4 md:gap-8">
            <HeaderLink href="/docs" onClick={() => setExpanded(false)}>
              {router.pathname.includes("docs") && (
                <div className="w-2 h-2 aspect-square rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500"></div>
              )}
              Docs
            </HeaderLink>
            <HeaderLink href="/changelog" onClick={() => setExpanded(false)}>
              {router.pathname.includes("/changelog") && (
                <div className="w-2 h-2 aspect-square rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500"></div>
              )}
              Changelog
            </HeaderLink>
            <HeaderLink href="/about-us" onClick={() => setExpanded(false)}>
              {router.pathname.includes("/about-us") && (
                <div className="w-2 h-2 aspect-square rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500"></div>
              )}
              About Us
            </HeaderLink>
            <HeaderLink href="/sponsor" onClick={() => setExpanded(false)}>
              {router.pathname.includes("/sponsor") && (
                <div className="w-2 h-2 aspect-square rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500"></div>
              )}
              Sponsor
            </HeaderLink>
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
        <div className="flex items-center gap-3 z-10 md:w-1/3 justify-end">
          <Search />
          <HeaderLink
            className="hidden lg:flex"
            href="https://github.com/prismaneui/prismane"
            target="_blank"
          >
            <Image
              src="/github_logo.svg"
              alt="Github Logo"
              width={20}
              height={20}
              className="filter dark:brightness-[100] brightness-0 min-h-[20px] min-w-[20px]"
            />
          </HeaderLink>
          <HeaderLink
            className="hidden lg:flex"
            href="https://twitter.com/prismaneui"
            target="_blank"
          >
            <Image
              src="/twitter_logo.svg"
              alt="Twitter Logo"
              width={20}
              height={20}
              className="filter dark:brightness-[100] brightness-0 min-h-[20px] min-w-[20px]"
            />
          </HeaderLink>
          <div
            className="whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-sm font-semibold gap-2 flex items-center justify-center rounded w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 px-1.5 sm:px-3"
            onClick={() => {
              document.documentElement.classList.remove(
                theme.mode === "dark" ? "dark" : "light"
              );
              document.documentElement.classList.add(
                theme.mode === "dark" ? "light" : "dark"
              );
              toggleThemeMode();
            }}
          >
            {theme.mode === "dark" ? (
              <Sun
                size={18}
                weight="fill"
                className="dark:!text-white !text-base-900"
              />
            ) : (
              <Moon
                size={18}
                weight="fill"
                className="dark:!text-white !text-base-900"
              />
            )}
          </div>
          <div
            className="flex md:hidden whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-sm font-semibold gap-2 items-center justify-center rounded w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 px-1.5 sm:px-3"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <X size={20} /> : <Equals size={20} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
