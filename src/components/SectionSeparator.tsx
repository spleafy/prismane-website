type SectionSeparatorProps = {
  position?: "top" | "bottom";
} & React.ComponentPropsWithoutRef<"div">;

const SectionSeparator = ({
  position = "top",
  ...props
}: SectionSeparatorProps) => {
  return (
    <div
      className={`${
        position === "top" ? "top-0" : "bottom-0"
      } absolute left-0 w-full h-full`}
      {...props}
    >
      <div
        className={`absolute left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent dark:via-primary-400/30 via-primary-500/60 ${
          position === "top" ? "top-0" : "bottom-0"
        }`}
      ></div>
      <div
        className="h-full w-full bg-gradient-radial bg-no-repeat dark:from-primary-500/20 from-primary-400/20 to-transparent"
        style={{
          backgroundPosition: `50% ${position === "top" ? "-110%" : "260%"}`,
          backgroundSize: "90% 70%",
        }}
      ></div>
    </div>
  );
};

export default SectionSeparator;
