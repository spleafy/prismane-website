import { Check, GithubLogo } from "@phosphor-icons/react";
import { Button, Card, Animation } from "@prismane/core";
// Containers
import Section from "../Section";

const Contribute = () => {
  return (
    <Section
      className="!py-48 !flex-row justify-between"
      viewOptions={{ amount: 0.8 }}
      background={(isInView: boolean) => (
        <Animation
          duration={500}
          animation={{
            in: { transform: "translateX(-50%) scale(1)" },
            out: { transform: "translateX(-50%) scale(0)" },
          }}
          animated={isInView}
          className="absolute left-2/3 -top-1/5 !w-[1600px] h-[1600px] bg-radial-purple z-0 !opacity-10"
        ></Animation>
      )}
    >
      <div className="flex flex-col gap-2 max-w-[50%]">
        <span className="section-heading">
          Want to{" "}
          <span className="section-heading text-gradient">leave a mark</span> in
          our history?
        </span>
        <span className="mt-4 text-base-200 text-lg">
          Help us create better products by contributing to our open-source
          repository.
        </span>
      </div>
      <Card className="!p-12 border !bg-base-700/10 rounded-2xl !gap-8 min-w-[500px]">
        <span className="text-7xl font-black text-white">Chip in.</span>
        <div className="flex flex-col gap-2">
          <span className="text-white text-lg mb-2 font-medium">
            Your help will help us:
          </span>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-white">Grow our community</span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-white">Expand our line of products</span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-white">Produce more frequent updates</span>
          </div>
        </div>
        <Button
          variant="primary"
          className="h-16 text-xl !px-12 button-gradient mt-6"
          icon={<GithubLogo size={24} />}
          size="lg"
          full
        >
          Contribute
        </Button>
      </Card>
    </Section>
  );
};

export default Contribute;
