// Components
import Counter from "@/components/Counter";
// Containers
import Section from "../Section";

const Statistics = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row w-full border rounded-lg overflow-hidden shadow-glow dark:shadow-base-500/10 shadow-base-700/20">
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 w-full md:w-1/3 dark:!bg-base-700/10 bg-base-500/10 border-b border-r-0 md:border-b-0 md:border-r">
          <Counter
            value={107}
            className="text-6xl bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black"
          >
            +
          </Counter>
          <span className="text-lg dark:text-base-300 text-base-900">
            React components
          </span>
        </div>
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 w-full md:w-1/3 dark:dark:!bg-base-700/10 bg-base-500/10 border-b border-r-0 md:border-b-0 md:border-r">
          <Counter
            value={20}
            className="text-6xl bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black"
          >
            +
          </Counter>
          <span className="text-lg dark:text-base-300 text-base-900">
            React hooks
          </span>
        </div>
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 w-full md:w-1/3 dark:dark:!bg-base-700/10 bg-base-500/10">
          <Counter
            value={210}
            className="text-6xl bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black"
          >
            +
          </Counter>
          <span className="text-lg dark:text-base-300 text-base-900">
            Vibrant colors
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
