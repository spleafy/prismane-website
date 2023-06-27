import { useState } from "react";
import { Lightning, Copy, Check } from "@phosphor-icons/react";
import { Button } from "@prismane/core";
// Components
import Typewriter from "../../components/Typewriter";
// Containers
import Section from "../Section";

const Hero = () => {
  const [copy, setCopy] = useState(false);

  return (
    <Section
      className="section-hero"
      background={
        <>
          <div className="absolute left-2/3 !-translate-x-1/3 -top-2/3 !w-[2400px] h-[1800px] bg-radial-pink z-0 animate-breathe delay-[3000]"></div>
          <div className="absolute -left-1/3 -top-full !w-[2400px] h-[1800px] bg-radial-purple z-0 animate-breathe"></div>
        </>
      }
    >
      <h1 className="hero-heading">
        Make great apps, ultra <span className="text-gradient">fast.</span>
      </h1>
      <h2 className="hero-subheading">
        Everything you need to start building your future ventures.
      </h2>
      <div className="flex items-center gap-5">
        <Button
          variant="primary"
          icon={<Lightning size={24} />}
          className="h-16 text-xl !px-12 button-gradient"
          size="lg"
        >
          Start Developing
        </Button>
        <div className="flex items-center rounded-lg px-4 py-3 border border-base-600 bg-base-700/40 text-white whitespace-nowrap gap-2 h-16 font-mono text-lg">
          $ npm install <Typewriter text="@prismane/core" />{" "}
          <button
            className="ml-5 p-3 rounded-md cursor-pointer bg-base-500/10 hover:bg-base-500/20 transition-all"
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
