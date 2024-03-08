import Link from "next/link";
import Image from "next/image";
// Components
import GlowCard from "./GlowCard";

const Community = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Link href="https://www.twitter.com/prismaneui" target="_blank">
        <GlowCard className="h-full">
          <div className="flex flex-col p-6">
            <Image
              src="/x_logo.svg"
              alt="X Logo"
              width={32}
              height={32}
              className="mb-6"
            />
            <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
              Follow us on Twitter
            </span>
            <p className="dark:text-base-400 text-base-700">
              We&apos;d love to stay connected with you. If the feeling&apos;s
              mutual, follow{" "}
              <strong className="dark:!text-white !text-base-900">
                @prismaneui
              </strong>{" "}
              on Twitter for the latest news and updates.
            </p>
          </div>
        </GlowCard>
      </Link>
      <Link href="https://www.reddit.com/r/prismane" target="_blank">
        <GlowCard className="h-full">
          <div className="flex flex-col p-6">
            <Image
              src="/reddit_logo.svg"
              alt="Reddit Logo"
              width={42}
              height={42}
              className="mb-6"
            />
            <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
              Follow us on Reddit
            </span>
            <p className="dark:text-base-400 text-base-700">
              We&apos;d love to discuss any future updates about{" "}
              <strong className="dark:!text-white !text-base-900">
                Prismane
              </strong>{" "}
              on our own subreddit.
            </p>
          </div>
        </GlowCard>
      </Link>
      <Link href="https://www.github.com/prismaneui/prismane" target="_blank">
        <GlowCard className="h-full">
          <div className="flex flex-col p-6">
            <Image
              src="/github_logo.svg"
              alt="Reddit Logo"
              width={42}
              height={42}
              className="mb-6 dark:brightness-[200]"
            />
            <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
              Create a discussion on GitHub
            </span>
            <p className="dark:text-base-400 text-base-700">
              If you&apos;re interested, join the discussions on our GitHub
              repository for the latest updates.
            </p>
          </div>
        </GlowCard>
      </Link>
    </div>
  );
};

export default Community;
