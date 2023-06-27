import Image from "next/image";
import { Lightning } from "@phosphor-icons/react";
import { Button } from "@prismane/core";
// Containers
import Section from "./Section";

const Start = () => {
  return (
    <Section className="mb-24">
      <div className="flex items-center justify-center w-32 h-32 gradient rounded-3xl mb-14 shadow-xl shadow-primary-500/20">
        <Image src="/logo_white.svg" alt="Logo White" width={96} height={96} />
      </div>
      <span className="section-heading">
        Get started with{" "}
        <span className="section-heading text-gradient">Prismane</span>
      </span>
      <span className="section-subheading">
        Start building faster than ever.
      </span>
      <Button
        variant="primary"
        icon={<Lightning size={24} />}
        className="h-16 text-xl !px-12 mt-5 button-gradient hover:scale-[105%]"
        size="lg"
      >
        Start building for free
      </Button>
    </Section>
  );
};

export default Start;
