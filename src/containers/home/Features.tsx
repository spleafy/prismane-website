import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';
// Components
import Button from '@/components/Button';
import Circles from '@/components/Circles';
import GithubHistory from '@/components/GithubHistory';
// Containers
import Section from '../Section';

const Features = () => {
  return (
    <Section>
      <span className="section-heading">
        Unleash the <span className="section-heading text-gradient">power</span>
      </span>
      <span className="section-subheading">Explore what we offer</span>
      <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800">
            <Image
              src="/mesh_gradient_8.png"
              alt="Mesh Gradient Background"
              className="-z-[1] opacity-[.15] dark:opacity-10"
              fill
            />
            <span className="bg-gradient-to-l from-primary-500 to-secondary-500 bg-clip-text text-7xl font-bold text-transparent">
              28+
            </span>
            <span className="mb-2 mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200 md:text-xl">
              Form Validators
            </span>
            <span className="mb-6 text-center text-base-500 dark:text-base-400">
              Easily validate inputs with Prismane&apos;s prebuilt form
              validators.
            </span>
            <Link href="/docs/validators/getting-started">
              <Button
                className="mt-6"
                icon={<ArrowRight size={20} weight="bold" />}
                iconPosition="right"
              >
                View Validators
              </Button>
            </Link>
          </div>
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800">
            <Image
              src="/github_logo.svg"
              alt="Github Logo"
              width={36}
              height={36}
              className="mb-8 brightness-0 filter dark:brightness-[100]"
            />
            <span className="mb-2 text-lg font-semibold text-base-900 dark:text-white md:text-xl">
              Open Source
            </span>
            <span className="mb-6 text-center text-base-500 dark:text-base-400">
              Our library is completely open source and we encourage everybody
              to contribute.
            </span>
            <GithubHistory />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800 md:min-h-[480px]">
            <Image
              src="/mesh_gradient_6.png"
              alt="Mesh Gradient Background"
              className="-z-[1] opacity-[.15] dark:opacity-10"
              fill
            />
            <Image
              src="/mesh_grid_inverted.png"
              alt="Mesh Gradient Background"
              className="-z-[1] object-cover opacity-30 dark:opacity-20"
              fill
            />
            <span className="bg-gradient-to-l from-primary-500 to-secondary-500 bg-clip-text text-7xl font-bold text-transparent">
              111+
            </span>
            <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200 md:text-xl">
              Components
            </h3>
            <p className="mt-2 text-center text-base-500 dark:text-base-400">
              Create your apps with speed and ease by using Prismane&apos;s huge
              collection of components.
            </p>
            <Link href="/docs/components/getting-started">
              <Button
                className="mt-10"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                View Components
              </Button>
            </Link>
          </div>
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800 md:h-full">
            <span className="mb-2 text-lg font-semibold text-base-900 dark:text-white md:text-xl">
              Vibrant Color Palette
            </span>
            <span className="mb-6 text-center text-base-500 dark:text-base-400">
              Our library includes a versatile color palette comprising over 210
              colors, providing extensive customization options.
            </span>
            <Link href="/docs/styling/color-palette">
              <Button
                className="mt-6"
                icon={<ArrowRight size={20} weight="bold" />}
                iconPosition="right"
              >
                Explore Color Palette
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800 md:h-full">
            <span className="mb-2 text-lg font-semibold text-base-900 dark:text-white md:text-xl">
              Form Builder Hook
            </span>
            <span className="mb-6 text-center text-base-500 dark:text-base-400">
              Our library comes with a prebuilt hook that helps you easily build
              forms, register inputs, handle validation and much more.
            </span>
            <Link href="/docs/hooks/use-form">
              <Button
                className="mt-6"
                icon={<ArrowRight size={20} weight="bold" />}
                iconPosition="right"
              >
                Explore useForm Hook
              </Button>
            </Link>
            <div className="absolute left-0 top-0 -z-[1] -translate-x-7 -translate-y-7 -rotate-90">
              <Circles />
            </div>
          </div>
          <div className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-base-200 px-6 pb-8 pt-10 transition-colors dark:border-base-800 md:min-h-[480px]">
            <Image
              src="/mesh_gradient_5.png"
              alt="Mesh Gradient Background"
              className="-z-[1] opacity-[.15] dark:opacity-10"
              fill
            />
            <Image
              src="/mesh_grid_inverted.png"
              alt="Mesh Gradient Background"
              className="-z-[1] object-cover opacity-30 dark:opacity-20"
              fill
            />
            <span className="bg-gradient-to-l from-primary-500 to-secondary-500 bg-clip-text text-7xl font-bold text-transparent">
              26+
            </span>
            <h3 className="mt-6 text-lg font-semibold text-gray-800 dark:text-gray-200 md:text-xl">
              React Hooks
            </h3>
            <p className="mt-2 text-center text-base-500 dark:text-base-400">
              Our library comes with all of the React hooks that you need to
              develop anything from a simple website to a complex application.
            </p>
            <Link href="/docs/hooks/getting-started">
              <Button
                className="mt-10"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Explore Hooks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
