import { Card } from "@prismane/core";
import {
  Moon,
  Package,
  Money,
  Lightning,
  Palette,
  Gauge,
} from "@phosphor-icons/react";
// Containers
import Section from "../Section";

const Features = () => {
  const features = [
    {
      icon: <Moon size={24} />,
      heading: "Light & Dark variants",
      text: "Tailored for Diverse Color Preferences. Choose Light or Dark Mode with ease.",
    },
    {
      icon: <Package size={24} />,
      heading: "Everything you need",
      text: "Our products provide a full set of components, hooks and form validators to levitate your development.",
    },
    {
      icon: <Money size={24} />,
      heading: "No payment",
      text: "Our tools are always free, with no premium tiers or hidden fees.",
    },
    {
      icon: <Lightning size={24} />,
      heading: "Developer experience",
      text: "Our tools significantly boost development speed, helping you create apps much faster.",
    },
    {
      icon: <Palette size={24} />,
      heading: "Theming",
      text: "Get a head start on design with our tools' 484 built-in themes, ready to use right out of the box.",
    },
    {
      icon: <Gauge size={24} />,
      heading: "Performance",
      text: "Our tools are built with performance in mind.",
    },
  ];

  return (
    <Section
      background={
        <>
          <div className="absolute left-1/2 -top-20 w-[1200px] h-[1200px] bg-radial-pink z-0 dark:opacity-5 opacity-30"></div>
          <div className="absolute right-1/3 -top-20 w-[1600px] h-[1600px] bg-radial-rose z-0 dark:opacity-5 opacity-30"></div>
        </>
      }
    >
      <span className="section-heading">
        Unleash the <span className="section-heading text-gradient">power</span>
      </span>
      <span className="section-subheading">Explore what we offer</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {features.map((feature, index: number) => (
          <Card
            className="dark:!bg-base-700/10 !bg-base-500/10 border !p-6 items-center !gap-0 relative !overflow-visible group mt-4"
            key={index}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 gradient rounded-md absolute top-0 -translate-y-1/2 group-hover:-translate-y-2/3 transition-all">
              {feature.icon}
            </div>
            <span className="dark:text-white text-base-900 text-2xl font-bold mt-6">
              {feature.heading}
            </span>
            <p className="mt-4 max-w-[300px] dark:text-base-300 text-base-700 text-center">
              {feature.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;
