import { CubeTransparent, Money, User } from '@phosphor-icons/react';
// Components
import Separator from '@/components/Separator';
// Containers
import Section from '../Section';

const Values = () => {
  const values = [
    {
      icon: <CubeTransparent />,
      heading: 'Transparency',
      text: 'We maintain integrity and fairness by making all of our products open source, allowing anybody to inspect and contribute to our code.'
    },
    {
      icon: <Money />,
      heading: 'Free of charge',
      text: 'We offer everything for free, with no additional levels or unstated costs. This distinguishes us from rivals and promotes community trust and commitment.'
    },
    {
      icon: <User />,
      heading: 'Customer oriented',
      text: 'We incorporate community feedback and ideas into the development of our goods to guarantee that they are customer-focused and fulfill practical needs.'
    }
  ];

  return (
    <Section className="!items-start">
      <span className="section-heading">
        Our core <span className="text-gradient">values</span>
      </span>
      <div className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="flex items-center gap-4">
              <div className="gradient flex aspect-square h-12 w-12 items-center justify-center rounded-md text-2xl text-white">
                {value.icon}
              </div>
              <span className="text-xl font-semibold text-base-900 dark:text-white">
                {value.heading}
              </span>
            </div>
            <span className="text-base-700 dark:text-base-300">
              {value.text}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Values;
