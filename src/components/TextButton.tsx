import { ReactNode } from "react";

type TextButtonProps = {
  icon?: ReactNode;
  iconPosition?: "right" | "left";
  full?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

const TextButton = ({
  icon,
  iconPosition = "left",
  full,
  children,
  className,
  ...props
}: TextButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 !px-6 !py-2.5 !w-full sm:!w-fit !text-base !text-primary-500 font-semibold rounded-md transition-all duration-300 ${
        full ? "w-full" : "w-fit"
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

export default TextButton;
