// Containers
import Section from "../Section";

type HeroProps = {} & React.ComponentPropsWithoutRef<"section">;

const Hero = () => {
  return (
    <Section className="section-hero sm:!pt-24 !h-fit">
      <span className="inline-block py-1 px-2.5 rounded-full text-xs uppercase tracking-wide font-medium bg-white dark:bg-base-900 border text-gray-800 dark:text-white">
        <span className="block mt-0.5">Updates</span>
      </span>
      <h1 className="hero-heading">Changelog</h1>
      <h2 className="hero-subheading">
        Discover the latest updates, enhancements and bug fixes
      </h2>
    </Section>
  );
};

export default Hero;
