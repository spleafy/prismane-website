import { FC, ReactNode, useRef } from 'react';
import { useInView } from 'framer-motion';

type SectionProps = {
  children: ReactNode | Function;
  className?: string;
  background?: ReactNode | Function;
  viewOptions?: {
    once?: boolean;
    amount?: 'all' | 'some' | number;
    margin?: string;
    root?: any;
  };
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>;

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
      className="relative flex items-center justify-center overflow-x-clip"
      ref={ref}
      {...props}
    >
      <div
        className={`z-10 flex w-full max-w-[1280px] flex-col items-center justify-center gap-6 px-6 py-10 sm:px-12 sm:py-28 xl:px-0 ${
          className ? className : ''
        }`}
      >
        {typeof children === 'function' ? children(isInView) : children}
      </div>
      {typeof background === 'function' ? background(isInView) : background}
    </section>
  );
};

export default Section;
