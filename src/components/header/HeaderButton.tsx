import { HTMLAttributes } from "react";
// Components
import Tooltip from "../Tooltip";

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
      className={`gap-2 h-8 relative group aspect-square focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer justify-center dark:hover:bg-base-500/20 hover:bg-base-400/10 ${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </div>
  );
};

export default HeaderButton;
