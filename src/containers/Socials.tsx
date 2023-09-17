import Image from "next/image";
// Components
import SectionSeparator from "@/components/SectionSeparator";
import Community from "@/components/Community";
// Containers
import Section from "./Section";

const Socials = () => {
  return (
    <Section
      background={<SectionSeparator position="bottom" />}
      className="sm:mb-20"
    >
      <span className="section-heading">
        Stay <span className="section-heading text-gradient">connected</span>{" "}
        with Prismane
      </span>
      <span className="section-subheading mb-14">
        Follow us to stay connected
      </span>
      <Community />
    </Section>
  );
};

export default Socials;
