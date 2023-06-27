import Image from "next/image";
import Link from "next/link";
import { ArrowSquareOut } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center relative overflow-hidden ">
      <div className="flex max-w-[1440px] justify-between w-full py-16 gap-40 z-50">
        <div className="flex flex-col gap-8">
          <Link href="/" className="flex items-center gap-3">
            <>
              <Image src="/logo.svg" alt="Logo" width={42} height={42} />
              <span className="text-2xl text-white font-bold">Prismane</span>
            </>
          </Link>
          <span className="max-w-[300px] text-base-200">
            Develop faster than ever and ship your products way quicker.
          </span>
        </div>
        <div className="flex gap-36">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold text-white">Product</span>
            <div className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500">
              <span className="text-inherit">Docs</span>
              <ArrowSquareOut />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold text-white">Community</span>
            <div className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500">
              <span className="text-inherit">Twitter</span>
              <ArrowSquareOut />
            </div>
            <div className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500">
              <span className="text-inherit">Github</span>
              <ArrowSquareOut />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xl font-semibold text-white">Company</span>
            <Link
              href="about"
              className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500"
            >
              <>
                <span className="text-inherit">About</span>
                <ArrowSquareOut />
              </>
            </Link>
            <Link
              href="sponsor"
              className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500"
            >
              <>
                <span className="text-inherit">Sponsor</span>
                <ArrowSquareOut />
              </>
            </Link>
            <div className="flex items-center gap-2 text-base-200 cursor-pointer hover:underline hover:text-primary-500">
              <span className="text-inherit">Contact</span>
              <ArrowSquareOut />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1440px] w-full items-center justify-between border-t py-6 z-50">
        <span className="text-sm text-base-500">
          Copyright © 2023 Prismane.
        </span>
      </div>
      <div className="absolute top-0 left-0 w-full h-full gradient opacity-5"></div>
    </footer>
  );
};

export default Footer;
