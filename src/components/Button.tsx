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
      className={`relative rounded-lg bg-white/10 dark:bg-base-900/10 overflow-hidden group flex justify-center items-center gap-4 px-5 py-[10px] font-medium transition-colors text-white bg-gradient-to-br gradient-stops ${
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
      <div className="absolute top-0 left-0 w-full h-full rounded-lg transition-colors shadow-button-inset hover:bg-[#ffffff1a] z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-b from-white/20 to-transparent p-px mask"></div>
    </button>
  );
};

export default Button;
