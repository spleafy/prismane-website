import { HTMLAttributes, useRef, useEffect } from "react";

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
            }px)`,
          },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  });

  return (
    <div
      className={`p-[2px] overflow-hidden rounded-xl relative shadow-lg ${
        classNames ? classNames.root : ""
      } ${className ? className : ""}`}
    >
      <div
        className={`overflow-hidden rounded-xl group cursor-pointer bg-white dark:bg-base-900 relative group flex flex-col h-full ${
          classNames ? classNames.card : ""
        }`}
        {...props}
      >
        {children}
      </div>
      <div
        className={`blur-2xl absolute -z-10 top-0 left-0 w-full h-full rounded-full bg-radial ${
          classNames ? classNames.blob : ""
        }`}
        ref={blob}
      ></div>
      <div
        className={`blur-2xl absolute -z-10 top-0 left-0 w-full h-full rounded-full invisible ${
          classNames ? classNames.blob : ""
        }`}
        ref={fakeBlob}
      ></div>
    </div>
  );
};

export default GlowCard;
