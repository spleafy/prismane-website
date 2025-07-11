import Link from 'next/link';
import {
  Users,
  ChatsTeardrop,
  HandCoins,
  ArrowSquareOut
} from '@phosphor-icons/react';
// Components
import Button from '@/components/Button';
// Containers
import Section from '../Section';

const Support = () => {
  const ways = [
    {
      icon: <Users />,
      heading: 'Join our community',
      text: 'Join our community and help us grow! By contributing to our open source repository, you can help us accelerate the development of our product and make it even better. Your contributions, big or small, can have a huge impact on our growth and success. Join us today and be a part of something truly special!',
      link: 'https://github.com/prismaneui/prismane',
      action: 'Contribute'
    },
    {
      icon: <ChatsTeardrop />,
      heading: 'Give feedback',
      text: 'Your feedback matters! By sharing your thoughts and experiences with us, you help us improve the quality of our products and make updates that truly meet your needs. Let us know what you think, and help us continue to provide you with the best possible experience.',
      link: 'mailto:contact@prismane.io',
      action: 'Give feedback'
    },
    {
      icon: <HandCoins />,
      heading: 'Donate',
      text: 'We at Prismane want to keep making software free, with no tiers or hidden payments. By making a donation to us, you will enable us to produce even higher-quality products, expand our teams, work even faster and deliver updates more frequently.',
      link: 'https://opencollective.com/prismane',
      action: 'Donate'
    }
  ];

  return (
    <Section>
      <span className="section-heading">
        Want to <span className="text-gradient">support</span> us?
      </span>
      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {ways.map((way, index) => (
          <div
            className="flex w-full flex-col gap-8 rounded-lg border !bg-base-500/10 p-6 dark:!bg-base-700/10 sm:p-8"
            key={index}
          >
            <div className="flex items-center gap-4">
              <div className="gradient flex h-12 w-12 items-center justify-center rounded-md text-2xl text-white">
                {way.icon}
              </div>
              <span className="text-xl font-semibold text-base-900 dark:text-white">
                {way.heading}
              </span>
            </div>
            <span className="text-base-700 dark:text-base-300">{way.text}</span>
            <Link href={way.link} target="_blank" className="mt-auto">
              <Button
                variant="primary"
                icon={<ArrowSquareOut />}
                size="base"
                className="!h-10 sm:!w-full"
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
