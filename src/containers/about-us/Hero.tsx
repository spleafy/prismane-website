import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { GithubLogo } from "@phosphor-icons/react";
import { Button } from "@prismane/core";
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
        We <span className="text-gradient">effortlessly</span> master
        complexity.
      </h1>
      <h2 className="hero-subheading">
        At Prismane, we firmly believe that software should be within reach of
        all.
      </h2>
      <Link href="https://github.com/prismaneui/prismane" target="_blank">
        <Button
          variant="primary"
          icon={<GithubLogo size={24} />}
          className="h-16 text-xl !sm:!px-12 !w-full sm:!w-fit button-gradient"
          size="lg"
        >
          Join Our Mission
        </Button>
      </Link>
    </Section>
  );
};

export default Hero;
