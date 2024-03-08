import Image from "next/image";
// Containers
import Section from "../Section";

const Theming = () => {
  return (
    <Section className="sm:mb-20">
      <span className="section-heading">
        Fully customizable{" "}
        <span className="section-heading text-gradient">theme</span>
      </span>
      <span className="section-subheading mb-14">
        Prismane provides a simple way to overwrite and customize the default
        theme allowing you to have endless possibilities.
      </span>
    </Section>
  );
};

export default Theming;
