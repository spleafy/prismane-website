import algoliasearch from "algoliasearch/lite";
import Link from "next/link";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  useInstantSearch,
} from "react-instantsearch-hooks-web";
import { Backdrop, fr } from "@prismane/core";
import { useKeyboardShortcut } from "@prismane/core/hooks";

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
);

const Hit = ({ hit }: any) => {
  return (
    <Link href={`/docs/${hit.slug}`} className="flex flex-col gap-2 w-full">
      <h1>
        <Highlight
          attribute="title"
          hit={hit}
          classNames={{
            highlighted:
              "dark:!bg-primary-700/20 !bg-primary-500/20 !text-primary-500",
          }}
        />
      </h1>
      <span>
        <Highlight
          attribute="description"
          hit={hit}
          classNames={{
            highlighted:
              "dark:!bg-primary-700/20 !bg-primary-500/20 !text-primary-500",
          }}
        />
      </span>
    </Link>
  );
};

function NoResultsBoundary({ children, fallback }: any) {
  const { results } = useInstantSearch();
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    );
  }

  return children;
}

function NoResults() {
  const { indexUiState } = useInstantSearch();

  return (
    <div>
      <p>
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  );
}

function EmptyQueryBoundary({ children, fallback }: any) {
  const { indexUiState } = useInstantSearch();

  if (!indexUiState.query) {
    return fallback;
  }

  return children;
}

const Search = ({ setOpen, open }: any) => {
  useKeyboardShortcut(["escape"], setOpen, open);

  return (
    <Backdrop
      direction="column"
      justify="start"
      py={fr(48)}
      gap={fr(4)}
      onClick={() => setOpen(false)}
    >
      <InstantSearch searchClient={client} indexName="prismane_website">
        <SearchBox
          classNames={{
            root: "w-full md:w-1/2 max-w-2xl px-4 sm:px-8",
            form: "!bg-transparent !w-full !text-2xl !h-auto before:hidden",
            input:
              "dark:bg-base-900 !rounded-md dark:border-base-900 focus:!border-primary-500 !shadow-none dark:!text-white !text-base-900 dark:placeholder:!text-base-500 placeholder:!text-base-700 !caret-primary-500 !py-2 !pl-4",
            resetIcon: "!fill-primary-500",
            reset:
              "dark:active:bg-base-700/20 active:bg-base-500/20 dark:focus:bg-base-700/30 focus:bg-base-500/30 !w-7 !h-7 dark:bg-base-700/20 bg-base-500/20",
          }}
          placeholder="Search"
          onClick={(e: any) => {
            e.stopPropagation();
          }}
        />
        <NoResultsBoundary fallback={<NoResults />}>
          <EmptyQueryBoundary fallback={null}>
            <Hits
              onClick={(e: any) => {
                e.stopPropagation();
                setOpen(false);
              }}
              hitComponent={Hit}
              classNames={{
                item: "dark:bg-base-900 dark:hover:bg-base-800 transition-colors",
                root: "!max-h-96 !overflow-y-auto !rounded-md w-full md:w-1/2 max-w-2xl px-4 sm:px-8",
              }}
            />
          </EmptyQueryBoundary>
        </NoResultsBoundary>
      </InstantSearch>
    </Backdrop>
  );
};

export default Search;
