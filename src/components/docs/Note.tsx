import { HTMLAttributes } from "react";

interface NoteProps extends HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
}

const Note = ({ icon, children, className, ...props }: NoteProps) => {
  return (
    <div
      className={`flex items-center pl-4 pr-6 py-3 rounded-md border border-base-200 dark:border-base-700 bg-base-50 dark:bg-base-800 text-base-700 dark:text-base-300 text-sm my-5 last:mb-0 font-normal group relative [&_code]:!bg-white dark:[&_code]:!bg-base-900 [&>p]:!m-0 ${
        className ? className : ""
      }`}
      {...props}
    >
      {icon && (
        <span className="w-5 h-5 mr-3 text-base inline-flex items-center align-sub">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
};

export default Note;
