export interface DocsFrontmatter {
  title: string;
  description?: string;
  versatile?: boolean;
  [key: string]: unknown;
}
