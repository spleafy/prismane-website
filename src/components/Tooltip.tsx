import { HTMLAttributes } from "react";

const Tooltip = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`invisible text-xs inline-flex whitespace-nowrap group-hover:visible opacity-0 group-hover:opacity-100 mt-2 group-hover:mt-0 transition-all absolute top-10 px-1.5 py-1 rounded bg-base-50 dark:bg-base-900 text-base-900 dark:text-white border border-base-200 dark:border-base-800 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tooltip;
