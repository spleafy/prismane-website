import Link from "next/link";
// Containers
import Section from "../containers/Section";

const Error = () => {
  return (
    <Section
      className="section-hero"
      background={
        <>
          <div className="absolute left-2/3 !-translate-x-1/3 -top-2/3 !w-[2400px] h-[1800px] bg-radial-pink z-0 dark:animate-breathe animate-breathe-light delay-[3000]"></div>
          <div className="absolute -left-1/3 -top-full !w-[2400px] h-[1800px] bg-radial-purple z-0 dark:animate-breathe animate-breathe-light"></div>
        </>
      }
    >
      <h1 className="hero-heading">
        Ooops, that&apos;s our <span className="text-gradient">bad.</span>
      </h1>
      <h2 className="hero-subheading">
        We have hit a roadblock and are working actively to resolve the issue.
        Sorry for the inconvenience!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/"
          className="flex flex-col items-center text-center gap-2 p-3 dark:bg-base-700/10 dark:hover:bg-base-700/20 bg-base-500/10 hover:bg-base-500/20 transition-colors rounded-md cursor-pointer"
        >
          <span className="dark:text-white text-base-900 text-lg">Home</span>
          <span className="text-base-500">Return to the homepage.</span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center text-center gap-2 p-3 dark:bg-base-700/10 dark:hover:bg-base-700/20 bg-base-500/10 hover:bg-base-500/20 transition-colors rounded-md cursor-pointer"
        >
          <span className="dark:text-white text-base-900 text-lg">Docs</span>
          <span className="text-base-500">
            Read the documentation of our products.
          </span>
        </Link>
        <Link
          href="/"
          className="flex flex-col items-center text-center gap-2 p-3 dark:bg-base-700/10 dark:hover:bg-base-700/20 bg-base-500/10 hover:bg-base-500/20 transition-colors rounded-md cursor-pointer"
        >
          <span className="dark:text-white text-base-900 text-lg">Sponsor</span>
          <span className="text-base-500">
            Learn about how you could support and help us.
          </span>
        </Link>
      </div>
    </Section>
  );
};

export default Error;
