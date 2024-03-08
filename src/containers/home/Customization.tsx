import { File } from "@phosphor-icons/react";
// Components
import SingleCode from "@/components/docs/SingleCode";
import InteractiveExample from "@/components/InteractiveExample";
// Containers
import Section from "../Section";
// Example
import CustomizationExample, {
  CustomizationExampleSource,
} from "../examples/CustomizationExample";

const Customization = () => {
  return (
    <Section>
      <span className="section-heading">
        Customization has never <br /> been{" "}
        <span className="section-heading text-gradient">easier.</span>
      </span>
      <span className="section-subheading mb-14">
        Using Prismane&apos;s shorthand style props you can easily customize all
        components
      </span>
      <InteractiveExample
        side={
          <SingleCode
            icon={<File />}
            name="CustomButton.tsx"
            value={CustomizationExampleSource}
            classNames={{
              root: "h-full !my-0",
            }}
          />
        }
        classNames={{
          root: "lg:h-96",
          example: "dark:!bg-base-900 !bg-base-100 !bg-none",
        }}
        switchOrder
      >
        <CustomizationExample />
      </InteractiveExample>
    </Section>
  );
};

export default Customization;
