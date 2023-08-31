import Link from "next/link";
import {
  Users,
  ChatsTeardrop,
  HandCoins,
  ArrowSquareOut,
} from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
// Containers
import Section from "../Section";

const Support = () => {
  const ways = [
    {
      icon: <Users />,
      heading: "Join our community",
      text: "Join our community and help us grow! By contributing to our open source repository, you can help us accelerate the development of our product and make it even better. Your contributions, big or small, can have a huge impact on our growth and success. Join us today and be a part of something truly special!",
      link: "https://github.com/prismaneui/prismane",
      action: "Contribute",
    },
    {
      icon: <ChatsTeardrop />,
      heading: "Give feedback",
      text: "Your feedback matters! By sharing your thoughts and experiences with us, you help us improve the quality of our products and make updates that truly meet your needs. Let us know what you think, and help us continue to provide you with the best possible experience.",
      link: "mailto:contact@prismane.io",
      action: "Give feedback",
    },
    {
      icon: <HandCoins />,
      heading: "Donate",
      text: "We at Prismane want to keep making software free, with no tiers or hidden payments. By making a donation to us, you will enable us to produce even higher-quality products, expand our teams, work even faster and deliver updates more frequently.",
      link: "https://opencollective.com/prismane",
      action: "Donate",
    },
  ];

  return (
    <Section>
      <span className="section-heading">
        Want to <span className="text-gradient">support</span> us?
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 sm:mt-16">
        {ways.map((way, index) => (
          <div
            className="flex flex-col gap-8 p-6 sm:p-8 w-full dark:!bg-base-700/10 !bg-base-500/10 rounded-lg border"
            key={index}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center text-white text-2xl w-12 h-12 gradient rounded-md">
                {way.icon}
              </div>
              <span className="text-xl dark:text-white text-base-900 font-semibold">
                {way.heading}
              </span>
            </div>
            <span className="dark:text-base-300 text-base-700">{way.text}</span>
            <Link href={way.link} target="_blank" className="mt-auto">
              <Button
                variant="primary"
                icon={<ArrowSquareOut />}
                size="base"
                className="sm:!w-full !h-10"
                full
              >
                {way.action}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Support;
