import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowUpRight } from '@phosphor-icons/react';
// Config
import hidden from '@/config/hidden';

const Footer = () => {
  const router = useRouter();

  if (hidden.footer.some((link) => router.asPath.includes(link))) {
    return <></>;
  }

  return (
    <footer className="relative mt-12 flex flex-col items-center justify-center overflow-hidden border-t border-base-200 dark:border-base-900">
      <div className="flex w-full max-w-[1280px] auto-cols-fr grid-flow-col flex-col justify-center gap-8 px-5 py-16 sm:gap-32 md:justify-between lg:grid lg:gap-40 xl:col-span-2 xl:px-0">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <>
              <Image src="/logo.svg" alt="Logo" width={42} height={42} />
              <span className="text-2xl font-bold text-base-900 dark:text-white">
                Prismane
              </span>
            </>
          </Link>
          <span className="mb-4 text-base-600 dark:text-base-300 md:max-w-[50%]">
            Build exceptional React apps with blazing speed.
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://twitter.com/prismaneui"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/x_logo.svg"
                width={16}
                height={16}
                alt="X Logo"
                className="brightness-0 filter dark:brightness-[100]"
              />
            </Link>
            <Link
              href="https://discord.gg/gFvcmdpKeb"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/discord_logo.svg"
                width={20}
                height={20}
                alt="Discord Logo"
                className="brightness-0 filter dark:brightness-[100]"
              />
            </Link>
            <Link
              href="https://www.reddit.com/r/prismane"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/reddit_logo_white.svg"
                width={20}
                height={20}
                alt="Reddit Logo"
                className="scale-125 brightness-0 filter dark:brightness-[100]"
              />
            </Link>
            <Link
              href="https://github.com/prismaneui/prismane"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/github_logo.svg"
                width={20}
                height={20}
                alt="GitHub Logo"
                className="brightness-0 filter dark:brightness-[100]"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@prismaneui"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/youtube_logo.svg"
                width={20}
                height={20}
                alt="YouTube Logo"
                className="scale-[2] brightness-0 filter dark:brightness-[100]"
              />
            </Link>
            <Link
              href="https://medium.com/@prismaneui"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-50 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-200 dark:hover:bg-base-900 dark:hover:text-white dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/medium_logo.svg"
                width={20}
                height={20}
                alt="Medium Logo"
                className="scale-150 brightness-0 filter dark:brightness-[100]"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-12 sm:flex-row md:gap-24 lg:gap-36">
          <div className="flex flex-col gap-4">
            <span className="text-sm/6 font-semibold text-base-900 dark:text-white">
              Product
            </span>
            <Link
              href="/docs"
              className="text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="text-inherit">Docs</span>
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="text-inherit">Changelog</span>
            </Link>
            <Link
              href="https://medium.com/@prismaneui"
              target="_blank"
              className="text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Tutorials{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="/docs"
              target="https://www.youtube.com/@prismaneui"
              className="text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Video Tutorials{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm/6 font-semibold text-base-900 dark:text-white">
              Community
            </span>
            <Link
              href="https://twitter.com/prismaneui"
              target="_blank"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Twitter{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://www.reddit.com/r/prismane/"
              target="_blank"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Reddit{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://github.com/prismaneui/prismane"
              target="_blank"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Github{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://opencollective.com/prismane"
              target="_blank"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="relative text-inherit">
                Open Collective{' '}
                <ArrowUpRight
                  size={12}
                  className="absolute -right-3.5 top-0.5 h-3 w-3 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm/6 font-semibold text-base-900 dark:text-white">
              Company
            </span>
            <Link
              href="/about-us"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <>
                <span className="text-inherit">About</span>
              </>
            </Link>
            <Link
              href="/sponsor"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <>
                <span className="text-inherit">Sponsor</span>
              </>
            </Link>
            <Link
              href="mailto:contact@prismane.io"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              <span className="text-inherit">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-t border-base-200 dark:border-base-900">
        <div className="z-10 flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row xl:px-0">
          <span className="text-sm text-base-700 dark:text-base-500">
            Copyright © 2022 - 2024 Prismane - MIT License
          </span>
          <span className="text-sm text-base-700 dark:text-base-500">
            Made in <span className="mx-1">&#127463;&#127468;</span> by{' '}
            <Link
              href="https://www.github.com/spleafy"
              target="_blank"
              className="relative text-sm text-base-600 hover:text-base-900 dark:text-base-300 dark:hover:text-white"
            >
              Martin Petrov
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
