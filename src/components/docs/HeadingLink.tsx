import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Link } from '@phosphor-icons/react';

const HeadingLink = ({ children, ...props }: any) => {
  const router = useRouter();

  const id = children.props.children
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  const href = `${router.asPath.split('#')[0]}#${id}`;

  return (
    <NextLink
      href={href}
      className={`group relative flex items-center gap-2 transition-all ${
        children.type === 'h2' ? 'mb-6 mt-8 first:!mt-0' : ''
      } ${children.type === 'h3' ? 'mb-4 mt-6 first:!mt-0' : ''} docs-anchor`}
      style={{ scrollMarginTop: '120px' }}
      id={id}
      {...props}
    >
      {children}
      <div className="absolute -left-8 hidden h-5 w-5 items-center justify-center rounded bg-white text-base-400 ring-1 ring-base-200 hover:ring-base-400/60 group-hover:flex dark:bg-base-900 dark:ring-base-700 dark:hover:ring-white/20">
        <Link
          size={
            children.type === 'h1'
              ? 18
              : children.type === 'h2'
                ? 16
                : children.type === 'h3'
                  ? 14
                  : 12
          }
        />
      </div>
    </NextLink>
  );
};

export default HeadingLink;
