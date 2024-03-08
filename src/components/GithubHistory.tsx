import {
  GitCommit,
  GitMerge,
  GitBranch,
  GitFork,
  GitPullRequest,
} from "@phosphor-icons/react";

const GithubHistory = () => {
  return (
    <div className="mt-8 blend">
      <ul className="flex flex-col text-left space-y-1.5">
        <li className="relative flex gap-x-4 pb-7 overflow-hidden">
          <div className="mt-0.5 relative h-full">
            <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitCommit className="w-5 h-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-base-600 bg-white border border-base-200 shadow-sm dark:text-base-400 dark:bg-slate-900 dark:border-base-700">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Martin
            </span>{" "}
            committed yesterday
          </p>
        </li>

        <li className="relative flex gap-x-4 pb-7 overflow-hidden">
          <div className="mt-0.5 relative h-full">
            <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitFork className="w-5 h-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-base-600 bg-white border border-base-200 shadow-sm dark:text-base-400 dark:bg-slate-900 dark:border-base-700">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Brian
            </span>{" "}
            forked the repository
          </p>
        </li>

        <li className="relative flex gap-x-4 pb-7 overflow-hidden">
          <div className="mt-0.5 relative h-full">
            <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitPullRequest className="w-5 h-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-base-600 bg-white border border-base-200 shadow-sm dark:text-base-400 dark:bg-slate-900 dark:border-base-700">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Christian
            </span>{" "}
            created a pull request
          </p>
        </li>
        <li className="relative flex gap-x-4 pb-7 overflow-hidden">
          <div className="mt-0.5 relative h-full">
            <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitMerge className="w-5 h-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-base-600 bg-white border border-base-200 shadow-sm dark:text-base-400 dark:bg-slate-900 dark:border-base-700">
            <span className="font-semibold text-base-800 dark:text-base-200">
              Martin
            </span>{" "}
            approved a pull request
          </p>
        </li>
        <li className="relative flex gap-x-4 pb-7 overflow-hidden">
          <div className="mt-0.5 relative h-full">
            <div className="absolute top-7 bottom-0 left-2.5 w-px h-96 -ml-px border-r border-dotted border-base-300 dark:border-base-600"></div>
            <GitBranch className="w-5 h-5 text-base-800 dark:text-base-200" />
          </div>
          <p className="py-1.5 px-2.5 rounded-full text-xs font-medium text-base-600 bg-white border border-base-200 shadow-sm dark:text-base-400 dark:bg-slate-900 dark:border-base-700">
            <span className="font-semibold text-base-800 dark:text-base-200">
              John
            </span>{" "}
            created a new branch
          </p>
        </li>
      </ul>
    </div>
  );
};

export default GithubHistory;
