import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useNavigation = (array: any[]) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const { asPath } = useRouter();

  useEffect(() => {
    const process = (items: any[], parentRoute?: string): any => {
      items.map((item: any) => {
        item.route = parentRoute
          ? `${parentRoute}/${item.slug}`
          : `/${item.slug}`;

        if (item.items && item.items.length > 0) {
          setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [item.route]: asPath.includes(item.route),
          }));

          process(item.items, item.route);
        }

        return item;
      });
    };

    process(array);
  }, [asPath]);

  const toggle = (route: string) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [route]: !prevExpanded[route],
    }));
  };

  return { navigation: array, expanded, toggle };
};

export default useNavigation;
