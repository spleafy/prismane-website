import {
  GitCommit,
  GitMerge,
  GitBranch,
  GitFork,
  GitPullRequest
} from '@phosphor-icons/react';

const GithubHistory = () => {
  return (
    <div className="blend mt-8">
      <ul className="flex flex-col space-y-1.5 text-left">
        <li className="relative flex gap-x-4 overflow-hidden pb-7">
          <div className="relative mt-0.5 h-full">
            <div className="absolute bottom-0 left-2.5 top-7 -ml-px h-96 w-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitCommit className="h-5 w-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="rounded-full border border-base-200 bg-white px-2.5 py-1.5 text-xs font-medium text-base-600 shadow-sm dark:border-base-700 dark:bg-slate-900 dark:text-base-400">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Martin
            </span>{' '}
            committed yesterday
          </p>
        </li>

        <li className="relative flex gap-x-4 overflow-hidden pb-7">
          <div className="relative mt-0.5 h-full">
            <div className="absolute bottom-0 left-2.5 top-7 -ml-px h-96 w-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitFork className="h-5 w-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="rounded-full border border-base-200 bg-white px-2.5 py-1.5 text-xs font-medium text-base-600 shadow-sm dark:border-base-700 dark:bg-slate-900 dark:text-base-400">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Brian
            </span>{' '}
            forked the repository
          </p>
        </li>

        <li className="relative flex gap-x-4 overflow-hidden pb-7">
          <div className="relative mt-0.5 h-full">
            <div className="absolute bottom-0 left-2.5 top-7 -ml-px h-96 w-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitPullRequest className="h-5 w-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="rounded-full border border-base-200 bg-white px-2.5 py-1.5 text-xs font-medium text-base-600 shadow-sm dark:border-base-700 dark:bg-slate-900 dark:text-base-400">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Christian
            </span>{' '}
            created a pull request
          </p>
        </li>
        <li className="relative flex gap-x-4 overflow-hidden pb-7">
          <div className="relative mt-0.5 h-full">
            <div className="absolute bottom-0 left-2.5 top-7 -ml-px h-96 w-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitMerge className="h-5 w-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="rounded-full border border-base-200 bg-white px-2.5 py-1.5 text-xs font-medium text-base-600 shadow-sm dark:border-base-700 dark:bg-slate-900 dark:text-base-400">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Martin
            </span>{' '}
            approved a pull request
          </p>
        </li>
        <li className="relative flex gap-x-4 overflow-hidden pb-7">
          <div className="relative mt-0.5 h-full">
            <div className="absolute bottom-0 left-2.5 top-7 -ml-px h-96 w-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitBranch className="h-5 w-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="rounded-full border border-base-200 bg-white px-2.5 py-1.5 text-xs font-medium text-base-600 shadow-sm dark:border-base-700 dark:bg-slate-900 dark:text-base-400">
            <span className="font-semibold text-base-800 dark:text-base-200">
              John
            </span>{' '}
            created a new branch
          </p>
        </li>
      </ul>
    </div>
  );
};

export default GithubHistory;
