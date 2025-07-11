import { HTMLAttributes } from 'react';

const Tooltip = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`invisible absolute top-10 mt-2 inline-flex whitespace-nowrap rounded border border-base-200 bg-base-50 px-1.5 py-1 text-xs text-base-900 opacity-0 transition-all group-hover:visible group-hover:mt-0 group-hover:opacity-100 dark:border-base-800 dark:bg-base-900 dark:text-white ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tooltip;
