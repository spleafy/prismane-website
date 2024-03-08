import { ReactNode } from "react";

type SecondaryButtonProps = {
  icon?: ReactNode;
  iconPosition?: "right" | "left";
  full?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

const SecondaryButton = ({
  icon,
  iconPosition = "left",
  full,
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <button
      className={`relative rounded-lg bg-gradient-to-b dark:from-base-700/0 dark:to-base-700/10 from-base-300/0 to-base-300/10 overflow-hidden group flex justify-center items-center gap-4 px-5 py-[10px] border dark:border-base-900 border-base-200 font-medium ${
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
      <div className="absolute top-0 left-0 w-full h-full rounded-inherit transition-colors shadow-secondary-button-inset z-10 mask"></div>
      <div className="absolute top-0 left-0 w-full h-full rounded-inherit dark:bg-white bg-base-400 opacity-0 dark:group-hover:opacity-[0.01] group-hover:opacity-[0.05] transition-opacity"></div>
    </button>
  );
};

export default SecondaryButton;
