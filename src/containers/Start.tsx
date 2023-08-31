import Image from "next/image";
import Link from "next/link";
import { Lightning } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
// Containers
import Section from "./Section";

const Start = () => {
  return (
    <Section className="mb-24">
      <div className="flex items-center justify-center w-32 h-32 gradient rounded-3xl mb-14 shadow-xl dark:shadow-primary-500/20 shadow-primary-500/30">
        <Image src="/logo_white.svg" alt="Logo White" width={96} height={96} />
      </div>
      <span className="section-heading">
        Get started with{" "}
        <span className="section-heading text-gradient">Prismane</span>
      </span>
      <span className="section-subheading">
        Start building faster than ever.
      </span>
      <Link href="/docs" className="!w-full sm:!w-fit">
        <Button
          icon={<Lightning size={24} />}
          className="mt-5 hover:scale-[105%]"
        >
          Start building for free
        </Button>
      </Link>
    </Section>
  );
};

export default Start;
