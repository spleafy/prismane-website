// Containers
import Section from "../Section";

const Statistics = () => {
  return (
    <Section>
      <div className="flex border rounded-lg">
        <div className="flex flex-col items-center gap-2 py-10 px-12 w-96 bg-base-700/10 border-r">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            107+
          </span>
          <span className="text-lg text-base-200">React components</span>
        </div>
        <div className="flex flex-col items-center gap-2 py-10 px-12 w-96 bg-base-700/10 border-r ">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            484+
          </span>
          <span className="text-lg text-base-200">Themes out of the box</span>
        </div>
        <div className="flex flex-col items-center gap-2 py-10 px-12 w-96 bg-base-700/10">
          <span className="text-6xl bg-gradient-to-tr from-primary-500 to-secondary-500 bg-clip-text text-transparent font-black">
            20+
          </span>
          <span className="text-lg text-base-200">Custom React hooks</span>
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
