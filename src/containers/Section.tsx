import { FC, ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

type SectionProps = {
  children: ReactNode | Function;
  className?: string;
  background?: ReactNode | Function;
  viewOptions?: {
    once?: boolean;
    amount?: "all" | "some" | number;
    margin?: string;
    root?: any;
  };
} & Omit<React.ComponentPropsWithoutRef<"div">, "children">;

const Section: FC<SectionProps> = ({
  children,
  background,
  viewOptions,
  className,
  ...props
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.3, ...viewOptions });

  return (
    <section
      className="flex items-center justify-center relative overflow-x-clip"
      ref={ref}
      {...props}
    >
      <div
        className={`flex items-center justify-center max-w-[1280px] w-full py-10 sm:py-28 px-6 sm:px-12 xl:px-0 z-10 flex-col gap-6 ${
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
