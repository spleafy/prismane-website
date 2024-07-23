import { HTMLAttributes } from 'react';

const Separator = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={`h-px min-h-[1px] w-full bg-gradient-to-r from-base-200/30 via-base-200 to-base-200/30 dark:from-base-800/30 dark:via-base-800 dark:to-base-800/30 ${
        className ? className : ''
      }`}
      {...props}
    ></div>
  );
};

export default Separator;
