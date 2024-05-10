import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
import SecondaryButton from "@/components/SecondaryButton";
import Announce from "@/components/Announce";
// Containers
import Section from "../Section";

const Hero = () => {
  return (
    <Section className="section-hero sm:!pt-24">
      <Announce href="/changelog/latest">Prismane v1.6 is out now!</Announce>
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
            className="group !w-full sm:!w-fit"
            icon={
              <ArrowRight
                size={20}
                weight="bold"
                className="transition-all group-hover:translate-x-1"
              />
            }
            iconPosition="right"
          >
            Get Started
          </Button>
        </Link>
        <Link
          href="https://github.com/prismaneui/prismane"
          className="!w-full sm:!w-fit"
        >
          <SecondaryButton
            className="!w-full sm:!w-fit"
            icon={
              <Image
                src="/github_logo.svg"
                alt="Github Logo"
                width={20}
                height={20}
                className="filter dark:brightness-[100] brightness-0 min-h-[20px] min-w-[20px]"
              />
            }
          >
            Github
          </SecondaryButton>
        </Link>
      </div>
    </Section>
  );
};

export default Hero;
