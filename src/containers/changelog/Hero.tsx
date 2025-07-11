// Containers
import Section from '../Section';

const Hero = () => {
  return (
    <Section className="section-hero !h-fit !items-start !gap-0 !pb-16 sm:!pt-24">
      <div className="flex w-full flex-col lg:w-1/2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Discover the latest updates, enhancements and bug fixes.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
