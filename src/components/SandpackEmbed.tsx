import { Box, BoxProps } from "@prismane/core";
import {
  CodeEditorProps,
  PreviewProps,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackLayoutProps,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { levelUp } from "@codesandbox/sandpack-themes";

type Props = BoxProps & {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  layoutOptions?: SandpackLayoutProps;
  editorOptions?: CodeEditorProps;
  previewOptions?: PreviewProps & BoxProps;
  files: {
    [x: string]: string;
  };
  isHorizontal?: boolean;
};

const SandpackEmbed = ({
  dependencies,
  devDependencies,
  layoutOptions,
  editorOptions,
  previewOptions,
  files,
  isHorizontal = false,
}: Props) => {
  return (
    <SandpackProvider
      files={files}
      theme={levelUp}
      template="react-ts"
      customSetup={{
        dependencies: {
          "@fontsource/poppins": "^5.0.8",
          "@phosphor-icons/react": "^2.0.10",
          "@prismane/core": "^1.0.1",
          "loader-utils": "3.2.1",
          react: "18.2.0",
          "react-dom": "18.2.0",
          "react-scripts": "5.0.1",
          ...dependencies,
        },
        devDependencies: {
          "@babel/runtime": "7.13.8",
          typescript: "4.1.3",
          ...devDependencies,
        },
      }}
      style={{
        width: "100%",
      }}
    >
      <Box
        w="100%"
        as={SandpackLayout}
        sx={{
          "--sp-layout-height": "auto",
        }}
        style={{ flexDirection: isHorizontal ? "row" : "column-reverse" }}
        {...layoutOptions}
      >
        <SandpackCodeEditor
          showLineNumbers
          style={{
            height: isHorizontal ? "700px" : "600px",
            minWidth: "400px",
          }}
          {...editorOptions}
        />
        <Box
          as={SandpackPreview}
          mih="700px"
          sx={{ "& iframe": { flex: "initial", flexGrow: 1 } }}
          {...previewOptions}
        />
      </Box>
    </SandpackProvider>
  );
};

export default SandpackEmbed;
