import Link from "next/link";
import { Check, GithubLogo } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
import Card from "@/components/Card";
// Containers
import Section from "../Section";

const Contribute = () => {
  return (
    <Section
      className="lg:!py-48 lg:!flex-row justify-between !items-start"
      viewOptions={{ amount: 0.8 }}
    >
      <div className="flex flex-col gap-2 lg:max-w-[50%] mb-12 lg:mb-0">
        <span className="lg:!text-start section-heading">
          Want to{" "}
          <span className="section-heading text-gradient">leave a mark</span> in
          our history?
        </span>
        <span className="mt-4 text-lg lg:!text-start section-subheading">
          Help us create better products by contributing to our open-source
          repository.
        </span>
      </div>
      <Card className="!p-6 lg:!p-12 flex flex-col !gap-8 w-full lg:w-fit lg:min-w-[500px]">
        <span className="text-5xl lg:ext-7xl font-black dark:text-white text-base-900">
          Chip in.
        </span>
        <div className="flex flex-col gap-2">
          <span className="dark:text-white text-base-900 text-lg mb-2 font-medium">
            Your help will help us:
          </span>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="dark:text-white text-base-700">
              Grow our community
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="dark:text-white text-base-700">
              Expand our line of products
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="dark:text-white text-base-700">
              Produce more frequent updates
            </span>
          </div>
        </div>
        <Link
          href="https://github.com/prismaneui/prismane"
          target="_blank"
          className="flex !w-full mt-6 grow"
        >
          <Button icon={<GithubLogo size={24} />} full>
            Contribute
          </Button>
        </Link>
      </Card>
    </Section>
  );
};

export default Contribute;
