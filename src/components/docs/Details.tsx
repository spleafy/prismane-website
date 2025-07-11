import React, { HTMLAttributes } from 'react';

interface DetailsProps extends HTMLAttributes<HTMLElement> {
  summary: string;
}

const Details = ({ summary, children, className, ...props }: DetailsProps) => {
  return (
    <div
      className={`group relative my-5 block cursor-pointer rounded-md border border-base-200 bg-base-50 py-3 pl-4 pr-6 text-sm/6 font-normal text-base-700 last:mb-0 dark:border-base-700 dark:bg-base-800 dark:text-base-300 [&_.code-item-active]:!bg-base-200 dark:[&_.code-item-active]:!bg-base-900 hover:[&_.code-item-inactive]:bg-white hover:dark:[&_.code-item-inactive]:!bg-base-700/50 [&_code]:!bg-white dark:[&_code]:!bg-base-900 ${
        className ? className : ''
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
