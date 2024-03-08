import Link from "next/link";
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
// Components
import { default as WebsiteButton } from "@/components/Button";
import SectionSeparator from "@/components/SectionSeparator";
// Containers
import Section from "../Section";

const Examples = () => {
  return (
    <Section
      background={
        <>
          <SectionSeparator />
          <SectionSeparator position="bottom" />
        </>
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
      <div className="flex border flex-wrap rounded-lg overflow-hidden mt-20 shadow-glow dark:shadow-base-300/10 shadow-base-700/20">
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative h-64 border-b lg:border-b-0 sm:border-r">
          <Button color="pink" variant="primary" icon={<DownloadSimple />}>
            Download
          </Button>
          <span className="absolute left-4 bottom-3 dark:text-base-300 text-base-700">
            Button
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative h-64 border-b sm:border-b-0 lg:border-r">
          <TextField
            name="field"
            placeholder="John Doe"
            defaultValue="Jonathan Siege"
          />
          <span className="absolute left-4 bottom-3 dark:text-base-300 text-base-700">
            Text Field
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative h-64 sm:border-r lg:border-r-0">
          <Chip icon={<Fire size={18} />} color="pink" size={"base"}>
            Hot
          </Chip>
          <span className="absolute left-4 bottom-3 dark:text-base-300 text-base-700">
            Chip
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative h-64 border-t lg:border-r">
          <Alert variant="success" closable>
            Success
          </Alert>
          <span className="absolute left-4 bottom-3 dark:text-base-300 text-base-700">
            Alert
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative h-64 border-t sm:border-r">
          <Badge label="4" position="right-start" color="pink">
            <ActionButton color="pink" variant="secondary" icon={<Bell />} />
          </Badge>
          <span className="absolute left-4 bottom-3 dark:text-base-300 text-base-700">
            Badge
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 py-16 px-12 w-full sm:w-1/2 lg:w-1/3 dark:!bg-base-700/10 !bg-base-500/10 relative border-t">
          <span className="text-2xl dark:text-white text-base-900 font-bold">
            Want to see more?
          </span>
          <Link href="/docs">
            <WebsiteButton
              icon={<ArrowUpRight size={20} weight="bold" />}
              iconPosition="right"
            >
              Read the docs
            </WebsiteButton>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Examples;
