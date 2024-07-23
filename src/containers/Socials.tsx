import Image from 'next/image';
// Components
import Community from '@/components/Community';
// Containers
import Section from './Section';

const Socials = () => {
  return (
    <Section>
      <span className="section-heading">
        Stay <span className="section-heading text-gradient">connected</span>{' '}
        with Prismane
      </span>
      <span className="section-subheading mb-14">
        Follow us to stay connected
      </span>
      <Community />
    </Section>
  );
};

export default Socials;
