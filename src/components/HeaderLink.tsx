import Link, { LinkProps } from "next/link";

type HeaderLinkProps = LinkProps & React.ComponentPropsWithoutRef<"a">;

const HeaderLink = ({ children, className, ...props }: HeaderLinkProps) => {
  return (
    <Link
      className={`whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-sm font-semibold gap-2 flex items-center justify-center rounded w-full md:w-fit py-1.5 sm:py-2 dark:hover:bg-base-500/20 hover:bg-base-700/10 transition-all duration-150 sm:px-3 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
