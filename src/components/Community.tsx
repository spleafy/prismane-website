import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
// Components
import Card from "./Card";

export interface CommunityProps {
  column?: boolean;
}

const Community = ({ column = false }: CommunityProps) => {
  const communities = [
    {
      url: "https://www.twitter.com/prismaneui",
      heading: "Follow us on X",
      text: (
        <>
          We&apos;d love to stay connected with you. If the feeling&apos;s
          mutual, follow{" "}
          <strong className="dark:!text-white !text-base-900">
            @prismaneui
          </strong>{" "}
          on Twitter for the latest news and updates.
        </>
      ),
      src: "/x_logo.svg",
      alt: "X Logo",
    },
    {
      url: "https://discord.gg/gFvcmdpKeb",
      heading: "Join our Discord server",
      text: (
        <>
          We&apos;d love to discuss any new features, ideas, bugs, announcements
          and showcases about{" "}
          <strong className="dark:!text-white !text-base-900">Prismane</strong>{" "}
          on our own Discord server.
        </>
      ),
      src: "/discord_logo.svg",
      alt: "Discord Logo",
    },
    {
      url: "https://www.github.com/prismaneui/prismane",
      heading: "Create a discussion on GitHub",
      text: (
        <>
          If you&apos;re interested, join the discussions on our GitHub
          repository for the latest updates.
        </>
      ),
      src: "/github_logo.svg",
      alt: "Github Logo",
    },
  ];

  return (
    <div
      className={`${
        column
          ? "flex flex-col"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      } mt-6 gap-6`}
    >
      {communities.map((community, index) => (
        <Link key={index} href={community.url} target="_blank">
          <Card
            classNames={{
              root: `${
                column ? "flex-row items-center gap-8" : "flex-col"
              } flex p-6`,
              wrapper: "h-full",
            }}
          >
            <div
              className={`${
                column
                  ? "min-w-12 min-h-12 w-12 h-12"
                  : "min-w-8 min-h-8 w-8 h-8 mb-6"
              } relative`}
            >
              <Image
                src={community.src}
                alt={community.alt}
                className="brightness-0 dark:brightness-[200]"
                fill
              />
            </div>
            <div className={`${column ? "" : ""} flex flex-col`}>
              <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
                {community.heading}
              </span>
              <p className="dark:text-base-400 text-base-700">
                {community.text}
              </p>
            </div>
            {column && (
              <div className="min-w-8 min-h-8 w-8 h-8">
                <ArrowUpRight size={32} />
              </div>
            )}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Community;
