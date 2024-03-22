import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowUpRight } from "@phosphor-icons/react";
// Config
import hidden from "@/config/hidden";

const Footer = () => {
  const router = useRouter();

  if (hidden.footer.some((link) => router.asPath.includes(link))) {
    return <></>;
  }

  return (
    <footer className="flex flex-col items-center justify-center relative overflow-hidden mt-12 border-t border-base-200 dark:border-base-900">
      <div className="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2 max-w-[1280px] justify-center md:justify-between w-full py-16 px-5 xl:px-0 sm:gap-32 lg:gap-40">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <>
              <Image src="/logo.svg" alt="Logo" width={42} height={42} />
              <span className="text-2xl dark:text-white text-base-900 font-bold">
                Prismane
              </span>
            </>
          </Link>
          <span className="text-base-600 dark:text-base-300 mb-4 md:max-w-[50%]">
            Build exceptional React apps with blazing speed.
          </span>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="https://twitter.com/prismaneui"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/x_logo.svg"
                width={16}
                height={16}
                alt="X Logo"
                className="filter dark:brightness-[100] brightness-0"
              />
            </Link>
            <Link
              href="https://discord.gg/gFvcmdpKeb"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/discord_logo.svg"
                width={20}
                height={20}
                alt="Discord Logo"
                className="filter dark:brightness-[100] brightness-0"
              />
            </Link>
            <Link
              href="https://www.reddit.com/r/prismane"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/reddit_logo_white.svg"
                width={20}
                height={20}
                alt="Reddit Logo"
                className="filter dark:brightness-[100] brightness-0 scale-125"
              />
            </Link>
            <Link
              href="https://github.com/prismaneui/prismane"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/github_logo.svg"
                width={20}
                height={20}
                alt="GitHub Logo"
                className="filter dark:brightness-[100] brightness-0"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@prismaneui"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/youtube_logo.svg"
                width={20}
                height={20}
                alt="YouTube Logo"
                className="filter dark:brightness-[100] brightness-0 scale-[2]"
              />
            </Link>
            <Link
              href="https://medium.com/@prismaneui"
              className="flex items-center justify-center w-8 h-8 focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-base-700 dark:text-base-200 hover:text-base-900 dark:hover:text-white hover:bg-base-50 dark:hover:bg-base-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
              target="_blank"
            >
              <Image
                src="/medium_logo.svg"
                width={20}
                height={20}
                alt="Medium Logo"
                className="filter dark:brightness-[100] brightness-0 scale-150"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24 lg:gap-36">
          <div className="flex flex-col gap-4">
            <span className="text-sm/6 font-semibold text-base-900 dark:text-white">
              Product
            </span>
            <Link
              href="/docs"
              className="text-sm text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit">Docs</span>
            </Link>
            <Link
              href="/changelog"
              className="text-sm text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit">Changelog</span>
            </Link>
            <Link
              href="https://medium.com/@prismaneui"
              target="_blank"
              className="text-sm text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Tutorials{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="/docs"
              target="https://www.youtube.com/@prismaneui"
              className="text-sm text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Video Tutorials{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
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
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Twitter{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://www.reddit.com/r/prismane/"
              target="_blank"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Reddit{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://github.com/prismaneui/prismane"
              target="_blank"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Github{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
                />
              </span>
            </Link>
            <Link
              href="https://opencollective.com/prismane"
              target="_blank"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit relative">
                Open Collective{" "}
                <ArrowUpRight
                  size={12}
                  className="w-3 h-3 absolute top-0.5 -right-3.5 text-base-400 dark:text-base-500"
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
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <>
                <span className="text-inherit">About</span>
              </>
            </Link>
            <Link
              href="/sponsor"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <>
                <span className="text-inherit">Sponsor</span>
              </>
            </Link>
            <Link
              href="mailto:contact@prismane.io"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
            >
              <span className="text-inherit">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center border-t border-base-200 dark:border-base-900">
        <div className="flex max-w-[1280px] w-full items-center justify-between flex-col md:flex-row gap-4 py-6 px-5 xl:px-0 z-10">
          <span className="text-sm dark:text-base-500 text-base-700">
            Copyright © 2023 Prismane - MIT License
          </span>
          <span className="text-sm dark:text-base-500 text-base-700">
            Made in <span className="mx-1">&#127463;&#127468;</span> by{" "}
            <Link
              href="https://www.github.com/spleafy"
              target="_blank"
              className="text-sm relative text-base-600 dark:text-base-300 hover:text-base-900 dark:hover:text-white"
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
