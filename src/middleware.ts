import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// Content
import content from "./content";
// Utils
import findBySlugs from "./findBySlugs";

const getUrl = (navigation: any, slugs: string[]) => {
  let url = "";

  const found = findBySlugs(navigation, slugs, (item) => {
    url += `/${item.slug}`;
  });

  const processDeeper = (items: any[]) => {
    url += `/${items[0].slug}`;

    if (items[0].items && items[0].items.length > 0) {
      processDeeper(items[0].items);
    }
  };

  if (found.items && found.items.length > 0) {
    processDeeper(found.items);
  }

  return url;
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/docs") {
    return NextResponse.redirect(
      new URL(`/docs/${content[0].slug}`, request.url)
    );
  }

  const splitUrl = request.nextUrl.pathname
    .replace("/docs", "")
    .split("/")
    .filter((item) => item.trim() !== "");

  if (splitUrl.length > 0 && splitUrl.length < 2) {
    const url = getUrl(content, splitUrl);

    console.log(url);

    return NextResponse.redirect(new URL(`/docs${url}`, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/docs/:path*",
};
