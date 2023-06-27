import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubLogo, TwitterLogo } from "@phosphor-icons/react";
// Components
import { ActionButton, Chip, Divider } from "@prismane/core";
const Header = () => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-center z-50 sticky transition-all">
      <div className="flex max-w-[1440px] w-full items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-3">
          <>
            <Image src="/logo.svg" alt="Logo" width={48} height={48} />
            <span className="text-3xl text-white font-bold">Prismane</span>
          </>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/docs"
            className="text-white hover:text-base-300 group-hover:text-base-300 cursor-pointer font-medium gap-2 flex items-center"
          >
            <>
              {router.pathname === "/docs" && (
                <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
              )}
              Docs
            </>
          </Link>
          <Link
            href="/about-us"
            className="text-white hover:text-base-300 group-hover:text-base-300 cursor-pointer font-medium gap-2 flex items-center"
          >
            <>
              {router.pathname === "/about-us" && (
                <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
              )}
              About Us
            </>
          </Link>
          <Link
            href="/sponsor"
            className="flex items-center gap-4 cursor-pointer group"
          >
            <>
              <span className="text-white hover:text-base-300 group-hover:text-base-300 cursor-pointer font-medium gap-2 flex items-center">
                {router.pathname === "/sponsor" && (
                  <div className="w-2 h-2 aspect-square rounded-full bg-primary-500"></div>
                )}
                Sponsor
              </span>
              <Chip
                className="!rounded-full pointer-events-none"
                color="pink"
                size="xs"
              >
                New
              </Chip>
            </>
          </Link>
          <Divider className="!h-5 !w-px" />
          <div className="flex items-center gap-5">
            <ActionButton
              color="pink"
              variant="secondary"
              icon={<GithubLogo />}
            />
            <ActionButton
              color="pink"
              variant="secondary"
              icon={<TwitterLogo />}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
