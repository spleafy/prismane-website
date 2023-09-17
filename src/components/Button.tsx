import { ReactNode } from "react";

type ButtonProps = {
  icon?: ReactNode;
  iconPosition?: "right" | "left";
  full?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

const Button = ({
  icon,
  iconPosition = "left",
  full,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 !px-6 !py-2.5 w-full sm:w-fit !text-base !text-white font-semibold rounded-md hover:shadow-glow hover:!shadow-primary-500/20 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ${
        full ? "!w-full" : ""
      } ${className ? className : ""}`}
      {...props}
    >
      {icon && (
        <div className={iconPosition === "left" ? "-order-1" : "order-1"}>
          {icon}
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
