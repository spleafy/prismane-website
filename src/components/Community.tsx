import Link from "next/link";
import {
  ArrowSquareOut,
  TwitterLogo,
  RedditLogo,
  GithubLogo,
} from "@phosphor-icons/react";

const Community = () => {
  const channels = [
    {
      name: "Twitter",
      url: "https://www.twitter.com/prismaneui",
      icon: (
        <TwitterLogo
          size={32}
          fill="#00acee"
          className="fill-[#00acee]"
          weight="fill"
        />
      ),
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/r/prismane",
      icon: (
        <RedditLogo
          size={32}
          className="fill-[#ff6b35] dark:fill-[#ff4500]"
          weight="fill"
        />
      ),
    },
    {
      name: "Github",
      url: "https://www.github.com/prismaneui/prismane",
      icon: (
        <GithubLogo
          size={32}
          className="fill-base-900 dark:fill-white"
          weight="fill"
        />
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-5">
      {channels.map((channel, index) => (
        <Link
          key={index}
          href={channel.url}
          target="_blank"
          className="flex items-center justify-center gap-4 px-10 py-4 rounded-md border w-full sm:w-fit hover:border-primary-500 transition-colors"
        >
          {channel.icon}
          <span className="flex items-center gap-2 font-medium">
            {channel.name}
            <ArrowSquareOut size={20} />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Community;
