import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
// Components
import Button from "@/components/Button";
import Circles from "@/components/Circles";
import GithubHistory from "@/components/GithubHistory";
// Containers
import Section from "../Section";

const Features = () => {
  return (
    <Section>
      <span className="section-heading">
        Unleash the <span className="section-heading text-gradient">power</span>
      </span>
      <span className="section-subheading">Explore what we offer</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center relative border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <Image
              src="/mesh_gradient_8.png"
              alt="Mesh Gradient Background"
              className="dark:opacity-10 opacity-[.15] -z-[1]"
              fill
            />
            <span className="mb-2 text-lg md:text-xl font-semibold dark:text-white text-base-900">
              7+ Form Validators
            </span>
            <span className="text-center mb-6 dark:text-base-400 text-base-500">
              Easily validate inputs with Prismane&apos;s prebuilt form
              validators.
            </span>
            <Link href="/docs/validators/min">
              <Button
                className="mt-6"
                icon={<ArrowRight size={20} weight="bold" />}
                iconPosition="right"
              >
                View Validators
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center relative border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <Image
              src="/github_logo.svg"
              alt="Github Logo"
              width={36}
              height={36}
              className="filter dark:brightness-[100] brightness-0 mb-8"
            />
            <span className="mb-2 text-lg md:text-xl font-semibold dark:text-white text-base-900">
              Open Source
            </span>
            <span className="text-center mb-6 dark:text-base-400 text-base-500">
              Our library is completely open source and we encourage everybody
              to contribute.
            </span>
            <GithubHistory />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center md:min-h-[480px] relative border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <Image
              src="/mesh_gradient_6.png"
              alt="Mesh Gradient Background"
              className="dark:opacity-10 opacity-[.15] -z-[1]"
              fill
            />
            <Image
              src="/mesh_grid_inverted.png"
              alt="Mesh Gradient Background"
              className="object-cover dark:opacity-20 opacity-30 -z-[1]"
              fill
            />
            <span className="bg-clip-text bg-gradient-to-l from-primary-500 to-secondary-500 text-transparent text-7xl font-bold">
              107+
            </span>
            <h3 className="mt-6 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
              Components
            </h3>
            <p className="mt-2 text-center dark:text-base-400 text-base-500">
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
          <div className="flex flex-col justify-center items-center md:h-full relative border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <span className="mb-2 text-lg md:text-xl font-semibold dark:text-white text-base-900">
              Vibrant Color Palette
            </span>
            <span className="text-center mb-6 dark:text-base-400 text-base-500">
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
          <div className="flex flex-col justify-center items-center relative md:h-full border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <span className="mb-2 text-lg md:text-xl font-semibold dark:text-white text-base-900">
              Form Builder Hook
            </span>
            <span className="text-center mb-6 dark:text-base-400 text-base-500">
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
            <div className="absolute top-0 left-0 -z-[1] -rotate-90 -translate-y-7 -translate-x-7">
              <Circles />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:min-h-[480px] relative border dark:border-base-800 border-base-200 px-6 pt-10 pb-8 rounded-xl cursor-pointer transition-colors">
            <Image
              src="/mesh_gradient_5.png"
              alt="Mesh Gradient Background"
              className="dark:opacity-10 opacity-[.15] -z-[1]"
              fill
            />
            <Image
              src="/mesh_grid_inverted.png"
              alt="Mesh Gradient Background"
              className="object-cover dark:opacity-20 opacity-30 -z-[1]"
              fill
            />
            <span className="bg-clip-text bg-gradient-to-l from-primary-500 to-secondary-500 text-transparent text-7xl font-bold">
              20+
            </span>
            <h3 className="mt-6 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
              React Hooks
            </h3>
            <p className="mt-2 text-center dark:text-base-400 text-base-500">
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
