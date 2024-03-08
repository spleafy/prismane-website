import Link from "next/link";
import Image from "next/image";
// Containers
import Section from "../containers/Section";

const NotFound = () => {
  return (
    <>
      <Image
        src="/mesh_grid.png"
        alt="Grid Mesh Background"
        className="object-contain opacity-10 dark:opacity-20 blend-to-bottom"
        fill
      />
      <Image
        src="/mesh_gradient_8.png"
        alt="Mesh Gradient Background"
        className="object-cover opacity-20 blend-to-bottom"
        fill
      />
      <Section className="section-hero">
        <h1 className="hero-heading">
          <span className="text-gradient">Ooops,</span> we lost that page.
        </h1>
        <h2 className="hero-subheading">
          Sorry, the page you are looking for doesn&apos;t exist or hase been
          moved.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-32">
          <Link
            href="/"
            className="flex flex-col items-center text-center gap-2 p-5 dark:bg-base-900/30 dark:hover:bg-base-900/20 bg-base-400/10 hover:bg-base-400/20 transition-colors rounded-md cursor-pointer"
          >
            <span className="dark:text-white text-base-900 text-xl font-bold mb-2">
              Home
            </span>
            <span className="text-base-500">Return to the homepage.</span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center text-center gap-2 p-5 dark:bg-base-900/30 dark:hover:bg-base-900/20 bg-base-400/10 hover:bg-base-400/20 transition-colors rounded-md cursor-pointer"
          >
            <span className="dark:text-white text-base-900 text-xl font-bold mb-2">
              Docs
            </span>
            <span className="text-base-500">
              Read the documentation of our products.
            </span>
          </Link>
          <Link
            href="/"
            className="flex flex-col items-center text-center gap-2 p-5 dark:bg-base-900/30 dark:hover:bg-base-900/20 bg-base-400/10 hover:bg-base-400/20 transition-colors rounded-md cursor-pointer"
          >
            <span className="dark:text-white text-base-900 text-xl font-bold mb-2">
              Sponsor
            </span>
            <span className="text-base-500">
              Learn about how you could support and help us.
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
