// Components
import Counter from '@/components/Counter';
// Containers
import Section from '../Section';

const Statistics = () => {
  return (
    <Section className="!mt-0">
      <div className="flex w-full flex-col overflow-hidden rounded-lg border border-base-300 shadow-glow dark:border-base-800 md:flex-row">
        <div className="flex w-full grow flex-col items-center gap-2 border-b border-r-0 border-base-300 bg-base-200/10 px-12 py-10 dark:border-base-800 dark:!bg-base-900/40 md:w-1/3 md:border-b-0 md:border-r">
          <Counter
            value={111}
            className="bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-6xl font-black text-transparent"
          >
            +
          </Counter>
          <span className="text-lg text-base-900 dark:text-base-300">
            React components
          </span>
        </div>
        <div className="flex w-full grow flex-col items-center gap-2 border-b border-r-0 border-base-300 bg-base-200/10 px-12 py-10 dark:border-base-800 dark:!bg-base-900/40 md:w-1/3 md:border-b-0 md:border-r">
          <Counter
            value={26}
            className="bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-6xl font-black text-transparent"
          >
            +
          </Counter>
          <span className="text-lg text-base-900 dark:text-base-300">
            React hooks
          </span>
        </div>
        <div className="flex w-full grow flex-col items-center gap-2 border-base-300 bg-base-200/10 px-12 py-10 dark:border-base-800 dark:!bg-base-900/40 md:w-1/3">
          <Counter
            value={30}
            className="bg-gradient-to-b from-primary-500 to-secondary-500 bg-clip-text text-6xl font-black text-transparent"
          >
            +
          </Counter>
          <span className="text-lg text-base-900 dark:text-base-300">
            Form validators
          </span>
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
