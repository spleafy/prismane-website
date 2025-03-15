export interface DocsFrontmatter {
  title: string;
  description?: string;
  versatile?: boolean;
  [key: string]: unknown;
}

export interface DocFile {
  type: 'file';
  name: string;
  slug: string;
  path: string;
  frontmatter: DocsFrontmatter;
}

export interface DocDirectory {
  type: 'directory';
  name: string;
  path: string;
  slug: string;
  icon?: string;
  children: (DocFile | DocDirectory)[];
}

export type DocNode = DocFile | DocDirectory;
