import { useState, useEffect, memo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Sun,
  Moon,
  Equals,
  X,
  CaretRight,
  BookBookmark,
  ClockCounterClockwise,
  Article,
  UsersThree,
  Heart
} from '@phosphor-icons/react';
import { usePrismaneTheme } from '@prismane/core';
// Components
import Search from '@/components/Search';
import HeaderLink from '@/components/header/HeaderLink';
import HeaderButton from '@/components/header/HeaderButton';
import SecondaryButton from '@/components/SecondaryButton';
// Content
import content from '@/content';
// Config
import hidden from '@/config/hidden';
// Utils
import useNavigation from '@/useNavigation';
import cn from '@/cn';

type NavigationItemProps = {
  item: any;
  toggle: (item: any) => void;
  path: string;
  expanded: any;
  setShown: any;
  inner?: boolean;
  parentRoute?: string;
};

const NavigationItem = memo(
  ({
    item,
    toggle,
    path,
    expanded,
    setShown,
    inner,
    parentRoute
  }: NavigationItemProps) => {
    const currentRoute = parentRoute
      ? `${parentRoute}/${item.slug}`
      : `/${item.slug}`;

    const hasItems = item.items && item.items.length > 0;

    const isActive = path.includes(item.route) || expanded[item.route];

    const handleItemClick = useCallback(
      (e: any) => {
        if (!hasItems) {
          setShown(false);
        } else {
          e.preventDefault();
          toggle(item.route);
        }
      },
      [hasItems, item.route, setShown, toggle]
    );

    return (
      <>
        <Link
          href={currentRoute}
          className={`mb-3 flex w-full cursor-pointer items-center justify-between ${
            inner &&
            '-ml-px border-l border-transparent pl-3.5 hover:border-base-500 dark:hover:border-base-400'
          }`}
          onClick={handleItemClick}
        >
          <span
            className={cn(
              `flex items-center gap-3 whitespace-nowrap text-base font-medium text-base-600/80 transition-colors hover:text-base-900 dark:text-white/60 dark:hover:text-white ${
                isActive && '!text-base-900 dark:!text-white'
              }`
            )}
          >
            {item.icon && (
              <div className="flex items-center justify-center text-2xl text-inherit md:hidden">
                {item.icon}
              </div>
            )}
            {item.title}
          </span>
          {hasItems && (
            <CaretRight
              className={cn(
                `block transition-all md:hidden ${
                  expanded[item.route] ? 'rotate-90' : 'rotate-0'
                }`
              )}
            />
          )}
        </Link>
        {hasItems && expanded[item.route] && (
          <Navigation
            items={item.items}
            path={path}
            toggle={toggle}
            expanded={expanded}
            setShown={setShown}
            parentRoute={currentRoute}
            inner
          />
        )}
      </>
    );
  }
);

NavigationItem.displayName = 'NavigationItem';

type NavigationProps = {
  items: any;
  toggle: (item: any) => void;
  path: string;
  expanded: any;
  setShown: any;
  inner?: boolean;
  parentRoute?: string;
};

const Navigation = memo(
  ({
    items,
    toggle,
    path,
    expanded,
    setShown,
    inner,
    parentRoute
  }: NavigationProps) => {
    return (
      <div
        className={cn(
          `flex flex-col md:flex-row ${
            inner &&
            'inner mb-3 ml-2.5 mt-3 border-l border-base-200 dark:border-base-800 [&_.inner]:!ml-6'
          }`
        )}
      >
        {items.map((item: any) => (
          <NavigationItem
            key={item.route}
            item={item}
            toggle={toggle}
            path={path}
            expanded={expanded}
            setShown={setShown}
            inner={inner}
            parentRoute={parentRoute}
          />
        ))}
      </div>
    );
  }
);

Navigation.displayName = 'Navigation';

const Header = () => {
  const router = useRouter();

  const { theme, toggleThemeMode } = usePrismaneTheme();

  const [sticky, setSticky] = useState(false);

  const [shown, setShown] = useState(false);

  const tree = [
    {
      title: 'Docs',
      slug: 'docs',
      route: '/docs',
      icon: <BookBookmark />,
      items: content
    },
    {
      title: 'Changelog',
      slug: 'changelog',
      route: '/changelog',
      icon: <ClockCounterClockwise />
    },
    {
      title: 'Blog',
      slug: 'blog',
      route: '/blog',
      icon: <Article />
    },
    {
      title: 'About Us',
      slug: 'about-us',
      route: '/about-us',
      icon: <UsersThree />
    }
  ];

  const { navigation, expanded, toggle } = useNavigation(tree);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setSticky(scrollTop !== 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setShown(false);
  }, [router.asPath]);

  const handleThemeToggle = useCallback(() => {
    toggleThemeMode();
  }, [toggleThemeMode]);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme.mode === 'dark' ? 'light' : 'dark'
    );
    document.documentElement.classList.add(theme.mode);
  }, [theme.mode]);

  if (hidden.header.some((link) => router.asPath.includes(link))) {
    return null;
  }

  return (
    <header
      className={cn(
        `sticky left-0 top-0 z-50 flex items-center justify-center px-5 py-3 transition-colors duration-150 sm:px-10`,
        sticky && 'bg-white/50 backdrop-blur-xl dark:bg-base-950/50',
        shown && '[&+main]:overflow-hidden md:[&+main]:overflow-auto'
      )}
    >
      <div className="flex w-full max-w-[1280px] items-center justify-between">
        <div className="z-10 flex items-center lg:w-1/3">
          <Link
            href="/"
            className="flex w-fit items-center gap-2"
            onClick={() => setShown(false)}
          >
            <Image src="/logo.svg" alt="Logo" width={36} height={36} />
            <span className="inline-block whitespace-nowrap text-xl font-bold text-base-900 dark:text-white">
              Prismane
            </span>
          </Link>
        </div>
        <div
          className={cn(
            'absolute left-0 top-0 flex h-screen w-full flex-col items-center gap-4 bg-white px-5 shadow-base-900/5 dark:bg-base-950 dark:shadow-base-500/5 sm:px-10 md:static md:h-fit md:w-fit md:flex-row md:bg-transparent md:!p-0 md:shadow-none md:dark:bg-transparent',
            shown ? 'flex pt-20 md:pt-0' : 'hidden md:!flex'
          )}
        >
          <div className="hidden w-full items-center justify-center gap-8 md:flex">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={`/${item.slug}`}
                className="flex cursor-pointer items-center justify-between"
              >
                <span
                  className={cn(
                    'flex items-center whitespace-nowrap text-sm/6 font-medium text-base-600/80 transition-colors hover:text-base-900 dark:text-white/60 dark:hover:text-white',
                    router.asPath.includes(`/${item.slug}`) &&
                      '!text-base-900 dark:!text-white'
                  )}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          <div
            className={cn(
              'flex w-full gap-2 md:hidden',
              shown
                ? 'h-screen flex-col overflow-y-auto'
                : 'items-center justify-center'
            )}
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
        <div className="z-10 flex items-center justify-end gap-3 lg:w-1/3">
          <Search />
          <HeaderLink
            classNames={{
              link: 'hidden lg:flex'
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
              className="brightness-0 filter dark:brightness-[100]"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: 'hidden lg:flex'
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
              className="brightness-0 filter dark:brightness-[100]"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: 'hidden lg:flex'
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
              className="scale-125 brightness-0 filter dark:brightness-[100]"
            />
          </HeaderLink>
          <HeaderLink
            classNames={{
              link: 'hidden lg:flex'
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
              className="min-h-[20px] min-w-[20px] brightness-0 filter dark:brightness-[100]"
            />
          </HeaderLink>
          <HeaderButton
            tooltip={
              theme.mode === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            onClick={handleThemeToggle}
          >
            {theme.mode === 'dark' ? (
              <Sun
                size={20}
                weight="fill"
                className="!text-base-900 dark:!text-white"
              />
            ) : (
              <Moon
                size={20}
                weight="fill"
                className="!text-base-900 dark:!text-white"
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
              className="h-8 rounded !px-4 !pl-3 text-sm"
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
