import Image from "next/image";
import { Animation } from "@prismane/core";
// Components
import SectionSeparator from "@/components/SectionSeparator";
// Containers
import Section from "../Section";

const History = () => {
  return (
    <Section className="!pt-0">
      <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-24">
        <div className="relative w-40 sm:w-64 md:w-80 aspect-square">
          <Image
            src="/martin_petrov.jpg"
            alt="Profile Picture Martin Petrov"
            fill
            className="rounded-xl -z-10"
          />
        </div>
        <div className="flex flex-col gap-2 sm:max-w-[60%]">
          <span className="dark:text-white text-base-900 font-bold text-5xl text-center lg:text-start">
            Martin Petrov
          </span>
          <span className="uppercase text-xl text-gradient font-bold text-center lg:text-start">
            Creator
          </span>
          <span className="dark:text-white text-base-700 text-center lg:text-start mt-2">
            Hi! My name is Martin and I am an 18-year-old teenager from Bulgaria
            who&apos;s got a passion for coding. Starting as a simple library
            for easier software development and reusing components, Prismane has
            grown into a remarkable React UI toolkit on its own. Our mission? To
            provide easy-to-use, free-of-charge tools that make exceptional UI
            accessible to all. Join us in revolutionizing the way we design and
            create user interfaces.
          </span>
        </div>
      </div>
    </Section>
  );
};

export default History;
