// Components
import { Button } from "@prismane/core";

const NewsContainer = () => {
  return (
    <div className="flex items-center justify-center h-12 py-3 gap-5 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 sticky">
      <span className="text-white text-sm font-medium">
        Develop ultra fast with Prismane 🎉
      </span>
      <Button
        variant="secondary"
        className="!px-3 !py-1.5 !bg-white !text-secondary-500"
        size="sm"
        shadow
      >
        Start Now
      </Button>
    </div>
  );
};

export default NewsContainer;
