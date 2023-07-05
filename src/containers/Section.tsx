import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface T {
  children: ReactNode | Function;
  className?: string;
  background?: ReactNode | Function;
  viewOptions?: {
    once?: boolean;
    amount?: "all" | "some" | number;
    margin?: string;
    root?: any;
  };
}

const Section: FC<T> = ({ children, background, viewOptions, className }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3, ...viewOptions });

  return (
    <section
      className="flex items-center justify-center relative overflow-x-clip"
      ref={ref}
    >
      <div
        className={`flex items-center justify-center max-w-[1200px] w-full py-10 sm:py-20 px-6 sm:px-12 z-10 flex-col gap-6 ${
          className ? className : ""
        }`}
      >
        {typeof children === "function" ? children(isInView) : children}
      </div>
      {typeof background === "function" ? background(isInView) : background}
    </section>
  );
};

export default Section;
