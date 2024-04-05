import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
// Containers
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="section-hero sm:!pt-24 !pb-16 !h-fit !gap-0 !items-start">
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Learn more about us, our story, mission and core values.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
