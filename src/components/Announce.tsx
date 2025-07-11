import Link, { LinkProps } from 'next/link';

type AnnounceProps = {
  label?: string;
  href?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const Announce = ({
  label = 'New',
  href = '#',
  children,
  className
}: AnnounceProps) => {
  return (
    <Link
      href={href}
      className={`relative flex h-7 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-primary-400/10 to-secondary-400/10 px-4 text-sm transition-all hover:shadow-announce dark:from-primary-400/5 dark:to-secondary-400/5 ${
        className ? className : ''
      }`}
    >
      <span className="bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent">
        {label}: {children}
      </span>
      <div className="mask absolute rounded-full bg-gradient-to-br from-primary-400/30 to-secondary-400/30 p-px dark:from-primary-400/20 dark:to-secondary-400/20"></div>
    </Link>
  );
};

export default Announce;
