import React, { HTMLAttributes, useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";
// Components
import CodeHeader from "./CodeHeader";
import CodeBody from "./CodeBody";
import CodeItem from "./CodeItem";
// Context
import { CodeContextProvider } from "./CodeContext";

interface CodeProps extends HTMLAttributes<HTMLElement> {
  files: {
    icon?: React.ReactNode;
    name: string;
    value: string;
    language: string;
  }[];
  classNames?: {
    header?: string;
    item?: string;
    body?: string;
    root?: string;
    button?: string;
  };
  preview?: boolean;
}

const Code = ({ files, classNames, preview = false, ...props }: CodeProps) => {
  const [active, setActive] = useState<string | null>(
    typeof files !== "string" ? files[0].name : null
  );

  const [copy, setCopy] = useState(false);

  return (
    <div
      className={`relative [&>div:last-child]:!my-0 [&>div:last-child]:!static my-5 flex flex-col grow w-full ${
        classNames && classNames.root ? classNames.root : ""
      }`}
      {...props}
    >
      <CodeContextProvider
        value={{
          value: active,
          setValue: setActive,
          files,
        }}
      >
        <button
          className={`focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xs gap-x-1.5 p-1.5 text-base-500 dark:text-base-400 hover:text-base-700 dark:hover:text-base-200 dark:hover:bg-base-200/10 hover:bg-base-500/10 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center absolute top-2.5 right-2.5 ${
            classNames && classNames.button ? classNames.button : ""
          }`}
          onClick={() => {
            navigator.clipboard.writeText(
              typeof files !== "string"
                ? (files.find((x) => x.name === active)?.value as string)
                : files
            );
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 1000);
          }}
        >
          {!copy ? <Copy size={16} /> : <Check size={16} />}
        </button>
        <CodeHeader className={classNames && classNames.header}>
          {files.map((file, index) => (
            <CodeItem
              item={file.name}
              icon={file.icon}
              className={classNames && classNames.item}
              key={index}
            />
          ))}
        </CodeHeader>
        {files.map((file, index) => (
          <CodeBody
            className={classNames && classNames.body}
            item={file.name}
            language={file.language ?? "jsx"}
            preview={preview}
            key={index}
          >
            {file.value}
          </CodeBody>
        ))}
      </CodeContextProvider>
    </div>
  );
};

export default Code;
