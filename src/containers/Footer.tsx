import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1440px] justify-center md:justify-between w-full py-16 px-5 sm:px-10 gap-10 sm:gap-32 lg:gap-40 z-10">
        <div className="flex flex-col gap-8">
          <Link href="//" className="flex items-center gap-3">
            <>
              <Image src="/logo.svg" alt="Logo" width={42} height={42} />
              <span className="text-2xl dark:text-white text-base-900 font-bold">
                Prismane
              </span>
            </>
          </Link>
          <span className="max-w-[300px] dark:text-base-300 text-base-700">
            Unleash your potential with a comprehensive developer toolbox for
            limitless possibilities.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 md:gap-24 lg:gap-36">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold dark:text-white text-base-900">
              Product
            </span>
            <Link
              href="/docs"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Docs</span>
              <ArrowSquareOut />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold dark:text-white text-base-900">
              Community
            </span>
            <Link
              href="https://github.com/prismaneui/prismane"
              target="_blank"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Twitter</span>
              <ArrowSquareOut />
            </Link>
            <Link
              href="https://www.reddit.com/r/prismane/"
              target="_blank"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Reddit</span>
              <ArrowSquareOut />
            </Link>
            <Link
              href="https://github.com/prismaneui/prismane"
              target="_blank"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Github</span>
              <ArrowSquareOut />
            </Link>
            <Link
              href="https://opencollective.com/prismane"
              target="_blank"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Open Collective</span>
              <ArrowSquareOut />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold dark:text-white text-base-900">
              Company
            </span>
            <Link
              href="/about-us"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <>
                <span className="text-inherit">About</span>
                <ArrowSquareOut />
              </>
            </Link>
            <Link
              href="/sponsor"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <>
                <span className="text-inherit">Sponsor</span>
                <ArrowSquareOut />
              </>
            </Link>
            <Link
              href="mailto:contact@prismane.io"
              className="flex items-center gap-2 dark:text-base-300 text-base-700 cursor-pointer hover:underline hover:!text-primary-500"
            >
              <span className="text-inherit">Contact</span>
              <ArrowSquareOut />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1440px] w-full items-center justify-between border-t py-6 px-5 sm:px-10 z-10">
        <span className="text-sm dark:text-base-500 text-base-700">
          Copyright © 2023 Prismane.
        </span>
        <span className="text-sm dark:text-base-500 text-base-700">
          Made in <span className="mx-1">&#127463;&#127468;</span> by{" "}
          <Link
            href="https://www.github.com/spleafy"
            target="_blank"
            className="bold hover:underline hover:!text-primary-500"
          >
            Martin Petrov
          </Link>
        </span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full gradient dark:opacity-5 opacity-30"></div>
    </footer>
  );
};

export default Footer;
