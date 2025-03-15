import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
// Icons
import icons from './icons';
// Types
import { DocsFrontmatter, DocDirectory, DocFile, DocNode } from '@/types/docs';

export async function buildDocsTree(
  rootDir: string = path.join(process.cwd(), 'content/docs')
): Promise<DocDirectory> {
  const rootName = path.basename(rootDir);

  const root: DocDirectory = {
    type: 'directory',
    name: rootName,
    path: rootDir,
    slug: '',
    children: []
  };
  await processDirectory(rootDir, root, '');

  return root;
}

async function processDirectory(
  dirPath: string,
  dirNode: DocDirectory,
  relativePath: string
): Promise<void> {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);

    const entryRelativePath = relativePath
      ? `${relativePath}/${entry.name}`
      : entry.name;

    if (entry.isDirectory()) {
      const icon = icons[entryRelativePath];

      const subDir: DocDirectory = {
        type: 'directory',
        name: entry.name,
        path: entryPath,
        slug: entryRelativePath,
        ...(icon && { icon: icon }),
        children: []
      };

      await processDirectory(entryPath, subDir, entryRelativePath);

      dirNode.children.push(subDir);
    } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
      try {
        const fileContent = fs.readFileSync(entryPath, 'utf8');

        const { frontmatter } = await compileMDX<DocsFrontmatter>({
          source: fileContent,
          options: {
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeMdxCodeProps as any]
            }
          }
        });

        const slug = entryRelativePath.replace(/\.mdx$/, '');

        const fileNode: DocFile = {
          type: 'file',
          name: entry.name.replace(/\.mdx$/, ''),
          path: entryPath,
          slug,
          frontmatter: frontmatter || {}
        };

        dirNode.children.push(fileNode);
      } catch (error) {
        console.error(`Error processing MDX file ${entryPath}:`, error);
      }
    }
  }

  dirNode.children.sort((a, b) => {
    const orderA =
      a.type === 'file' && typeof a.frontmatter.order === 'number'
        ? a.frontmatter.order
        : Infinity;
    const orderB =
      b.type === 'file' && typeof b.frontmatter.order === 'number'
        ? b.frontmatter.order
        : Infinity;

    return orderA - orderB || a.name.localeCompare(b.name);
  });
}

export function flattenDocsTree(tree: DocDirectory): DocNode[] {
  const result: DocNode[] = [];

  function collectNodes(node: DocNode) {
    result.push(node);

    if (node.type === 'directory') {
      node.children.forEach(collectNodes);
    }
  }
  tree.children.forEach(collectNodes);

  return result;
}

export function findDocBySlug(
  tree: DocDirectory,
  slug: string
): DocNode | undefined {
  return flattenDocsTree(tree).find((doc) => doc.slug === slug);
}

export function getAllDocFiles(tree: DocDirectory): DocFile[] {
  return flattenDocsTree(tree).filter(
    (node) => node.type === 'file'
  ) as DocFile[];
}
