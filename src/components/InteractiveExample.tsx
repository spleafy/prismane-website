import { ButtonHTMLAttributes } from 'react';
// Components
import Tooltip from './Tooltip';

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
} & React.ComponentPropsWithoutRef<'div'>;

const InteractiveExample = ({
  actions,
  side,
  showBackground = true,
  switchOrder,
  children,
  classNames
}: InteractiveExampleProps) => {
  return (
    <div
      className={`flex w-full flex-col items-stretch gap-8 lg:flex-row ${
        classNames ? classNames.root : ''
      }`}
    >
      <div
        className={`gradient-stops relative flex items-center justify-center rounded-md py-20 lg:w-1/2 lg:max-w-[50%] ${
          showBackground ? 'bg-gradient-to-tr' : ''
        } ${switchOrder ? 'lg:order-1' : ''} ${
          classNames ? classNames.example : ''
        }`}
      >
        <div
          className={`absolute right-2.5 top-2.5 flex items-center gap-2 ${
            classNames ? classNames.actions : ''
          }`}
        >
          {actions?.map((action, index) => (
            <button
              key={index}
              className={`group relative inline-flex flex-shrink-0 items-center justify-center gap-x-1.5 rounded-md p-1.5 text-xl font-medium text-white underline-offset-4 transition-colors hover:bg-base-100/20 hover:underline focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-75 dark:focus-visible:ring-primary-400 ${
                classNames ? classNames.action : ''
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
        className={`flex flex-col gap-6 lg:w-1/2 lg:max-w-[50%] ${
          classNames ? classNames.side : ''
        }`}
      >
        {side}
      </div>
    </div>
  );
};

export default InteractiveExample;
