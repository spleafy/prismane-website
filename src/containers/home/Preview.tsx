// Containers
import Section from "../Section";
// Components
import SandpackEmbed from "@/components/SandpackEmbed";
import SectionSeparator from "@/components/SectionSeparator";
// Configs
import { Index, App, CSS } from "@/config/sandpack/home";

const Preview = () => {
  return (
    <Section background={<SectionSeparator />}>
      <span className="section-heading">
        Efficiency meets{" "}
        <span className="section-heading text-gradient">excellence</span>
      </span>
      <span className="section-subheading">
        Focus on customers while Prismane takes care of your UI code.
      </span>
      <div className="flex w-full mt-20">
        <SandpackEmbed
          files={{ "/App.tsx": App, "/index.tsx": Index, "/index.css": CSS }}
          previewOptions={{
            z: 0,
            dp: "flex",
            sx: {
              flexGrow: 1,
            },
          }}
          isHorizontal
        />
      </div>
    </Section>
  );
};

export default Preview;
