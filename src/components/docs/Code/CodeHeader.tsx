import { HTMLAttributes } from 'react';
interface CodeHeaderProps extends HTMLAttributes<HTMLElement> {}

const CodeHeader = ({ children, className, ...props }: CodeHeaderProps) => {
  return (
    <div
      className={`flex min-h-[48px] items-center gap-1 overflow-hidden rounded-t-md border border-b-0 border-base-300 p-2 dark:border-base-700/50 ${
        className ? className : ''
      }`}
      {...props}
    >
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

export default CodeHeader;
