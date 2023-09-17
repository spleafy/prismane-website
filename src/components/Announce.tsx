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
      className="flex justify-center items-center px-1 h-7 dark:bg-white/10 dark:hover:bg-white/20 bg-base-500/5 hover:bg-base-500/10 border dark:border-white/5 dark:hover:border-white/10 border-black/10 hover:border-black/[.15] hover:shadow-glow shadow-white/5 transition-colors rounded-full text-sm cursor-pointer"
    >
      <div className="flex justify-center items-center mr-4 h-5 px-2 rounded-full bg-primary-500 text-xs text-white">
        {label}
      </div>
      {children}
      <div className="flex justify-center items-center ml-2 h-5 px-2 rounded-full bg-white/10">
        →
      </div>
    </Link>
  );
};

export default Announce;
