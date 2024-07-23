import { HTMLAttributes } from 'react';
import { Warning as PhosphorWarning } from '@phosphor-icons/react';
// Components
import Note from './Note';

const Warning = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <Note
      icon={<PhosphorWarning size={32} />}
      className={`!border-amber-500/20 !bg-amber-50/50 !text-amber-900 dark:!border-amber-500/30 dark:!bg-amber-500/10 dark:!text-amber-200 ${
        className ? className : ''
      }`}
      {...props}
    >
      {children}
    </Note>
  );
};

export default Warning;
