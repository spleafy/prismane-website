import { HTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// Components
import Separator from "@/components/Separator";

const TableOfContents = ({ children }: HTMLAttributes<HTMLElement>) => {
  const router = useRouter();

  const { asPath } = router;

  const [tableOfContents, setTableOfContents] = useState([]);

  const [visible, setVisible] = useState("");

  useEffect(() => {
    const headings = document.querySelectorAll(".docs-anchor");
    const toc: any = [];

    let currentHeading: any = null;

    headings.forEach((element) => {
      if (element.children[0].tagName === "H2") {
        currentHeading = {
          title: element.children[0].textContent,
          id: element.id,
          subheadings: [],
        };
        toc.push(currentHeading);
      } else if (element.children[0].tagName === "H3" && currentHeading) {
        currentHeading.subheadings.push({
          title: element.children[0].textContent,
          id: element.id,
        });
      }
    });

    setTableOfContents(toc);
  }, [asPath]);

  useEffect(() => {
    const elementIds: string[] = tableOfContents.flatMap((item: any) => [
      item.id,
      ...(item.subheadings
        ? item.subheadings.map((subheading: any) => subheading.id)
        : []),
    ]);

    const observer = new IntersectionObserver((entries) => {
      const active = entries.reduceRight(
        (acc: any, item: any) =>
          item.isIntersecting === true && !acc ? item : acc,
        null
      );

      setVisible((pv: any) =>
        active ? active.target.children[0].textContent : pv
      );
    });

    elementIds.forEach((id: any) => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        observer.observe(targetElement);
      }
    });
  }, [tableOfContents]);

  return (
    <>
      {tableOfContents.length > 0 && (
        <div className="hidden lg:flex flex-col self-start w-72 min-w-[240px] p-5 !px-3 xl:!px-0 sticky top-[88px] left-0 max-h-[84vh] gap-2 overflow-y-auto">
          <span className="dark:text-white text-base-900 font-semibold text-sm">
            Table Of Contents
          </span>
          <ul>
            {tableOfContents.map((section: any, index) => (
              <li key={index} className="mt-1 text-sm/6">
                <Link
                  className={`line-clamp-1 ${
                    visible === section.title
                      ? "text-primary-500"
                      : "dark:hover:text-base-100"
                  }
                  `}
                  href={`${router.asPath.replace(/[#?].*$/, "")}#${section.id}`}
                >
                  {section.title}
                </Link>
                {section.subheadings.length > 0 && (
                  <ul className="ml-3">
                    {section.subheadings.map(
                      (subheading: any, subIndex: any) => (
                        <Link
                          key={subIndex}
                          className={`line-clamp-1 ${
                            visible === subheading.title
                              ? "text-primary-500"
                              : "dark:hover:text-base-100"
                          }`}
                          href={`${router.asPath.replace(/[#?].*$/, "")}#${
                            subheading.id
                          }`}
                        >
                          <li className="mt-1 line-clamp-1 text-sm/6">
                            {subheading.title}
                          </li>
                        </Link>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {children}
        </div>
      )}
    </>
  );
};

export default TableOfContents;
