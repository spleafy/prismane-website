import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

interface NavigationProps {
  currentIndex: number;
  routes: any[];
  current: any;
}

const Navigation = ({ currentIndex, routes, current }: NavigationProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-8 grow w-full">
      <div className="flex grow w-full md:w-1/2">
        {currentIndex > 0 && (
          <Link
            className="flex grow justify-between items-center p-3 sm:p-4 rounded-md border dark:border-base-800 border-base-200 dark:hover:bg-base-900/70 hover:bg-base-50/70 transition-colors ease-in-out group"
            href={`/docs/${routes[0]}/${current.items[currentIndex - 1].slug}`}
          >
            <ArrowLeft
              size={24}
              weight="bold"
              className="group-hover:text-primary-500 transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-medium text-xs self-end dark:text-base-300 text-base-700">
                Previous
              </span>
              <span className="dark:text-white text-base-900 self-end text-sm sm:text-base group-hover:text-primary-500 transition-colors">
                {current.items[currentIndex - 1].title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className="flex grow w-full md:w-1/2">
        {currentIndex < current.items.length - 1 && (
          <Link
            className="flex grow justify-between items-center p-3 sm:p-4 rounded-md border dark:border-base-800 border-base-200 dark:hover:bg-base-900/70 hover:bg-base-50/70 transition-colors ease-in-out group"
            href={`/docs/${routes[0]}/${current.items[currentIndex + 1].slug}`}
          >
            <div className="flex flex-col">
              <span className="font-medium text-xs dark:text-base-300 text-base-700">
                Next
              </span>
              <span className="dark:text-white text-base-900 self-end text-sm sm:text-base group-hover:text-primary-500 transition-colors">
                {current.items[currentIndex + 1].title}
              </span>
            </div>
            <ArrowRight
              size={24}
              weight="bold"
              className="group-hover:text-primary-500 transition-colors"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
