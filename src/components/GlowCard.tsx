import { HTMLAttributes, useRef, useEffect } from 'react';

interface GlowCardProps extends HTMLAttributes<HTMLElement> {
  classNames?: {
    root?: string;
    card?: string;
    blob?: string;
  };
}

const GlowCard = ({
  children,
  className,
  classNames,
  ...props
}: GlowCardProps) => {
  const blob = useRef<HTMLDivElement>(null);

  const fakeBlob = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const rec = fakeBlob.current?.getBoundingClientRect();

      const left = rec?.left ?? 0;

      const top = rec?.top ?? 0;

      const width = rec?.width ?? 0;

      const height = rec?.height ?? 0;

      blob.current?.animate(
        [
          {
            transform: `translate(${e.clientX - left - width / 2}px,${
              e.clientY - top - height / 2
            }px)`
          }
        ],
        {
          duration: 500,
          fill: 'forwards'
        }
      );
    };

    window.addEventListener('mousemove', move);

    return () => window.removeEventListener('mousemove', move);
  });

  return (
    <div
      className={`relative overflow-hidden rounded-xl p-[2px] shadow-lg ${
        classNames ? classNames.root : ''
      } ${className ? className : ''}`}
    >
      <div
        className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white dark:bg-base-900 ${
          classNames ? classNames.card : ''
        }`}
        {...props}
      >
        {children}
      </div>
      <div
        className={`absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-radial blur-2xl ${
          classNames ? classNames.blob : ''
        }`}
        ref={blob}
      ></div>
      <div
        className={`invisible absolute left-0 top-0 -z-10 h-full w-full rounded-full blur-2xl ${
          classNames ? classNames.blob : ''
        }`}
        ref={fakeBlob}
      ></div>
    </div>
  );
};

export default GlowCard;
