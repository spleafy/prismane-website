import Image from "next/image";
import { Animation } from "@prismane/core";
// Containers
import Section from "../Section";

const History = () => {
  return (
    <Section
      background={(isInView: boolean) => (
        <Animation
          duration={500}
          animation={{
            in: { transform: "translateX(-50%) scale(1)" },
            out: { transform: "translateX(-50%) scale(0)" },
          }}
          animated={isInView}
          className="absolute left-1/2 lg:left-[26%] top-10 !w-[700px] h-[700px] bg-radial-purple z-0 dark:opacity-10 opacity-30"
        ></Animation>
      )}
    >
      <span className="section-heading">
        Our brief <span className="text-gradient">history</span>
      </span>
      <div className="mt-10 sm:mt-16 flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-24">
        <div className="relative w-40 sm:w-64 md:w-80 aspect-square">
          <Image
            src="/martin_petrov.jpg"
            alt="Profile Picture Martin Petrov"
            fill
            className="rounded-3xl -z-10"
          />
        </div>
        <div className="flex flex-col gap-5 sm:max-w-[60%]">
          <span className="dark:text-white text-base-900 font-bold text-5xl text-center lg:text-start">
            Martin Petrov
          </span>
          <span className="uppercase text-xl text-gradient font-bold text-center lg:text-start">
            CEO & Founder
          </span>
          <span className="dark:text-white text-base-700 text-center lg:text-start">
            Embark on an astonishing journey with Martin Petrov, a visionary
            17-year-old from Bulgaria. What began as a small library for
            streamlined software development and component reusability has
            evolved into a standalone React UI masterpiece. Our mission? To
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
