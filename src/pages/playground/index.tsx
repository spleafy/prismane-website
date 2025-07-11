import Image from 'next/image';
// Components
import SandpackEmbed from '@/components/SandpackEmbed';
// Configs
import { Index, App, CSS } from '@/config/sandpack/playground';

const Playground = () => {
  return (
    <div className="flex h-screen flex-col gap-4 p-3 [&_.sp-wrapper]:h-full">
      <div className="flex items-center justify-between">
        <div className="flex w-fit items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          <span className="inline-block whitespace-nowrap text-xl font-bold text-base-900 dark:text-white">
            Playground
          </span>
        </div>
      </div>
      <SandpackEmbed
        files={{ '/App.tsx': App, '/index.tsx': Index, '/index.css': CSS }}
        previewOptions={{
          z: 0,
          dp: 'flex',
          sx: {
            flexGrow: 1,
            height: '100%'
          }
        }}
        editorOptions={{
          style: {
            minHeight: 'auto!important',
            height: '100%'
          }
        }}
        layoutOptions={{
          style: {
            height: '100%'
          }
        }}
        isHorizontal
      />
    </div>
  );
};

export default Playground;
