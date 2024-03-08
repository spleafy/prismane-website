import { HTMLAttributes } from "react";
import { LivePreview, LiveProvider } from "react-live";
// Components
import Code from "./Code/Code";
// Config
import config from "@/config/mdx";

interface PreviewCodeProps extends HTMLAttributes<HTMLElement> {
  name?: string;
  icon?: string;
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

const PreviewCode = ({
  name,
  icon,
  value,
  language,
  classNames,
  ...props
}: PreviewCodeProps) => {
  return (
    <div>
      <LiveProvider
        disabled
        scope={config}
        code={value.trim()}
        language={language}
      >
        <div className="flex p-5 mt-2 border dark:border-base-800 dark:bg-[#0F0F0F]/40 border-base-300 bg-base-50/40 rounded-md grow overflow-x-auto sm:overflow-x-visible">
          <LivePreview className="flex items-center w-full grow gap-5 flex-wrap" />
        </div>
      </LiveProvider>
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
          header: !name ? `hidden ${classNames ? classNames.header : ""}` : "",
          item: `pointer-events-none !bg-transparent ${
            classNames ? classNames.item : ""
          }`,
          body: !name
            ? `rounded-t-md ${classNames ? classNames.body : ""}`
            : "",
          root: classNames ? classNames.root : "",
          button: classNames ? classNames.button : "",
        }}
        {...props}
        preview
      />
    </div>
  );
};

export default PreviewCode;
