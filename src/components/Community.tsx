import Link from "next/link";
import Image from "next/image";
// Components
import Card from "./Card";

const Community = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Link href="https://www.twitter.com/prismaneui" target="_blank">
        <Card classNames={{ root: "flex flex-col p-6", wrapper: "h-full" }}>
          <Image
            src="/x_logo.svg"
            alt="X Logo"
            width={32}
            height={32}
            className="mb-6 brightness-0 dark:brightness-[200]"
          />
          <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
            Follow us on X
          </span>
          <p className="dark:text-base-400 text-base-700">
            We&apos;d love to stay connected with you. If the feeling&apos;s
            mutual, follow{" "}
            <strong className="dark:!text-white !text-base-900">
              @prismaneui
            </strong>{" "}
            on Twitter for the latest news and updates.
          </p>
        </Card>
      </Link>
      <Link href="https://discord.gg/gFvcmdpKeb" target="_blank">
        <Card classNames={{ root: "flex flex-col p-6", wrapper: "h-full" }}>
          <Image
            src="/discord_logo.svg"
            alt="Discord Logo"
            width={42}
            height={42}
            className="mb-6 brightness-0 dark:brightness-[200]"
          />
          <span className="text-xl font-bold dark:text-white text-base-900 mb-2 mt-2">
            Join our Discord server
          </span>
          <p className="dark:text-base-400 text-base-700">
            We&apos;d love to discuss any new features, ideas, bugs,
            announcements and showcases about{" "}
            <strong className="dark:!text-white !text-base-900">
              Prismane
            </strong>{" "}
            on our own Discord server.
          </p>
        </Card>
      </Link>
      <Link href="https://www.github.com/prismaneui/prismane" target="_blank">
        <Card classNames={{ root: "flex flex-col p-6", wrapper: "h-full" }}>
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
        </Card>
      </Link>
    </div>
  );
};

export default Community;
