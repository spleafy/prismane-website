import Link from "next/link";
import { GithubLogo } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
// Containers
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="section-hero">
      <h1 className="hero-heading">
        We <span className="text-gradient">effortlessly</span> master
        complexity.
      </h1>
      <h2 className="hero-subheading">
        At Prismane, we firmly believe that software should be within reach of
        all.
      </h2>
      <Link href="https://github.com/prismaneui/prismane" target="_blank">
        <Button icon={<GithubLogo size={24} />}>Join Our Mission</Button>
      </Link>
    </Section>
  );
};

export default Hero;
