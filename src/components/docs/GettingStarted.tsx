import Link from 'next/link';
// Components
import Separator from '../Separator';
// Content
import content from '../../content';
import findBySlugs from '@/findBySlugs';

type GettingStartedProps = {
  category: 'components' | 'hooks' | 'validators';
};

const GettingStarted = ({ category: categoryProp }: GettingStartedProps) => {
  const categories = findBySlugs(content, [categoryProp]).items.filter(
    (x: any) => x.slug !== 'getting-started'
  );

  return (
    <div className="mt-10 flex flex-col gap-10">
      {categories.map((category: any, index: number) => (
        <div className="flex flex-col gap-3" key={index}>
          <Link
            href={`/docs/${categoryProp}/getting-started#${category.slug}`}
            style={{ scrollMarginTop: '120px' }}
            className="flex items-center gap-4"
            id={category.slug}
          >
            <div className="gradient flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white">
              {category.icon}
            </div>
            <span className="text-2xl font-medium text-base-900 dark:text-white">
              {category.title
                .split('-')
                .map(
                  (word: any) => word.charAt(0).toUpperCase() + word.slice(1)
                )
                .join(' ')}
            </span>
          </Link>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items &&
              category.items.map((item: any, index: any) => (
                <Link
                  href={`/docs/${categoryProp}/${category.slug}/${item.slug}`}
                  className="flex cursor-pointer flex-col gap-2 rounded-md bg-base-500/10 p-3 transition-colors hover:bg-base-500/20 dark:bg-base-700/10 dark:hover:bg-base-700/20"
                  key={index}
                >
                  <span className="text-lg text-base-900 dark:text-white">
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
