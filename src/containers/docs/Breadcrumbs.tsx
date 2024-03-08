import { HTMLAttributes } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretRight } from "@phosphor-icons/react";

interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: {
    parent: {
      slug: string;
      title: string;
    };
    child: { slug: string; title: string };
  };
}

const Breadcrumbs = ({ items, className, ...props }: BreadcrumbsProps) => {
  const router = useRouter();

  const { asPath } = router;

  const splitRoutes = asPath.split("/").map((route) => {
    return route.replace(/[#?].*$/, "");
  });

  return (
    <ul
      className={`flex gap-2 items-center mb-4 ${className ? className : ""}`}
    >
      <Link
        href="/docs"
        className={`hidden sm:flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm group font-semibold whitespace-nowrap ${
          splitRoutes[splitRoutes.length - 1] !== "docs"
            ? "hover:text-base-700 dark:hover:text-base-200"
            : "!text-primary-500"
        }`}
      >
        Docs
      </Link>
      <CaretRight className="hidden sm:flex" />
      <Link
        href={`/docs/${items.parent.slug}`}
        className={`flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm group font-semibold whitespace-nowrap ${
          splitRoutes[splitRoutes.length - 1] !== items.parent.slug
            ? "hover:text-base-700 dark:hover:text-base-200"
            : "!text-primary-500"
        }`}
      >
        {items.parent.title}
      </Link>
      <CaretRight />
      <Link
        href={`/docs/${items.parent.slug}/${items.child.slug}`}
        className={`flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm group font-semibold whitespace-nowrap ${
          splitRoutes[splitRoutes.length - 1] !== items.child.slug
            ? "hover:text-base-700 dark:hover:text-base-200"
            : "!text-primary-500"
        }`}
      >
        {items.child.title}
      </Link>
    </ul>
  );
};

export default Breadcrumbs;
