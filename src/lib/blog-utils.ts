import type { TipTapNode } from "@/lib/servible-api";

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getPlainText(nodes?: TipTapNode[]): string {
  if (!nodes) return "";
  return nodes.map((n) => n.text || getPlainText(n.content)).join("");
}

export function extractHeadings(content: {
  content?: TipTapNode[];
}): Heading[] {
  if (!content.content) return [];
  return content.content
    .filter(
      (node) =>
        node.type === "heading" && node.attrs?.level && (node.attrs.level as number) <= 3
    )
    .map((node) => {
      const text = getPlainText(node.content);
      return { level: node.attrs!.level as number, text, id: slugify(text) };
    });
}

export function calculateReadTime(content: {
  content?: TipTapNode[];
}): number {
  if (!content.content) return 1;
  const text = getPlainText(content.content);
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
