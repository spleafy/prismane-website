import { Button as PrismaneButton, ButtonProps } from "@prismane/core";

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <PrismaneButton
      className={`h-16 !w-full sm:!w-fit sm:!px-12 button-gradient ${
        className ? className : ""
      }`}
      size="lg"
      {...props}
    >
      {children}
    </PrismaneButton>
  );
};

export default Button;
