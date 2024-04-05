import { useState } from "react";
import { File, Sun, Moon, Info } from "@phosphor-icons/react";
import { Modal, usePrismaneTheme } from "@prismane/core";
// Components
import SingleCode from "@/components/docs/SingleCode";
import InteractiveExample from "@/components/InteractiveExample";
// Containers
import Section from "../Section";
// Example
import DarkThemeExample, {
  DarkThemeExampleSource,
} from "../examples/DarkThemeExample";

const codeContentDark = `
import { PrismaneProvider } from "@prismane/core";

export default function App({ Component, pageProps }: any) {
  const theme = {
    mode: "dark",
  };

  return (
    <PrismaneProvider theme={theme}>
        <Component {...pageProps} />
    </PrismaneProvider>
  );
}
`;

const codeContentLight = `
import { PrismaneProvider } from "@prismane/core";

export default function App({ Component, pageProps }: any) {
  const theme = {
    mode: "light",
  };

  return (
    <PrismaneProvider theme={theme}>
        <Component {...pageProps} />
    </PrismaneProvider>
  );
}
`;

const DarkTheme = () => {
  const { theme, toggleThemeMode } = usePrismaneTheme();

  const [shownModal, setShownModal] = useState(false);

  return (
    <Section>
      <span className="section-heading">
        Out of the box support <br /> for{" "}
        <span className="section-heading text-gradient">dark mode</span>
      </span>
      <span className="section-subheading mb-14">
        Prismane provides an effortless way to handle dark mode out of the box.
      </span>
      <InteractiveExample
        actions={[
          {
            children: <Info />,
            props: {
              onClick: () => setShownModal(true),
            },
            tooltip: "Show code",
          },
          {
            children:
              theme.mode === "dark" ? (
                <Sun weight="fill" />
              ) : (
                <Moon weight="fill" />
              ),
            props: {
              onClick: () => toggleThemeMode(),
            },
          },
        ]}
        side={
          <SingleCode
            icon={<File />}
            name="App.tsx"
            value={theme.mode === "dark" ? codeContentDark : codeContentLight}
            classNames={{
              root: "h-full !my-0",
            }}
          />
        }
      >
        <DarkThemeExample />
      </InteractiveExample>
      <Modal
        mx={16}
        open={shownModal}
        onClose={() => setShownModal(false)}
        closable
      >
        <Modal.Header>
          <h2 className="dark:text-white text-base-900">Simple Card code</h2>
        </Modal.Header>
        <span className="text-base-700 dark:text-base-300">
          This is the code of a simple card that is built using Prismane.
        </span>
        <SingleCode
          value={DarkThemeExampleSource}
          icon={<File />}
          name="Example.tsx"
          classNames={{
            body: "max-h-[440px]",
          }}
        />
      </Modal>
    </Section>
  );
};

export default DarkTheme;
