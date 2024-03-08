import Image from "next/image";
// Components
import SandpackEmbed from "@/components/SandpackEmbed";
// Configs
import { Index, App, CSS } from "@/config/sandpack/playground";

const Playground = () => {
  return (
    <div className="flex flex-col gap-4 p-3 h-screen [&_.sp-wrapper]:h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 w-fit">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="inline-block text-xl whitespace-nowrap dark:text-white text-base-900 font-bold">
            Playground
          </span>
        </div>
      </div>
      <SandpackEmbed
        files={{ "/App.tsx": App, "/index.tsx": Index, "/index.css": CSS }}
        previewOptions={{
          z: 0,
          dp: "flex",
          sx: {
            flexGrow: 1,
            height: "100%",
          },
        }}
        editorOptions={{
          style: {
            minHeight: "auto!important",
            height: "100%",
          },
        }}
        layoutOptions={{
          style: {
            height: "100%",
          },
        }}
        isHorizontal
      />
    </div>
  );
};

export default Playground;
