type CardProps = {
  classNames?: {
    root?: string;
    wrapper?: string;
    border?: string;
  };
} & React.ComponentProps<"div">;

const Card = ({ classNames, className, children, ...props }: CardProps) => {
  return (
    <div
      className={`relative p-[2px] dark:bg-base-800 bg-base-200 hover:!bg-transparent rounded-xl group overflow-hidden transition-all ${
        classNames?.wrapper ? classNames.wrapper : ""
      }`}
      {...props}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-tr gradient -z-10 transition-all ${
          classNames?.border ? classNames.border : ""
        }`}
      ></div>
      <div
        className={`h-full w-full rounded-[calc(0.75rem-2px)] dark:!bg-base-900 bg-white overflow-hidden transition-colors z-10 ${
          className ? className : ""
        } ${classNames?.root ? classNames.root : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
