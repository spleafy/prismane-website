// Containers
import Section from "../Section";

const Statistics = () => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row w-full border rounded-lg">
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 dark:dark:!bg-base-700/10 bg-base-500/10 border-b border-r-0 md:border-b-0 md:border-r">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            107+
          </span>
          <span className="text-lg dark:text-base-300 text-base-900">
            React components
          </span>
        </div>
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 dark:dark:!bg-base-700/10 bg-base-500/10 border-b border-r-0 md:border-b-0 md:border-r">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            484+
          </span>
          <span className="text-lg dark:text-base-300 text-base-900">
            Themes out of the box
          </span>
        </div>
        <div className="flex flex-col grow items-center gap-2 py-10 px-12 dark:dark:!bg-base-700/10 bg-base-500/10">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            20+
          </span>
          <span className="text-lg dark:text-base-300 text-base-900">
            Custom React hooks
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
