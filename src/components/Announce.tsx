import Link, { LinkProps } from "next/link";

type AnnounceProps = {
  label?: string;
  href?: string;
} & React.ComponentPropsWithoutRef<"div">;

const Announce = ({
  label = "New",
  href = "#",
  children,
  className,
}: AnnounceProps) => {
  return (
    <Link
      href={href}
      className={`flex justify-center items-center relative px-4 h-7 bg-gradient-to-br dark:from-primary-400/5 dark:to-secondary-400/5 from-primary-400/10 to-secondary-400/10 hover:shadow-announce transition-all rounded-full text-sm cursor-pointer ${
        className ? className : ""
      }`}
    >
      <span className="bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent">
        {label}: {children}
      </span>
      <div className="absolute rounded-full p-px bg-gradient-to-br dark:from-primary-400/20 dark:to-secondary-400/20 from-primary-400/30 to-secondary-400/30 mask"></div>
    </Link>
  );
};

export default Announce;
