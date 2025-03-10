/**
 * Recursively finds an item in a nested array structure based on a path of slugs
 *
 * @param array The array to search in
 * @param slugs Array of slugs representing the path to the item
 * @param cb Optional callback that receives the found item and its parent array
 * @returns The found item or an empty string if not found
 */
const findBySlugs = (
  array: any[],
  slugs: string[],
  cb?: (item: any, array: any[]) => void
): any => {
  if (!slugs.length) return '';

  const cleanSlugs = slugs.map((slug) => slug.replace(/[#?].*$/, ''));

  const currentSlug = cleanSlugs[0];

  const found = array.find((item) => item.slug === currentSlug);

  if (!found) return '';

  if (cb) {
    cb(found, array);
  }

  if (found.items?.length > 0 && cleanSlugs.length > 1) {
    return findBySlugs(found.items, cleanSlugs.slice(1), cb);
  }

  return found;
};

export default findBySlugs;
