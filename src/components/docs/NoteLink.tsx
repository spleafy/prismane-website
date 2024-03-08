import { HTMLAttributes } from "react";
import Link from "next/link";
// Components
import Note from "./Note";

interface NoteLinkProps extends HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  href: string;
  target?: string;
}

const NoteLink = ({
  icon,
  href,
  target,
  children,
  className,
  ...props
}: NoteLinkProps) => {
  return (
    <Link href={href} target={target}>
      <Note
        icon={icon}
        className={`!border-dashed hover:!border-solid hover:!border-primary-500 ${
          className ? className : ""
        }`}
        {...props}
      >
        {children}
      </Note>
    </Link>
  );
};

export default NoteLink;
