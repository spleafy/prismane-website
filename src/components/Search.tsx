import { DocSearch } from "@docsearch/react";

import "@docsearch/css";

const Search = () => {
  return (
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
  );
};

export default Search;
