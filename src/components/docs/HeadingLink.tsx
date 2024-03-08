import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link } from "@phosphor-icons/react";

const HeadingLink = ({ children, ...props }: any) => {
  const router = useRouter();

  const id = children.props.children
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const href = `${router.asPath.split("#")[0]}#${id}`;

  return (
    <NextLink
      href={href}
      className={`flex items-center gap-2 relative group transition-all ${
        children.type === "h2" ? "first:!mt-0 mt-8 mb-6" : ""
      } ${children.type === "h3" ? "first:!mt-0 mt-6 mb-4" : ""} docs-anchor`}
      style={{ scrollMarginTop: "120px" }}
      id={id}
      {...props}
    >
      {children}
      <div className="hidden group-hover:flex w-5 h-5 text-base-400 rounded items-center justify-center dark:bg-base-900 bg-white ring-1 ring-base-200 dark:ring-base-700 hover:ring-base-400/60 dark:hover:ring-white/20 absolute -left-8">
        <Link
          size={
            children.type === "h1"
              ? 18
              : children.type === "h2"
              ? 16
              : children.type === "h3"
              ? 14
              : 12
          }
        />
      </div>
    </NextLink>
  );
};

export default HeadingLink;
