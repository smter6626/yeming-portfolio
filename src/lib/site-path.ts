// Next Link prefixes routes automatically; plain anchors and assets need this helper.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function sitePath(path: string): string {
  return `${basePath}${path}`;
}
