import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Sun,
  Moon,
  Equals,
  X,
  CaretRight,
  BookBookmark,
  ClockCounterClockwise,
  Article,
  HandHeart,
  UsersThree,
  Heart,
} from "@phosphor-icons/react";
import { usePrismaneTheme, Field } from "@prismane/core";
// Components
import Search from "@/components/Search";
import HeaderLink from "@/components/header/HeaderLink";
import HeaderButton from "@/components/header/HeaderButton";
import SecondaryButton from "@/components/SecondaryButton";
// Content
import content from "@/content";
// Config
import hidden from "@/config/hidden";
// Utils
import useNavigation from "@/useNavigation";

type NavigationProps = {
  items: any;
  toggle: (item: any) => void;
  path: string;
  expanded: any;
  setShown: any;
  inner?: boolean;
  parentRoute?: string;
};

const Navigation = ({
  items,
  toggle,
  path,
  expanded,
  setShown,
  inner,
  parentRoute,
}: NavigationProps) => {
  return (
    <div
      className={`w-full flex flex-col md:flex-row ${
        inner
          ? "ml-2.5 [&_.inner]:!ml-6 mt-3 mb-3 border-l dark:border-base-800 border-base-200 inner"
          : ""
      }`}
    >
      {items.map((item: any) => (
        <>
          <Link
            href={parentRoute ? `${parentRoute}/${item.slug}` : `/${item.slug}`}
            className={`flex items-center justify-between cursor-pointer mb-3 ${
              inner
                ? "pl-3.5 -ml-px border-l border-transparent hover:border-base-500 dark:hover:border-base-400"
                : ""
            }`}
            onClick={(e) => {
              if (!item.items) {
                setShown(false);
              } else {
                e.preventDefault();
                toggle(item.route);
              }
            }}
          >
            <span
              className={`text-base font-medium flex whitespace-nowrap items-center gap-3 dark:text-white/60 dark:hover:text-white text-base-600/80 hover:text-base-900 transition-colors ${
                path.includes(item.route) || expanded[item.route]
                  ? "dark:!text-white !text-base-900"
                  : ""
              }`}
            >
              {item.icon && (
                <div className="text-inherit flex items-center justify-center md:hidden text-2xl">
                  {item.icon}
                </div>
              )}
              {item.title}
            </span>
            {item.items && item.items.length > 0 && (
              <CaretRight
                className={`block md:hidden transition-all ${
                  expanded[item.route] ? "rotate-90" : "rotate-0"
                }`}
              />
            )}
          </Link>
          {item.items && expanded[item.route] && (
            <Navigation
              items={item.items}
              path={path}
              toggle={toggle}
              expanded={expanded}
              setShown={setShown}
              inner
              parentRoute={
                parentRoute ? `${parentRoute}/${item.slug}` : `/${item.slug}`
              }
            />
          )}
        </>
      ))}
    </div>
  );
};

const Header = () => {
  const router = useRouter();

  const { theme, toggleThemeMode } = usePrismaneTheme();

  const [sticky, setSticky] = useState(false);

  const [shown, setShown] = useState(false);

  const tree = [
    {
      title: "Docs",
      slug: "docs",
      route: "/docs",
      icon: <BookBookmark />,
      items: content,
    },
    {
      title: "Changelog",
      slug: "changelog",
      route: "/changelog",
      icon: <ClockCounterClockwise />,
    },
    {
      title: "Blog",
      slug: "blog",
      route: "/blog",
      icon: <Article />,
    },
    {
      title: "About Us",
      slug: "about-us",
      route: "/about-us",
      icon: <UsersThree />,
    },
  ];

  const { navigation, expanded, toggle } = useNavigation(tree);

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
    setShown(false);
  }, [router.asPath]);

  if (hidden.header.some((link) => router.asPath.includes(link))) {
    return <></>;
  }

  return (
    <header
      className={`flex items-center justify-center z-50 sticky left-0 top-0 transition-colors duration-150 px-5 sm:px-10 py-3 ${
        sticky
          ? "dark:bg-base-950/50 bg-white/50 backdrop-blur-xl"
          : "bg-transparent"
      } ${shown ? "[&+main]:overflow-hidden md:[&+main]:overflow-auto" : ""}`}
    >
      <div className="flex max-w-[1280px] w-full items-center justify-between">
        <div className="flex items-center lg:w-1/3 z-10">
          <Link
            href="/"
            className="flex items-center gap-2 w-fit"
            onClick={() => setShown(false)}
          >
            <Image src="/logo.svg" alt="Logo" width={36} height={36} />
            <span className="inline-block text-xl whitespace-nowrap dark:text-white text-base-900 font-bold">
              Prismane
            </span>
          </Link>
        </div>
        <div
          className={`absolute left-0 top-0 md:static h-screen dark:shadow-base-500/5 shadow-base-900/5 md:shadow-none flex items-center gap-4 flex-col md:flex-row w-full md:w-fit md:h-fit bg-white dark:bg-base-950 md:bg-transparent md:dark:bg-transparent px-5 sm:px-10 md:!p-0 ${
            shown ? "flex pt-20 md:pt-0" : "hidden md:!flex"
          }`}
        >
          <div className="hidden md:flex items-center justify-center w-full gap-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className="flex items-center justify-between cursor-pointer"
              >
                <span
                  className={`text-sm/6 font-medium flex whitespace-nowrap items-center dark:text-white/60 dark:hover:text-white text-base-600/80 hover:text-base-900 transition-colors ${
                    router.asPath.includes(`/${item.slug}`)
                      ? "dark:!text-white !text-base-900"
                      : ""
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div
            className={`md:hidden flex w-full items-center justify-center gap-2 ${
              shown ? "flex-col !items-start" : ""
            }`}
          >
            <Navigation
              items={navigation}
              toggle={toggle}
              expanded={expanded}
              setShown={setShown}
              path={router.asPath}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 z-10 lg:w-1/3 justify-end">
          <Search />
          <HeaderLink
            classNames={{
              link: "hidden lg:flex",
            }}
            href="https://twitter.com/prismaneui"
            target="_blank"
            tooltip="Follow us on X"
          >
            <Image
              src="/x_logo.svg"
              alt="Twitter Logo"
              width={18}
              height={18}
              className="filter dark:brightness-[100] brightness-0"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: "hidden lg:flex",
            }}
            href="https://discord.gg/gFvcmdpKeb"
            target="_blank"
            tooltip="Chat on Discord"
          >
            <Image
              src="/discord_logo.svg"
              alt="Discord Logo"
              width={18}
              height={18}
              className="filter dark:brightness-[100] brightness-0"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: "hidden lg:flex",
            }}
            href="https://www.reddit.com/r/prismane"
            target="_blank"
            tooltip="Join our subreddit"
          >
            <Image
              src="/reddit_logo_white.svg"
              alt="Reddit Logo"
              width={18}
              height={18}
              className="filter dark:brightness-[100] brightness-0 scale-125"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: "hidden lg:flex",
            }}
            href="https://github.com/prismaneui/prismane"
            target="_blank"
            tooltip="Star us on GitHub"
          >
            <Image
              src="/github_logo.svg"
              alt="Github Logo"
              width={20}
              height={20}
              className="filter dark:brightness-[100] brightness-0 min-h-[20px] min-w-[20px]"
            />
          </HeaderLink>
          <HeaderButton
            tooltip={
              theme.mode === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
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
                size={20}
                weight="fill"
                className="dark:!text-white !text-base-900"
              />
            ) : (
              <Moon
                size={20}
                weight="fill"
                className="dark:!text-white !text-base-900"
              />
            )}
          </HeaderButton>
          <HeaderButton
            className="flex md:hidden"
            onClick={() => setShown((ps) => !ps)}
          >
            {shown ? <X size={20} /> : <Equals size={20} />}
          </HeaderButton>
          <Link
            href="https://opencollective.com/prismane"
            target="_blank"
            className="hidden md:flex"
          >
            <SecondaryButton
              icon={
                <Heart size={20} weight="fill" className="text-primary-500" />
              }
              className="h-8 !px-4 !pl-3 text-sm rounded"
            >
              Sponsor
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
