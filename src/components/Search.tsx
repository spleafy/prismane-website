import { DocSearch } from "@docsearch/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { Key } from "@prismane/core";

import "@docsearch/css";

const Search = () => {
  return (
    <>
      <div
        className="whitespace-nowrap dark:text-base-300 text-base-700 dark:hover:text-white hover:text-base-900 group-hover:text-base-300 cursor-pointer text-sm gap-2 flex items-center justify-center rounded w-full md:w-fit py-1.5 sm:py-2 dark:bg-base-500/10 dark:hover:bg-base-500/20 bg-base-700/10 hover:bg-base-700/[.15] transition-all duration-150 px-3"
        onClick={() => {
          document.getElementsByClassName("DocSearch-Button")[0].dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: false,
            })
          );
        }}
      >
        <div className="min-w-[20px] min-h-[20px] flex justify-center items-center">
          <MagnifyingGlass size={20} />
        </div>
        Quick Search...
        <div className="hidden xl:flex items-center gap-2 text-xs ml-5">
          Ctrl K
        </div>
      </div>
      <div className="hidden">
        <DocSearch
          appId={process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string}
          apiKey={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string}
          indexName="prismane"
          placeholder="Browse Prismane's Docs"
          getMissingResultsUrl={({ query }) => {
            return `https://github.com/prismaneui/prismane/issues/new?title=${query}`;
          }}
          resultsFooterComponent={({ state }: any) => {
            return <span>{state.context.nbHits} results found</span>;
          }}
        />
      </div>
    </>
  );
};

export default Search;
