import { FC, ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
// Content
import content from "@/content";

interface T {
  children?: ReactNode;
}

export const Docs: FC<T> = ({ children }) => {
  const router = useRouter();

  const { asPath } = router;

  const path = asPath.replace("/docs", "");

  const routes = path.split("/");

  routes.shift();

  const current = content.find((nav: any) => nav.slug === routes[0]);

  const currentIndex = current.items.findIndex(
    (obj: any) => obj.slug === routes[1]
  );

  return (
    <div className="flex gap-5 items-center mx-auto max-w-[1440px]">
      <nav className="flex flex-col gap-5 min-w-[240px] p-5 pl-0 self-start sticky top-5 left-0 max-h-[84vh] overflow-y-auto">
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
                    ? "text-primary-500"
                    : "text-white group-hover:text-base-300"
                }`}
              >
                {nav.title}
              </span>
            </div>
          </Link>
        ))}
        <div className="mt-5 flex flex-col gap-2">
          {current.items.map((item: any, index: number) => (
            <Link
              key={index}
              href={`/docs/${
                content.find((nav: any) => nav.slug === routes[0]).slug
              }/${item.slug}`}
              className={`text-sm px-3 py-1 rounded-md font-medium ${
                path.includes("/" + item.slug)
                  ? "text-primary-500 bg-primary-700/20"
                  : "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex flex-col grow gap-5 pb-10">
        {children}
        <div className="flex gap-5 mt-5">
          <div className="flex grow">
            {currentIndex > 0 && (
              <Link
                className="flex grow justify-between items-center p-4 pr-6 rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500/5 transition-colors"
                href={`/docs/${routes[0]}/${
                  current.items[currentIndex - 1].slug
                }`}
              >
                <ArrowLeft size={24} weight="bold" />
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-2xl self-end">Go Back</span>
                  <span className="text-white self-end">
                    {current.items[currentIndex - 1].title}
                  </span>
                </div>
              </Link>
            )}
          </div>
          <div className="flex grow">
            {currentIndex < current.items.length - 1 && (
              <Link
                className="flex grow justify-between items-center p-4 pr-6 rounded-md border border-primary-500 text-primary-500 hover:bg-primary-500/5 transition-colors"
                href={`/docs/${routes[0]}/${
                  current.items[currentIndex + 1].slug
                }`}
              >
                <div className="flex flex-col gap-2">
                  <span className="font-medium text-2xl">Up Next</span>
                  <span className="text-white">
                    {current.items[currentIndex + 1].title}
                  </span>
                </div>
                <ArrowRight size={24} weight="bold" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
