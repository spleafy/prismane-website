import {
  Users,
  Package,
  PlugsConnected,
  SuitcaseSimple
} from '@phosphor-icons/react';
// Components
import Separator from '@/components/Separator';
// Containers
import Section from '../Section';

const Future = () => {
  const items = [
    {
      icon: <Users />,
      heading: 'Expanding Our Community',
      text: 'We plan to extend our community of developers, share ideas, and collaborate to shape the future.'
    },
    {
      icon: <Package />,
      heading: 'Expanding Our Library',
      text: 'We are committed to continuously expanding our library, providing you with an ever-growing collection of cutting-edge UI components.'
    },
    {
      icon: <PlugsConnected />,
      heading: 'Seamless Integration',
      text: 'We are committed to providing seamless integration with popular frameworks.'
    },
    {
      icon: <SuitcaseSimple />,
      heading: 'Complete Design Kits',
      text: 'We plan to create design kits, providing designers and developers with an easy integration.'
    }
  ];

  return (
    <Section className="!items-start">
      <span className="section-heading">
        Our <span className="text-gradient">future</span> plans
      </span>
      <div className="relative mt-10 flex w-full flex-wrap items-start justify-between gap-24 sm:mt-16 lg:flex-nowrap">
        <Separator className="absolute left-6 top-0 !h-full !w-px lg:left-0 lg:top-6 lg:!h-px lg:!w-full" />
        {items.map((item, index) => (
          <div
            className="group z-10 flex flex-row items-start justify-center gap-7 lg:max-w-[240px] lg:flex-col"
            key={index}
          >
            <div className="gradient flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded text-xl text-white">
              {item.icon}
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-base-900 dark:text-white">
                {item.heading}
              </span>
              <span className="text-base-700 dark:text-base-300">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Future;
