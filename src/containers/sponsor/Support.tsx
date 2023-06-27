import {
  Users,
  ChatsTeardrop,
  HandCoins,
  ArrowSquareOut,
} from "@phosphor-icons/react";
// Components
import { Button } from "@prismane/core";
// Containers
import Section from "../Section";

const Support = () => {
  const ways = [
    {
      icon: <Users />,
      heading: "Join our community",
      text: "Join our community and help us grow! By contributing to our open source repository, you can help us accelerate the development of our product and make it even better. Your contributions, big or small, can have a huge impact on our growth and success. Join us today and be a part of something truly special!",
      action: "Contribute",
    },
    {
      icon: <ChatsTeardrop />,
      heading: "Give feedback",
      text: "Your feedback matters! By sharing your thoughts and experiences with us, you help us improve the quality of our products and make updates that truly meet your needs. Let us know what you think, and help us continue to provide you with the best possible experience.",
      action: "Give feedback",
    },
    {
      icon: <HandCoins />,
      heading: "Donate",
      text: "We at Prismane want to keep making software free, with no tiers or hidden payments. By making a donation to us, you will enable us to produce even higher-quality products, expand our teams, work even faster and deliver updates more frequently.",
      action: "Donate",
    },
  ];

  return (
    <Section>
      <span className="section-heading">
        Want to <span className="text-gradient">support</span> us?
      </span>
      <div className="flex items-center gap-10 mt-16">
        {ways.map((way, index) => (
          <div
            className="flex flex-col gap-8 py-10 px-12 w-96 bg-base-700/10 rounded-lg border h-[450px]"
            key={index}
          >
            <div className="flex items-center gap-4">
              <div className="flex justify-center items-center text-white text-2xl w-12 h-12 gradient rounded-md">
                {way.icon}
              </div>
              <span className="text-xl text-white font-semibold">
                {way.heading}
              </span>
            </div>
            <span className="text-base-200">{way.text}</span>
            <Button
              variant="primary"
              icon={<ArrowSquareOut />}
              className="mt-auto button-gradient"
              full
            >
              {way.action}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Support;
