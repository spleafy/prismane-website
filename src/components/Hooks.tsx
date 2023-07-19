import Link from "next/link";
import { Divider } from "@prismane/core";
// Content
import content from "../content";
import categories from "../categories";

const Hooks = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      {categories.hooks.map((category, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <div className="flex items-center gap-4" id={category.name}>
            <div className="flex justify-center items-center text-white w-10 h-10 gradient rounded-md text-2xl">
              {category.icon}
            </div>
            <span className="dark:text-white text-base-900 text-2xl font-medium">
              {category.name
                .split("-")
                .map(
                  (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(" ")}
            </span>
          </div>
          <Divider className="mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content
              .find((obj: any) => obj.slug === "hooks")
              .items.filter((item: any) => item.category === category.name)
              .map((item: any, index: any) => (
                <Link
                  href={`/docs/hooks/${item.slug}`}
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

export default Hooks;
