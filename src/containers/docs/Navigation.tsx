import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import findBySlugs from "@/findBySlugs";
import content from "@/content";

interface NavigationProps {
  slugs: any;
}

const Navigation = ({ slugs }: NavigationProps) => {
  const items: any[] = [];

  findBySlugs(content, slugs, (found, array) => {
    const foundItems = {
      prev: undefined,
      current: found,
      next: undefined,
    };

    const foundIndex = array.findIndex((obj: any) => obj.slug === found.slug);

    if (array[foundIndex - 1]) {
      foundItems.prev = array[foundIndex - 1];
    }

    if (array[foundIndex + 1]) {
      foundItems.next = array[foundIndex + 1];
    }

    items.push(foundItems);
  });

  const find = (array: any[], searched: "next" | "prev"): any[] => {
    const copy = [...array];

    if (
      searched === "next" &&
      copy[copy.length - 1] &&
      !copy[copy.length - 1].next
    ) {
      return find(copy.slice(0, -1), searched);
    }

    if (
      searched === "prev" &&
      copy[copy.length - 1] &&
      !copy[copy.length - 1].prev
    ) {
      return find(copy.slice(0, -1), searched);
    }

    const current = copy.pop();

    const rest = copy.map((item: any) => item.current);

    let added;

    if (searched === "next" && current && current.next) {
      added = current.next;
    } else if (searched === "prev" && current && current.prev) {
      added = current.prev;
    }

    const full = added ? [...rest, added] : [...rest];

    if (
      searched === "prev" &&
      current &&
      current.prev &&
      current.prev.items &&
      current.prev.items.length > 0
    ) {
      full.push(current.prev.items[current.prev.items.length - 1]);
    }

    if (
      searched === "next" &&
      current &&
      current.next &&
      current.next.items &&
      current.next.items.length > 0
    ) {
      full.push(current.next.items[0]);
    }

    return full;
  };

  const prevItems = find(items, "prev");

  const nextItems = find(items, "next");

  const prevItem = prevItems[prevItems.length - 1];

  const nextItem = nextItems[nextItems.length - 1];

  const prevUrl = prevItems.map((item: any) => item.slug).join("/");

  const nextUrl = nextItems.map((item: any) => item.slug).join("/");

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 mt-8 grow w-full">
      <div className="flex grow w-full md:w-1/2">
        {prevItem && (
          <Link
            className="flex grow justify-between items-center p-3 sm:p-4 rounded-md border dark:border-base-800 border-base-200 dark:hover:bg-base-900/70 hover:bg-base-50/70 transition-colors ease-in-out group"
            href={`/docs/${prevUrl}`}
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
                {prevItem.title}
              </span>
            </div>
          </Link>
        )}
      </div>
      <div className="flex grow w-full md:w-1/2">
        {nextItem && (
          <Link
            className="flex grow justify-between items-center p-3 sm:p-4 rounded-md border dark:border-base-800 border-base-200 dark:hover:bg-base-900/70 hover:bg-base-50/70 transition-colors ease-in-out group"
            href={`/docs/${nextUrl}`}
          >
            <div className="flex flex-col">
              <span className="font-medium text-xs dark:text-base-300 text-base-700">
                Next
              </span>
              <span className="dark:text-white text-base-900 self-end text-sm sm:text-base group-hover:text-primary-500 transition-colors">
                {nextItem.title}
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
