import { HTMLAttributes } from 'react';

interface NoteProps extends HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
}

const Note = ({ icon, children, className, ...props }: NoteProps) => {
  return (
    <div
      className={`group relative my-5 flex items-center rounded-md border border-base-200 bg-base-50 py-3 pl-4 pr-6 text-sm font-normal text-base-700 last:mb-0 dark:border-base-700 dark:bg-base-800 dark:text-base-300 [&>p]:!m-0 [&_code]:!bg-white dark:[&_code]:!bg-base-900 ${
        className ? className : ''
      }`}
      {...props}
    >
      {icon && (
        <span className="mr-3 inline-flex h-5 w-5 items-center align-sub text-base">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
};

export default Note;
