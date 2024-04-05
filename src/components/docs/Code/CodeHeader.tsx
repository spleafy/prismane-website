import { HTMLAttributes } from "react";
interface CodeHeaderProps extends HTMLAttributes<HTMLElement> {}

const CodeHeader = ({ children, className, ...props }: CodeHeaderProps) => {
  return (
    <div
      className={`flex items-center gap-1 border border-base-300 dark:border-base-700/50 border-b-0 rounded-t-md overflow-hidden p-2 min-h-[48px] ${
        className ? className : ""
      }`}
      {...props}
    >
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

export default CodeHeader;
