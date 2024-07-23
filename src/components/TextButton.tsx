import { ReactNode } from 'react';

type TextButtonProps = {
  icon?: ReactNode;
  iconPosition?: 'right' | 'left';
  full?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

const TextButton = ({
  icon,
  iconPosition = 'left',
  full,
  children,
  className,
  ...props
}: TextButtonProps) => {
  return (
    <button
      className={`flex !w-full items-center justify-center gap-2 rounded-md !px-6 !py-2.5 !text-base font-semibold !text-primary-500 transition-all duration-300 sm:!w-fit ${
        full ? 'w-full' : 'w-fit'
      } ${className ? className : ''}`}
      {...props}
    >
      {icon && (
        <div className={iconPosition === 'left' ? '-order-1' : 'order-1'}>
          {icon}
        </div>
      )}
      {children}
    </button>
  );
};

export default TextButton;
