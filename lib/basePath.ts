/**
 * GitHub Pages serves this site under /agri-challenge2.
 * next/image and Next.js <Link> use basePath from next.config.ts automatically.
 * Plain <img> tags and metadata URLs must be prefixed manually using withBasePath().
 */
export const BASE_PATH = "/agri-challenge2";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}