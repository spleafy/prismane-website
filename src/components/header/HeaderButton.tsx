import { HTMLAttributes } from 'react';
// Components
import Tooltip from '../Tooltip';

interface HeaderButtonProps extends HTMLAttributes<HTMLElement> {
  tooltip?: React.ReactNode;
}

const HeaderButton = ({
  tooltip,
  children,
  className,
  ...props
}: HeaderButtonProps) => {
  return (
    <div
      className={`group relative inline-flex aspect-square h-8 flex-shrink-0 cursor-pointer items-center justify-center gap-2 gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-base-700 hover:bg-base-400/10 hover:text-base-900 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 group-hover:text-base-300 dark:text-base-300 dark:hover:bg-base-500/20 dark:hover:text-white dark:focus-visible:ring-primary-400 ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </div>
  );
};

export default HeaderButton;
