import Link from 'next/link';
// Components
import { Button } from '@prismane/core';

const NewsContainer = () => {
  return (
    <div className="sticky left-0 top-0 z-[150] flex h-10 items-center justify-center gap-5 bg-gradient-to-r from-primary-500 to-secondary-500">
      <span className="text-sm font-medium text-white">
        Develop ultra fast with Prismane 🎉
      </span>
      <Link href="/docs">
        <Button
          variant="secondary"
          className="!bg-white !px-3 !py-1 !text-secondary-500"
          size="sm"
          shadow
        >
          Start Now
        </Button>
      </Link>
    </div>
  );
};

export default NewsContainer;
