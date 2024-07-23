import Link from 'next/link';
import { Check, GithubLogo } from '@phosphor-icons/react';
// Components
import Button from '@/components/Button';
import Card from '@/components/Card';
// Containers
import Section from '../Section';

const Contribute = () => {
  return (
    <Section
      className="!items-start justify-between lg:!flex-row lg:!py-48"
      viewOptions={{ amount: 0.8 }}
    >
      <div className="mb-12 flex flex-col gap-2 lg:mb-0 lg:max-w-[50%]">
        <span className="section-heading lg:!text-start">
          Want to{' '}
          <span className="section-heading text-gradient">leave a mark</span> in
          our history?
        </span>
        <span className="section-subheading mt-4 text-lg lg:!text-start">
          Help us create better products by contributing to our open-source
          repository.
        </span>
      </div>
      <Card className="flex w-full flex-col !gap-8 !p-6 lg:w-fit lg:min-w-[500px] lg:!p-12">
        <span className="lg:ext-7xl text-5xl font-black text-base-900 dark:text-white">
          Chip in.
        </span>
        <div className="flex flex-col gap-2">
          <span className="mb-2 text-lg font-medium text-base-900 dark:text-white">
            Your help will help us:
          </span>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-base-700 dark:text-white">
              Grow our community
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-base-700 dark:text-white">
              Expand our line of products
            </span>
          </div>
          <div className="flex items-center gap-2 text-primary-500">
            <Check size={24} />
            <span className="text-base-700 dark:text-white">
              Produce more frequent updates
            </span>
          </div>
        </div>
        <Link
          href="https://github.com/prismaneui/prismane"
          target="_blank"
          className="mt-6 flex !w-full grow"
        >
          <Button icon={<GithubLogo size={24} />} full>
            Contribute
          </Button>
        </Link>
      </Card>
    </Section>
  );
};

export default Contribute;
