import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Lightning, Copy, Check } from "@phosphor-icons/react";
// Components
import Typewriter from "../../components/Typewriter";
import Button from "@/components/Button";
// Containers
import Section from "../Section";

const Hero = () => {
  const [copy, setCopy] = useState(false);

  return (
    <Section
      className="section-hero"
      background={
        <>
          <div className="absolute left-2/3 !-translate-x-1/3 -top-2/3 !w-[2400px] h-[1800px] bg-radial-pink z-0 dark:animate-breathe animate-breathe-light delay-[3000]"></div>
          <div className="absolute -left-1/3 -top-full !w-[2400px] h-[1800px] bg-radial-purple z-0 dark:animate-breathe animate-breathe-light"></div>
        </>
      }
    >
      <h1 className="hero-heading">
        Make great React apps, ultra{" "}
        <span className="text-gradient">fast.</span>
      </h1>
      <h2 className="hero-subheading">
        Everything you need to start building your future ventures.
      </h2>
      <div className="flex w-full items-center justify-center gap-5 flex-col lg:flex-row">
        <Link href="/docs" className="!w-full sm:!w-fit">
          <Button icon={<Lightning size={24} />}>Start Developing</Button>
        </Link>
        <div className="flex items-center rounded-lg px-2 sm:px-4 py-2 sm:py-3 border dark:bg-base-700/40 bg-base-500/10 dark:text-white text-base-900 whitespace-nowrap gap-2 h-fit sm:h-16 font-mono text-base sm:text-lg !w-full sm:!w-fit">
          $ npm i <Typewriter text="@prismane/core" />
          <button
            className="p-3 ml-auto sm:ml-5 rounded-md cursor-pointer dark:bg-base-500/20 bg-base-700/10 dark:hover:bg-base-500/30 hover:bg-base-500/30 transition-all"
            onClick={() => {
              navigator.clipboard.writeText("npm install @prismane/core");
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1000);
            }}
          >
            {copy ? <Check /> : <Copy />}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
