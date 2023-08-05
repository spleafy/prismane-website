import { WarningDiamond } from "@phosphor-icons/react";

const Important = ({ children, ...props }: any) => {
  return (
    <div
      className="flex gap-4 mt-4 bg-yellow-50 dark:bg-yellow-600/10 border border-yellow-500 dark:border-yellow-500/50 text-sm text-base-500 rounded-md p-5"
      {...props}
    >
      <div className="min-w-[24px] min-h-[24px] flex items-center justify-center mt-1 self-start">
        <WarningDiamond size={24} className="text-yellow-500" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-yellow-600 font-semibold dark:font-medium dark:text-white">
          Important
        </h3>
        <p className="mt-2 text-base-800 dark:text-base-400">{children}</p>
      </div>
    </div>
  );
};

export default Important;
