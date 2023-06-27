import { Card } from "@prismane/core";
import {
  Moon,
  LockSimpleOpen,
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
      icon: <LockSimpleOpen size={24} />,
      heading: "Owned by you",
      text: "Everything built with our tools is completely owned by you.",
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
      text: "Our tools are built with hardware-accelerated transitions and touch-optimized gestures for extra speed.",
    },
  ];

  return (
    <Section
      background={
        <>
          <div className="absolute left-1/2 -top-20 w-[1200px] h-[1200px] bg-radial-pink z-0 opacity-5"></div>
          <div className="absolute right-1/3 -top-20 w-[1600px] h-[1600px] bg-radial-violet z-0 opacity-5"></div>
        </>
      }
    >
      <span className="section-heading">
        Unleash the <span className="section-heading text-gradient">power</span>
      </span>
      <span className="section-subheading">Explore what we offer</span>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
        {features.map((feature, index: number) => (
          <Card
            className="!bg-base-700/10 border !p-6 items-center !gap-0 relative !overflow-visible !h-48 group mt-4"
            key={index}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 gradient rounded-md absolute top-0 -translate-y-1/2 group-hover:-translate-y-2/3 transition-all">
              {feature.icon}
            </div>
            <span className="text-white text-2xl font-bold mt-6">
              {feature.heading}
            </span>
            <p className="mt-4 max-w-[300px] text-base-300 text-center">
              {feature.text}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;
