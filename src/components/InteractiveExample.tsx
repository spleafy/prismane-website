import { ButtonHTMLAttributes } from "react";
// Components
import Tooltip from "./Tooltip";

type InteractiveExampleProps = {
  actions?: {
    children: React.ReactNode;
    props?: ButtonHTMLAttributes<HTMLButtonElement>;
    tooltip?: string;
  }[];
  side?: React.ReactNode;
  showBackground?: boolean;
  switchOrder?: boolean;
  classNames?: {
    root?: string;
    example?: string;
    actions?: string;
    action?: string;
    side?: string;
  };
} & React.ComponentPropsWithoutRef<"div">;

const InteractiveExample = ({
  actions,
  side,
  showBackground = true,
  switchOrder,
  children,
  classNames,
}: InteractiveExampleProps) => {
  return (
    <div
      className={`flex w-full items-stretch gap-8 flex-col lg:flex-row ${
        classNames ? classNames.root : ""
      }`}
    >
      <div
        className={`py-20 rounded-md gradient-stops flex justify-center items-center relative lg:w-1/2 lg:max-w-[50%] ${
          showBackground ? "bg-gradient-to-tr" : ""
        } ${switchOrder ? "lg:order-1" : ""} ${
          classNames ? classNames.example : ""
        }`}
      >
        <div
          className={`flex items-center gap-2 absolute top-2.5 right-2.5 ${
            classNames ? classNames.actions : ""
          }`}
        >
          {actions?.map((action, index) => (
            <button
              key={index}
              className={`group relative justify-center focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-xl gap-x-1.5 p-1.5 text-white hover:bg-base-100/20 transition-colors underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center ${
                classNames ? classNames.action : ""
              }`}
              {...action.props}
            >
              {action.children}
              {action.tooltip && <Tooltip>{action.tooltip}</Tooltip>}
            </button>
          ))}
        </div>
        {children}
      </div>
      <div
        className={`lg:max-w-[50%] lg:w-1/2 flex flex-col gap-6 ${
          classNames ? classNames.side : ""
        }`}
      >
        {side}
      </div>
    </div>
  );
};

export default InteractiveExample;
