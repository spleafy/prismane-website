import {
  DownloadSimple,
  Fire,
  Bell,
  ArrowUpRight,
} from "@phosphor-icons/react";
import {
  ActionButton,
  Button,
  Alert,
  TextField,
  Badge,
  Chip,
} from "@prismane/core";
// Containers
import Section from "../Section";

const Examples = () => {
  return (
    <Section
      background={
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-[1800px] h-[1800px] bg-radial-pink z-0 opacity-5"></div>
      }
    >
      <span className="section-heading">
        Effortlessly{" "}
        <span className="section-heading text-gradient">beautiful</span>{" "}
        components
      </span>
      <span className="section-subheading">
        Production-ready right out of the box
      </span>
      <div className="flex border rounded-lg flex-wrap mt-20">
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-1/3 bg-base-700/10 relative h-64 border-r">
          <Button color="pink" variant="primary" icon={<DownloadSimple />}>
            Download
          </Button>
          <span className="absolute left-4 bottom-3 text-base-200">Button</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-1/3 bg-base-700/10 relative h-64 border-r">
          <TextField
            name="field"
            placeholder="John Doe"
            defaultValue="Jonathan Siege"
          />
          <span className="absolute left-4 bottom-3 text-base-200">
            Text Field
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-1/3 bg-base-700/10 relative h-64">
          <Chip icon={<Fire size={18} />} color="pink" size={"base"}>
            Hot
          </Chip>
          <span className="absolute left-4 bottom-3 text-base-200">Chip</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-1/3 bg-base-700/10 relative h-64 border-t border-r">
          <Alert variant="success" closable>
            Success
          </Alert>
          <span className="absolute left-4 bottom-3 text-base-200">Alert</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-1/3 bg-base-700/10 relative h-64 border-t border-r">
          <Badge label="4" position="right-start" color="pink">
            <ActionButton color="pink" variant="secondary" icon={<Bell />} />
          </Badge>
          <span className="absolute left-4 bottom-3 text-base-200">Badge</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 py-16 px-12 w-1/3 bg-base-700/10 relative border-t">
          <span className="text-2xl text-white font-bold">
            Want to see more?
          </span>
          <Button
            color="pink"
            variant="tertiary"
            icon={<ArrowUpRight />}
            className="text-lg text-base-200"
          >
            Read the docs
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Examples;
