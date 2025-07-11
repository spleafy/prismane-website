type SectionSeparatorProps = {
  position?: 'top' | 'bottom';
} & React.ComponentPropsWithoutRef<'div'>;

const SectionSeparator = ({
  position = 'top',
  ...props
}: SectionSeparatorProps) => {
  return (
    <div
      className={`${
        position === 'top' ? 'top-0' : 'bottom-0'
      } absolute left-0 h-full w-full`}
      {...props}
    >
      <div
        className={`absolute left-0 h-px w-full bg-gradient-to-r from-transparent via-primary-500/60 to-transparent dark:via-primary-400/30 ${
          position === 'top' ? 'top-0' : 'bottom-0'
        }`}
      ></div>
      <div
        className="bg-gradient-radial h-full w-full from-primary-400/20 to-transparent bg-no-repeat dark:from-primary-500/20"
        style={{
          backgroundPosition: `50% ${position === 'top' ? '-110%' : '260%'}`,
          backgroundSize: '90% 70%'
        }}
      ></div>
    </div>
  );
};

export default SectionSeparator;
