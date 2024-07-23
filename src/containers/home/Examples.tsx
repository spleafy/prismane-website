import Link from 'next/link';
import {
  DownloadSimple,
  Fire,
  Bell,
  ArrowUpRight
} from '@phosphor-icons/react';
import {
  ActionButton,
  Button,
  Alert,
  TextField,
  Badge,
  Chip
} from '@prismane/core';
// Components
import { default as WebsiteButton } from '@/components/Button';
import SectionSeparator from '@/components/SectionSeparator';
// Containers
import Section from '../Section';

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
        Effortlessly{' '}
        <span className="section-heading text-gradient">beautiful</span>{' '}
        components
      </span>
      <span className="section-subheading">
        Production-ready right out of the box
      </span>
      <div className="mt-20 flex flex-wrap overflow-hidden rounded-lg border shadow-glow shadow-base-700/20 dark:shadow-base-300/10">
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-2 border-b !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 sm:border-r lg:w-1/3 lg:border-b-0">
          <Button color="pink" variant="primary" icon={<DownloadSimple />}>
            Download
          </Button>
          <span className="absolute bottom-3 left-4 text-base-700 dark:text-base-300">
            Button
          </span>
        </div>
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-2 border-b !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 sm:border-b-0 lg:w-1/3 lg:border-r">
          <TextField
            name="field"
            placeholder="John Doe"
            defaultValue="Jonathan Siege"
          />
          <span className="absolute bottom-3 left-4 text-base-700 dark:text-base-300">
            Text Field
          </span>
        </div>
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-2 !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 sm:border-r lg:w-1/3 lg:border-r-0">
          <Chip icon={<Fire size={18} />} color="pink" size={'base'}>
            Hot
          </Chip>
          <span className="absolute bottom-3 left-4 text-base-700 dark:text-base-300">
            Chip
          </span>
        </div>
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-2 border-t !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 lg:w-1/3 lg:border-r">
          <Alert variant="success" closable>
            Success
          </Alert>
          <span className="absolute bottom-3 left-4 text-base-700 dark:text-base-300">
            Alert
          </span>
        </div>
        <div className="relative flex h-64 w-full flex-col items-center justify-center gap-2 border-t !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 sm:border-r lg:w-1/3">
          <Badge label="4" position="right-start" color="pink">
            <ActionButton color="pink" variant="secondary" icon={<Bell />} />
          </Badge>
          <span className="absolute bottom-3 left-4 text-base-700 dark:text-base-300">
            Badge
          </span>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-6 border-t !bg-base-500/10 px-12 py-16 dark:!bg-base-700/10 sm:w-1/2 lg:w-1/3">
          <span className="text-2xl font-bold text-base-900 dark:text-white">
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
