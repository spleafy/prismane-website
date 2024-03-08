import { HTMLAttributes, ReactNode } from "react";
// Components
import Code from "./Code/Code";

interface SingleCodeProps extends HTMLAttributes<HTMLElement> {
  name?: string;
  icon?: ReactNode;
  value: string;
  language?: string;
  classNames?: {
    header?: string;
    item?: string;
    body?: string;
    root?: string;
    button?: string;
  };
}

const SingleCode = ({
  name,
  icon,
  value,
  language,
  classNames,
  ...props
}: SingleCodeProps) => {
  return (
    <Code
      files={[
        {
          name: name ?? "",
          icon,
          value,
          language: language ?? "jsx",
        },
      ]}
      classNames={{
        header: !name
          ? `hidden ${classNames ? classNames.header : ""}`
          : classNames
          ? classNames.header
          : "",
        item: `pointer-events-none !bg-transparent ${
          classNames ? classNames.item : ""
        }`,
        body: !name
          ? `rounded-t-md ${classNames ? classNames.body : ""}`
          : classNames
          ? classNames.body
          : "",
        root: classNames ? classNames.root : "",
        button: classNames ? classNames.button : "",
      }}
      {...props}
    />
  );
};

export default SingleCode;
