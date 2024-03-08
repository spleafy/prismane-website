import Image from "next/image";
import Link from "next/link";
// MDX
import MDX from "@/components/MDX";
// Containers
import Section from "@/containers/Section";

type VersionProps = {
  version: string;
  source: any;
} & React.ComponentPropsWithoutRef<"article">;

const Version = ({ version, source, ...props }: VersionProps) => {
  return (
    <Section className="!block !pt-0">
      <article
        className="flex flex-col md:flex-row gap-6 md:gap-32 relative"
        {...props}
      >
        <div className="flex flex-col gap-2 w-48 min-w-[192px]">
          <Link
            href={`/changelog/${version}`}
            target="_blank"
            className="p-[2px] rounded-md cursor-pointer relative md:sticky w-fit md:top-[104px] left-0"
          >
            <div className="px-3 py-0.5 rounded-md text-center w-fit font-medium dark:bg-base-900 bg-white">
              {version}
            </div>
            <div className="absolute top-0 left-0 -z-10 w-full h-full rounded-lg gradient"></div>
          </Link>
          {source.frontmatter.release && (
            <span className="relative md:sticky md:top-[144px] left-0">
              {source.frontmatter.release}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 grow">
          <h1 className="text-base-900 dark:text-white text-3xl sm:text-4xl font-bold transition-all mb-10">
            {source.frontmatter.title ||
              `🚀 Prismane Version ${version.split("v")[1]}`}
          </h1>
          <div className="flex w-full h-72 relative rounded-lg overflow-hidden mb-10">
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
              h1: "mt-12 mb-6",
              h2: "mt-4 mb-1",
              h3: "mt-12 mb-6",
            }}
          />
        </div>
      </article>
    </Section>
  );
};

export default Version;
