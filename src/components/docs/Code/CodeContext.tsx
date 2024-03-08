import { createContext, useContext, Dispatch } from "react";

export interface CodeContextValue {
  files:
    | {
        icon?: React.ReactNode;
        name: string;
        value: string;
        language?: string;
      }[]
    | string;
  value: string | null;
  setValue: Dispatch<string | null>;
}

const CodeContext = createContext<CodeContextValue>({
  value: null,
  setValue: () => {},
  files: "",
});

export const CodeContextProvider = CodeContext.Provider;

export const useCodeContext = () => useContext(CodeContext);
