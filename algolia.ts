import dotenv from "dotenv";
import algoliasearch from "algoliasearch/lite";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import content from "./src/contentMap";

try {
  dotenv.config();

  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  }

  if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
  }
} catch (error) {
  console.error(error);
  process.exit(1);
}

const CONTENT_PATHS = [
  path.join(process.cwd(), "src/content/getting-started/"),
  path.join(process.cwd(), "src/content/frameworks/"),
  path.join(process.cwd(), "src/content/styling/"),
  path.join(process.cwd(), "src/content/theming/"),
  path.join(process.cwd(), "src/content/components/"),
  path.join(process.cwd(), "src/content/components-api/"),
  path.join(process.cwd(), "src/content/hooks/"),
  path.join(process.cwd(), "src/content/validators/"),
];

const getAllPages = async () => {
  const all: any = [];

  CONTENT_PATHS.forEach((contentPath) => {
    const contentFilePaths = fs
      .readdirSync(contentPath)
      .filter((filePath) => /\.mdx?$/.test(filePath));

    const pages = contentFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(contentPath, filePath));
      const { content, data } = matter(source);

      return {
        content,
        data,
        filePath,
      };
    });

    all.push(...pages);
  });

  return all;
};

const getItemBySlug = (targetSlug: any): any => {
  for (const section of content) {
    const item = section.items.find((item: any) => item.slug === targetSlug);
    if (item) {
      return { item, section };
    }
  }
  return { item: "", section: "" };
};

const transformPostsToSearchObjects = (pages: any) => {
  const transformed = pages.map((page: any) => {
    const { item, section } = getItemBySlug(page.filePath.split(".mdx")[0]);

    return {
      objectID: item.title,
      title: item.title,
      description: item.description,
      slug: `${section.slug}/${item.slug}`,
    };
  });

  return transformed;
};

(async function () {
  dotenv.config();

  try {
    const articles = await getAllPages();
    const transformed = transformPostsToSearchObjects(articles);

    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY as string
    );

    const index: any = client.initIndex("prismane_website");

    const algoliaResponse = await index.saveObjects(transformed);

    console.log(
      `Successfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
        "\n"
      )}`
    );
  } catch (err) {
    console.error(err);
  }
})();
