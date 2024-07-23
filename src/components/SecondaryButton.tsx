import { ReactNode } from 'react';

type SecondaryButtonProps = {
  icon?: ReactNode;
  iconPosition?: 'right' | 'left';
  full?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const SecondaryButton = ({
  icon,
  iconPosition = 'left',
  full,
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={`group relative flex items-center justify-center gap-4 overflow-hidden rounded-lg border border-base-200 bg-gradient-to-b from-base-300/0 to-base-300/10 px-5 py-[10px] font-medium dark:border-base-900 dark:from-base-700/0 dark:to-base-700/10 ${
        full ? '!w-full' : ''
      } ${className ? className : ''}`}
      {...props}
    >
      {icon && (
        <div className={iconPosition === 'left' ? '-order-1' : 'order-1'}>
          {icon}
        </div>
      )}
      {children}
      <div className="rounded-inherit mask absolute left-0 top-0 z-10 h-full w-full shadow-secondary-button-inset transition-colors"></div>
      <div className="rounded-inherit absolute left-0 top-0 h-full w-full bg-base-400 opacity-0 transition-opacity group-hover:opacity-[0.05] dark:bg-white dark:group-hover:opacity-[0.01]"></div>
    </button>
  );
};

export default SecondaryButton;
