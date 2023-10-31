import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Copy, Check } from "@phosphor-icons/react";
// Components
import Typewriter from "../../components/Typewriter";
import Button from "@/components/Button";
import Announce from "@/components/Announce";
// Containers
import Section from "../Section";

const Hero = () => {
  const [copy, setCopy] = useState(false);

  return (
    <Section className="section-hero sm:!pt-24">
      <Announce href="/changelog/latest">Prismane v1.3 is out now!</Announce>
      <h1 className="hero-heading">
        Build exceptional React apps with{" "}
        <span className="text-gradient">blazing speed.</span>
      </h1>
      <h2 className="hero-subheading">
        Everything you need to start building your future ventures.
      </h2>
      <div className="flex w-full items-center justify-center gap-5 flex-col lg:flex-row">
        <Link href="/docs" className="!w-full sm:!w-fit">
          <Button
            icon={
              <ArrowRight
                size={20}
                weight="bold"
                className="transition-all group-hover:translate-x-1"
              />
            }
            iconPosition="right"
            className="group"
          >
            Get Started
          </Button>
        </Link>
        <div className="flex items-center rounded-md px-2 py-1.5 border dark:bg-base-800 bg-base-200 dark:text-white text-base-900 hover:shadow-glow shadow-base-900/10 dark:shadow-base-100/5 whitespace-nowrap gap-2 font-mono !w-full sm:!w-72 transition-all">
          $ npm i <Typewriter text="@prismane/core" />
          <button
            className="p-2 ml-auto rounded-md cursor-pointer dark:bg-base-500/20 bg-base-700/10 dark:hover:bg-base-500/30 hover:bg-base-500/30 transition-all"
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
