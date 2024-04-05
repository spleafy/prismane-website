import {
  Users,
  Package,
  PlugsConnected,
  SuitcaseSimple,
} from "@phosphor-icons/react";
// Components
import Separator from "@/components/Separator";
// Containers
import Section from "../Section";

const Future = () => {
  const items = [
    {
      icon: <Users />,
      heading: "Expanding Our Community",
      text: "We plan to extend our community of developers, share ideas, and collaborate to shape the future.",
    },
    {
      icon: <Package />,
      heading: "Expanding Our Library",
      text: "We are committed to continuously expanding our library, providing you with an ever-growing collection of cutting-edge UI components.",
    },
    {
      icon: <PlugsConnected />,
      heading: "Seamless Integration",
      text: "We are committed to providing seamless integration with popular frameworks.",
    },
    {
      icon: <SuitcaseSimple />,
      heading: "Complete Design Kits",
      text: "We plan to create design kits, providing designers and developers with an easy integration.",
    },
  ];

  return (
    <Section className="!items-start">
      <span className="section-heading">
        Our <span className="text-gradient">future</span> plans
      </span>
      <div className="mt-10 sm:mt-16 flex flex-wrap lg:flex-nowrap items-start justify-between gap-24 w-full relative">
        <Separator className="absolute top-0 lg:top-6 left-6 lg:left-0 !w-px lg:!w-full !h-full lg:!h-px" />
        {items.map((item, index) => (
          <div
            className="flex flex-row lg:flex-col gap-7 items-start justify-center z-10 group lg:max-w-[240px]"
            key={index}
          >
            <div className="flex justify-center items-center min-w-[48px] w-12 min-h-[48px] h-12 gradient rounded text-xl text-white">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2">
              <span className="dark:text-white text-base-900 font-bold text-2xl">
                {item.heading}
              </span>
              <span className="dark:text-base-300 text-base-700">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Future;
