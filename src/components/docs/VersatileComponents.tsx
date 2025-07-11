import {Rows} from '@phosphor-icons/react';

import Link from 'next/link';
// Components
import Separator from '../Separator';
import findBySlugs from "@/findBySlugs";
import content from "@/content";
// Content


const VersatileComponents = () => {


    const versatileComponents: Record<string, string[]> = {
        'data-display': ['avatar', 'badge', 'card', 'gradient', 'paper'],
        'miscellaneous': ['animation', 'transition'],
        'layout': ['box', 'center', 'circle', 'flex', 'square']
    };

    const sections = findBySlugs(content, ["components"]).items.filter(
        (x: any) => x.slug !== 'getting-started'
    );

    const versatileSections = sections.filter((section: any) => Object.keys(versatileComponents).includes(section.slug)).reduce((acc: any, section: any) => {
        const items = section.items.filter((item: any) => versatileComponents[section.slug]?.includes(item.slug));
        items.forEach((component: any) => {
            acc.push({
                sectionSlug: section.slug,
                component
            });
        })

        return acc;
    }, []);

    return (
        <div className="mt-10 flex flex-col gap-10">

            <div className="flex flex-col gap-3">
                <Link
                    href={`/docs/components/getting-started`}
                    style={{scrollMarginTop: '120px'}}
                    className="flex items-center gap-4"
                >
                    <div
                        className="gradient flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white">
                        <Rows/>
                    </div>
                    <span
                        className="text-2xl font-medium text-base-900 dark:text-white">
                        Versatile Components
                    </span>
                </Link>
                <Separator className="mb-4"/>
                <div
                    className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {versatileSections &&
                        versatileSections.map((element: any, index: any) => (
                            <Link
                                href={`/docs/components/${element.sectionSlug}/${element.component.slug}`}
                                className="flex cursor-pointer flex-col gap-2 rounded-md bg-base-500/10 p-3 transition-colors hover:bg-base-500/20 dark:bg-base-700/10 dark:hover:bg-base-700/20"
                                key={index}
                            >
                                <span
                                    className="text-lg text-base-900 dark:text-white">
                                  {element.component.title}
                                </span>
                                <span
                                    className="text-base-500">{element.component.description}</span>
                            </Link>
                        ))}
                </div>
            </div>

        </div>
    );
};

export default VersatileComponents;
