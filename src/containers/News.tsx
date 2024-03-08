import Link from "next/link";
// Components
import { Button } from "@prismane/core";

const NewsContainer = () => {
  return (
    <div className="sticky top-0 left-0 flex items-center justify-center h-10 gap-5 bg-gradient-to-r from-primary-500 to-secondary-500 z-[150]">
      <span className="text-white text-sm font-medium">
        Develop ultra fast with Prismane 🎉
      </span>
      <Link href="/docs">
        <Button
          variant="secondary"
          className="!px-3 !py-1 !bg-white !text-secondary-500"
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
