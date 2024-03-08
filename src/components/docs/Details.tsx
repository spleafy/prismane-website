import React, { HTMLAttributes } from "react";

interface DetailsProps extends HTMLAttributes<HTMLElement> {
  summary: string;
}

const Details = ({ summary, children, className, ...props }: DetailsProps) => {
  return (
    <div
      className={`block pl-4 pr-6 py-3 cursor-pointer rounded-md border border-base-200 dark:border-base-700 bg-base-50 dark:bg-base-800 text-base-700 dark:text-base-300 text-sm/6 my-5 last:mb-0 font-normal group relative [&_code]:!bg-white dark:[&_code]:!bg-base-900 [&_.code-item-active]:!bg-base-200 dark:[&_.code-item-active]:!bg-base-900 hover:[&_.code-item-inactive]:bg-white hover:dark:[&_.code-item-inactive]:!bg-base-700/50 ${
        className ? className : ""
      }`}
      {...props}
    >
      <details>
        <summary>{summary}</summary>
        {children}
      </details>
    </div>
  );
};

export default Details;
