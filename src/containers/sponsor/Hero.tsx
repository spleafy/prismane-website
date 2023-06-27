import { HandCoins } from "@phosphor-icons/react";
import { Button } from "@prismane/core";
// Containers
import Section from "../Section";

const Hero = () => {
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
        Support our <span className="text-gradient">growth.</span>
      </h1>
      <h2 className="hero-subheading">
        Our goal is to continue providing software that is completely free. Your
        donation can help us enhance our product quality, expand our teams,
        accelerate our work, and release updates more frequently.
      </h2>
      <Button
        variant="primary"
        icon={<HandCoins size={24} />}
        className="h-16 text-xl !px-12 button-gradient"
        size="lg"
      >
        Support Our Journey
      </Button>
    </Section>
  );
};

export default Hero;
