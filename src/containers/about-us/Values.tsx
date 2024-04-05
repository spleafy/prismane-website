import { CubeTransparent, Money, User } from "@phosphor-icons/react";
// Components
import Separator from "@/components/Separator";
// Containers
import Section from "../Section";

const Values = () => {
  const values = [
    {
      icon: <CubeTransparent />,
      heading: "Transparency",
      text: "We maintain integrity and fairness by making all of our products open source, allowing anybody to inspect and contribute to our code.",
    },
    {
      icon: <Money />,
      heading: "Free of charge",
      text: "We offer everything for free, with no additional levels or unstated costs. This distinguishes us from rivals and promotes community trust and commitment.",
    },
    {
      icon: <User />,
      heading: "Customer oriented",
      text: "We incorporate community feedback and ideas into the development of our goods to guarantee that they are customer-focused and fulfill practical needs.",
    },
  ];

  return (
    <Section className="!items-start">
      <span className="section-heading">
        Our core <span className="text-gradient">values</span>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
        {values.map((value, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center gradient text-white text-2xl w-12 h-12 aspect-square rounded-md">
                {value.icon}
              </div>
              <span className="text-xl dark:text-white text-base-900 font-semibold">
                {value.heading}
              </span>
            </div>
            <span className="dark:text-base-300 text-base-700">
              {value.text}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Values;
