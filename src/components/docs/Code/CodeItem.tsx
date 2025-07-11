import { HTMLAttributes, ReactNode } from 'react';
// Context
import { useCodeContext } from './CodeContext';

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
      className={`flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm transition-colors focus:outline-none ${
        item === value
          ? 'code-item-active bg-base-100 text-base-700 dark:bg-base-900 dark:text-base-200'
          : 'code-item-inactive hover:bg-base-50 dark:hover:bg-base-900/50'
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
