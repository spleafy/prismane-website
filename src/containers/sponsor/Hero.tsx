import Link from "next/link";
import { HandCoins } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
// Containers
import Section from "../Section";

const Hero = () => {
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
        Fuel our <span className="text-gradient">limitless</span> expansion.
      </h1>
      <h2 className="hero-subheading">
        Your donation can help us enhance our product quality, expand our teams,
        accelerate our work, and release updates more frequently.
      </h2>
      <Link href="https://opencollective.com/prismane" target="_blank">
        <Button icon={<HandCoins size={24} />}>Support Our Journey</Button>
      </Link>
    </Section>
  );
};

export default Hero;
