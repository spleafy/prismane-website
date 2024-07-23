import React, { HTMLAttributes, useState } from 'react';
import { Copy, Check } from '@phosphor-icons/react';
// Components
import CodeHeader from './CodeHeader';
import CodeBody from './CodeBody';
import CodeItem from './CodeItem';
// Context
import { CodeContextProvider } from './CodeContext';

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
  expandable?: boolean;
}

const Code = ({
  files,
  classNames,
  preview = false,
  expandable = false,
  ...props
}: CodeProps) => {
  const [active, setActive] = useState<string | null>(
    typeof files !== 'string' ? files[0].name : null
  );

  const [copy, setCopy] = useState(false);

  return (
    <div
      className={`relative my-5 flex w-full grow flex-col [&>div:last-child]:!static [&>div:last-child]:!my-0 ${
        classNames && classNames.root ? classNames.root : ''
      }`}
      {...props}
    >
      <CodeContextProvider
        value={{
          value: active,
          setValue: setActive,
          files
        }}
      >
        <button
          className={`absolute right-2.5 top-2.5 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md p-1.5 text-xs font-medium text-base-500 underline-offset-4 hover:bg-base-500/10 hover:text-base-700 hover:underline focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:text-base-400 dark:hover:bg-base-900/70 dark:hover:text-base-200 dark:focus-visible:ring-primary-400 ${
            classNames && classNames.button ? classNames.button : ''
          }`}
          onClick={() => {
            navigator.clipboard.writeText(
              typeof files !== 'string'
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
            language={file.language ?? 'jsx'}
            preview={preview}
            expandable={expandable}
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
