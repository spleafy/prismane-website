import { CubeTransparent, Money, User } from "@phosphor-icons/react";
// Containers
import Section from "../Section";

const Values = () => {
  const values = [
    {
      icon: <CubeTransparent />,
      heading: "Transparency",
      text: "Transparency is a core value at our company, and we exemplify this through our open-source approach. All of our code is accessible for everyone to view and contribute to, which means we are held accountable to the highest standards of integrity and fairness.",
    },
    {
      icon: <Money />,
      heading: "Free of charge",
      text: "Our fundamental principle is to offer items that are totally free, without any additional tiers or hidden costs, unlike the competition. This strategy, not only benefits our clients but also fosters a sense of loyalty and trust between us and our community. ",
    },
    {
      icon: <User />,
      heading: "Customer oriented",
      text: "Building products that are influenced by community input and suggestions is one of our fundamental values. This enables us to develop customer-focused products that address their demands in the actual world.",
    },
  ];

  return (
    <Section>
      <span className="section-heading">
        Our core <span className="text-gradient">values</span>
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-16">
        {values.map((value, index) => (
          <div
            className="flex flex-col gap-8 p-6 sm:p-8 w-full dark:bg-base-700/10 rounded-lg border"
            key={index}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center text-white text-2xl w-12 h-12 aspect-square gradient rounded-md">
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
