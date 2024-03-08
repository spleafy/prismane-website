import { HTMLAttributes, useRef } from "react";
import { LiveProvider, LiveEditor } from "react-live";
import { themes } from "prism-react-renderer";
import { usePrismaneTheme } from "@prismane/core";
// Context
import { useCodeContext } from "./CodeContext";

interface CodeBodyProps extends HTMLAttributes<HTMLElement> {
  item?: string;
  language: string;
  preview?: boolean;
}

interface CodeBodyElementProps extends HTMLAttributes<HTMLElement> {
  language: string;
  preview?: boolean;
  mode: string;
}

const CodeBodyElement = ({
  children,
  className,
  preview,
  mode,
  ...props
}: CodeBodyElementProps) => {
  const code = (children?.toString().trim() as string) || "";

  return (
    <LiveProvider disabled code={code} {...props}>
      <div
        className={`relative rounded-b-md overflow-auto border border-base-200 dark:border-base-700 ${
          className ? className : ""
        }`}
      >
        <LiveEditor
          style={{
            fontFamily: "monospace",
            fontSize: "1rem",
          }}
          className={`${className ? className : ""}`}
          theme={mode === "dark" ? themes.nightOwl : themes.oneLight}
        />
      </div>
    </LiveProvider>
  );
};

const CodeBody = ({ item, children, ...props }: CodeBodyProps) => {
  const { value } = useCodeContext();

  const { theme } = usePrismaneTheme();

  return item ? (
    value === item ? (
      <CodeBodyElement mode={theme.mode} {...props}>
        {children}
      </CodeBodyElement>
    ) : (
      <></>
    )
  ) : (
    <CodeBodyElement mode={theme.mode} {...props}>
      {children}
    </CodeBodyElement>
  );
};

export default CodeBody;
