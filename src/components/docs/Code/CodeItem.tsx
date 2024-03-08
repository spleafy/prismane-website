import { HTMLAttributes, ReactNode } from "react";
// Context
import { useCodeContext } from "./CodeContext";

interface CodeItemProps extends HTMLAttributes<HTMLElement> {
  item: string;
  icon?: ReactNode;
}

const CodeItem = ({
  item,
  icon,
  children,
  className,
  ...props
}: CodeItemProps) => {
  const { value, setValue } = useCodeContext();

  return (
    <button
      className={`px-2 py-1.5 focus:outline-none text-sm rounded-md flex items-center gap-1.5 transition-colors ${
        item === value
          ? "text-base-700 dark:text-base-200 bg-base-100 dark:bg-base-800 code-item-active"
          : "hover:bg-base-50 dark:hover:bg-base-800/50 code-item-inactive"
      } ${className ? className : className}`}
      onClick={() => item !== value && setValue(item)}
      {...props}
    >
      {icon}
      {item}
    </button>
  );
};

export default CodeItem;
