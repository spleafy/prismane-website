type CardProps = {
  classNames?: {
    root?: string;
    wrapper?: string;
    border?: string;
  };
} & React.ComponentProps<'div'>;

const Card = ({ classNames, className, children, ...props }: CardProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-base-200 p-[2px] transition-all hover:!bg-transparent dark:bg-base-800 ${
        classNames?.wrapper ? classNames.wrapper : ''
      }`}
      {...props}
    >
      <div
        className={`gradient absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-tr opacity-0 transition-all group-hover:opacity-100 ${
          classNames?.border ? classNames.border : ''
        }`}
      ></div>
      <div
        className={`z-10 h-full w-full overflow-hidden rounded-[calc(0.75rem-2px)] bg-white transition-colors dark:!bg-base-900 ${
          className ? className : ''
        } ${classNames?.root ? classNames.root : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
