const findBySlugs = (
  array: any[],
  slugs: string[],
  cb?: (item?: any, array?: any) => void
): any => {
  if (!slugs.length) {
    return "";
  }

  slugs = slugs.map((slug) => slug.replace(/[#?].*$/, ""));

  const currentSlug = slugs[0];

  const found = array.find((item: any) => item.slug === currentSlug);

  if (cb) {
    cb(found, array);
  }

  if (found.items && found.items.length > 0 && slugs.slice(1).length > 0) {
    return findBySlugs(found.items, slugs.slice(1), cb);
  }

  return found;
};

export default findBySlugs;
