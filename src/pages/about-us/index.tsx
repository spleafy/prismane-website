import Head from 'next/head';
import Image from 'next/image';
// Containers
import Hero from '@/containers/about-us/Hero';
import History from '@/containers/about-us/History';
import Future from '@/containers/about-us/Future';
import Values from '@/containers/about-us/Values';
import Contribute from '@/containers/about-us/Contribute';
import Start from '@/containers/Start';

export default function About_Us() {
  return (
    <>
      <Head>
        <title>Prismane / About Us</title>
        <meta
          name="description"
          content="Discover the story behind Prismane, a visionary React UI library. Learn about our mission, values, and commitment to providing easy-to-use, free tools for exceptional user interfaces. Join us in revolutionizing the way we design and create beautiful web experiences."
        />
      </Head>
      <Hero />
      <History />
      <Values />
      <Future />
      {/* <Contribute /> */}
      <Start />
    </>
  );
}
