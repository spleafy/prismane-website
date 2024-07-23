import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, BookBookmark, House } from '@phosphor-icons/react';
import Button from '@/components/Button';
import SecondaryButton from '@/components/SecondaryButton';
// Containers
import Section from '../containers/Section';
const Error = () => {
  const router = useRouter();

  return (
    <Section className="section-hero !items-start !gap-4">
      <span className="text-gradient mb-2 text-xl font-semibold">
        Error 500
      </span>
      <h1 className="text-5xl text-base-900 dark:text-white">
        An error ocurred.
      </h1>
      <span className="text-base-700 dark:text-base-300">
        We have hit a roadblock and are working actively to resolve the issue.
      </span>
      <div className="flex items-center gap-4">
        <div className="mt-12">
          <Button
            onClick={() => router.back()}
            icon={<ArrowLeft size={20} weight="bold" />}
          >
            Go Back
          </Button>
        </div>
        <Link href="/" className="mt-12">
          <SecondaryButton icon={<House size={20} weight="bold" />}>
            Home
          </SecondaryButton>
        </Link>
        {/* <Link href="/docs" className="mt-12">
          <SecondaryButton icon={<BookBookmark size={20} weight="bold" />}>
            Docs
          </SecondaryButton>
        </Link> */}
      </div>
    </Section>
  );
};

{
  /* <Section className="section-hero !gap-0">
      <h1 className="hero-heading text-gradient !text-[196px]">500</h1>
      <h2 className="hero-subheading text-4xl font-semibold mt-12">
        That&apos;s an error on our end!
      </h2>
      <span>
        We have hit a roadblock and are working actively to resolve the issue.
      </span>
      <Link href="/" className="mt-12">
        <Button icon={<ArrowLeft size={20} weight="bold" />}>Go Back</Button>
      </Link>
    </Section> */
}

export default Error;
