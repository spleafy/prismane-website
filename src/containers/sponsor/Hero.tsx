import Link from 'next/link';
import { HandCoins } from '@phosphor-icons/react';
// Components
import Button from '@/components/Button';
// Containers
import Section from '../Section';

const Hero = () => {
  return (
    <Section className="section-hero">
      <h1 className="hero-heading">
        Fuel our <span className="text-gradient">limitless</span> expansion.
      </h1>
      <h2 className="hero-subheading">
        Your donation can help us enhance our product quality, expand our teams,
        accelerate our work, and release updates more frequently.
      </h2>
      <Link href="https://opencollective.com/prismane" target="_blank">
        <Button icon={<HandCoins size={24} />}>Support Our Journey</Button>
      </Link>
    </Section>
  );
};

export default Hero;
