import { HTMLAttributes } from "react";

interface LoaderProps extends HTMLAttributes<HTMLElement> {
  loading: boolean;
}

const Loader = ({ loading, className, ...props }: LoaderProps) => {
  return (
    <div
      className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r gradient-stops transition-all duration-75 ${
        loading ? "w-full" : "w-0"
      } ${className ? className : ""}`}
      {...props}
    ></div>
  );
};

export default Loader;
