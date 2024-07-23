import { HTMLAttributes } from 'react';

interface LoaderProps extends HTMLAttributes<HTMLElement> {
  loading: boolean;
}

const Loader = ({ loading, className, ...props }: LoaderProps) => {
  return (
    <div
      className={`gradient-stops absolute left-0 top-0 h-[2px] bg-gradient-to-r transition-all duration-75 ${
        loading ? 'w-full' : 'w-0'
      } ${className ? className : ''}`}
      {...props}
    ></div>
  );
};

export default Loader;
