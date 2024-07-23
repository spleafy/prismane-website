import Image from 'next/image';
import Link from 'next/link';
// MDX
import MDX from '@/components/MDX';
// Containers
import Section from '@/containers/Section';

type VersionProps = {
  version: string;
  source: any;
} & React.ComponentPropsWithoutRef<'article'>;

const Version = ({ version, source, ...props }: VersionProps) => {
  return (
    <Section className="!block !pt-0">
      <article
        className="relative flex flex-col gap-6 md:flex-row md:gap-32"
        {...props}
      >
        <div className="flex w-48 min-w-[192px] flex-col gap-2">
          <Link
            href={`/changelog/${version}`}
            target="_blank"
            className="relative left-0 w-fit cursor-pointer rounded-md p-[2px] md:sticky md:top-[104px]"
          >
            <div className="w-fit rounded-md bg-white px-3 py-0.5 text-center font-medium dark:bg-base-900">
              {version}
            </div>
            <div className="gradient absolute left-0 top-0 -z-10 h-full w-full rounded-lg"></div>
          </Link>
          {source.frontmatter.release && (
            <span className="relative left-0 md:sticky md:top-[144px]">
              {source.frontmatter.release}
            </span>
          )}
        </div>
        <div className="flex grow flex-col gap-2">
          <h1 className="mb-10 text-3xl font-bold text-base-900 transition-all dark:text-white sm:text-4xl">
            {source.frontmatter.title ||
              `🚀 Prismane Version ${version.split('v')[1]}`}
          </h1>
          <div className="relative mb-10 flex h-72 w-full overflow-hidden rounded-lg">
            <Image
              src={`/release_banners/${version}.png`}
              className="object-cover"
              alt={`${version} Banner`}
              loading="lazy"
              fill
            />
          </div>
          <MDX
            {...source}
            classNames={{
              h1: 'mt-12 mb-6',
              h2: 'mt-4 mb-1',
              h3: 'mt-12 mb-6'
            }}
          />
        </div>
      </article>
    </Section>
  );
};

export default Version;
