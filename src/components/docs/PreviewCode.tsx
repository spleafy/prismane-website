import { HTMLAttributes } from 'react';
import { LivePreview, LiveProvider } from 'react-live';
// Components
import Code from './Code/Code';
// Config
import config from '@/config/mdx';

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
        <div className="mt-2 flex grow overflow-x-auto rounded-md border border-base-300 bg-base-50/40 p-5 dark:border-base-800 dark:bg-[#0F0F0F]/40 sm:overflow-x-visible">
          <LivePreview className="flex w-full grow flex-wrap items-center gap-5" />
        </div>
      </LiveProvider>
      <Code
        files={[
          {
            name: name ?? '',
            icon,
            value,
            language: language ?? 'jsx'
          }
        ]}
        classNames={{
          header: !name ? `hidden ${classNames ? classNames.header : ''}` : '',
          item: `pointer-events-none !bg-transparent ${
            classNames ? classNames.item : ''
          }`,
          body: !name
            ? `rounded-t-md ${classNames ? classNames.body : ''}`
            : '',
          root: classNames ? classNames.root : '',
          button: classNames ? classNames.button : ''
        }}
        {...props}
        preview
      />
    </div>
  );
};

export default PreviewCode;
