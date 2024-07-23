import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { LiveProvider, LiveEditor } from 'react-live';
import { themes } from 'prism-react-renderer';
import { usePrismaneTheme } from '@prismane/core';
// Components
import SecondaryButton from '@/components/SecondaryButton';
// Context
import { useCodeContext } from './CodeContext';

interface CodeBodyProps extends HTMLAttributes<HTMLElement> {
  item?: string;
  language: string;
  preview?: boolean;
  expandable?: boolean;
}

interface CodeBodyElementProps extends HTMLAttributes<HTMLElement> {
  language: string;
  preview?: boolean;
  expandable?: boolean;
  mode: string;
}

const CodeBodyElement = ({
  children,
  className,
  preview,
  expandable,
  mode,
  ...props
}: CodeBodyElementProps) => {
  const code = (children?.toString().trim() as string) || '';

  const ref = useRef<HTMLDivElement>(null);

  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    if (
      expandable &&
      ref.current &&
      ref.current.getBoundingClientRect().height > 520
    ) {
      setOverflowing(true);
    }
  }, [ref, expandable]);

  return (
    <LiveProvider disabled code={code} {...props}>
      <div
        className={`relative overflow-auto rounded-b-md border border-base-300 bg-base-50/50 dark:border-base-700/50 dark:bg-base-900/50 ${
          overflowing ? '!overflow-hidden' : ''
        } ${className ? className : ''}`}
        ref={ref}
      >
        {overflowing && (
          <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-base-50 dark:to-base-900">
            <button
              onClick={() => setOverflowing(false)}
              className="!absolute bottom-4 left-1/2 -translate-x-1/2 overflow-hidden rounded-md border border-base-300 bg-base-50 px-3 py-2 text-sm font-medium transition-colors hover:bg-base-100/50 dark:border-base-800 dark:bg-base-800/50 dark:hover:bg-base-800"
            >
              Show Full Code
            </button>
          </div>
        )}
        <LiveEditor
          style={{
            fontFamily: 'monospace',
            fontSize: '1rem'
          }}
          className={`${className ? className : ''}`}
          theme={
            mode === 'dark'
              ? {
                  ...themes.nightOwl,
                  plain: {
                    background: 'transparent'
                  }
                }
              : {
                  ...themes.oneLight,
                  plain: {
                    background: 'transparent'
                  }
                }
          }
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
