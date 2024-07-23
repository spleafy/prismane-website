import { ReactNode } from 'react';

type ButtonProps = {
  icon?: ReactNode;
  iconPosition?: 'right' | 'left';
  full?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const Button = ({
  icon,
  iconPosition = 'left',
  full,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`gradient-stops group relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-white/10 bg-gradient-to-br px-5 py-[10px] font-medium text-white transition-colors dark:bg-base-900/10 ${
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
      <div className="absolute left-0 top-0 z-10 h-full w-full rounded-lg shadow-button-inset transition-colors hover:bg-[#ffffff1a]"></div>
      <div className="mask absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-b from-white/20 to-transparent p-px"></div>
    </button>
  );
};

export default Button;
