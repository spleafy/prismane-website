import Link, { LinkProps } from "next/link";
// Components
import HeaderButton from "../header/HeaderButton";

type HeaderLinkProps = LinkProps &
  React.ComponentPropsWithoutRef<"a"> & {
    tooltip?: React.ReactNode;
    classNames?: {
      link?: string;
      button?: string;
    };
  };

const HeaderLink = ({
  tooltip,
  classNames,
  children,
  className,
  ...props
}: HeaderLinkProps) => {
  return (
    <Link className={classNames?.link ? classNames.link : ""} {...props}>
      <HeaderButton
        className={`${className ? className : ""} ${
          classNames?.button ? classNames.button : ""
        }`}
        tooltip={tooltip}
      >
        {children}
      </HeaderButton>
    </Link>
  );
};

export default HeaderLink;
