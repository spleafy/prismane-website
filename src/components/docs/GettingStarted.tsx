import Link from "next/link";
// Components
import Separator from "../Separator";
// Content
import content from "../../content";
import findBySlugs from "@/findBySlugs";

type GettingStartedProps = {
  category: "components" | "hooks" | "validators";
};

const GettingStarted = ({ category: categoryProp }: GettingStartedProps) => {
  const categories = findBySlugs(content, [categoryProp]).items.filter(
    (x: any) => x.slug !== "getting-started"
  );

  return (
    <div className="flex flex-col gap-10 mt-10">
      {categories.map((category: any, index: number) => (
        <div className="flex flex-col gap-3" key={index}>
          <Link
            href={`/docs/${categoryProp}/getting-started#${category.slug}`}
            style={{ scrollMarginTop: "120px" }}
            className="flex items-center gap-4"
            id={category.slug}
          >
            <div className="flex justify-center items-center text-white w-10 h-10 gradient rounded-md text-2xl">
              {category.icon}
            </div>
            <span className="dark:text-white text-base-900 text-2xl font-medium">
              {category.title
                .split("-")
                .map(
                  (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </span>
          </Link>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.items &&
              category.items.map((item: any, index: any) => (
                <Link
                  href={`/docs/${categoryProp}/${category.slug}/${item.slug}`}
                  className="flex flex-col gap-2 p-3 dark:bg-base-700/10 dark:hover:bg-base-700/20 bg-base-500/10 hover:bg-base-500/20 transition-colors rounded-md cursor-pointer"
                  key={index}
                >
                  <span className="dark:text-white text-base-900 text-lg">
                    {item.title}
                  </span>
                  <span className="text-base-500">{item.description}</span>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GettingStarted;
