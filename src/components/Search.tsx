import { DocSearch } from '@docsearch/react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Key } from '@prismane/core';
// Components
import HeaderButton from './header/HeaderButton';

import '@docsearch/css';

const Search = () => {
  return (
    <>
      <HeaderButton
        tooltip="Search • Ctrl + K"
        onClick={() => {
          document.getElementsByClassName('DocSearch-Button')[0].dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: false
            })
          );
        }}
      >
        <MagnifyingGlass size={20} weight="bold" />
      </HeaderButton>
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
