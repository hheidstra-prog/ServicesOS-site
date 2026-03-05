import Image from "next/image";
import type { TipTapNode } from "@/lib/servible-api";
import { slugify, getPlainText } from "@/lib/blog-utils";

function renderMark(
  child: React.ReactNode,
  mark: { type: string; attrs?: Record<string, unknown> },
  i: number
): React.ReactNode {
  switch (mark.type) {
    case "bold":
      return (
        <strong key={i} className="font-semibold">
          {child}
        </strong>
      );
    case "italic":
      return <em key={i}>{child}</em>;
    case "underline":
      return <u key={i}>{child}</u>;
    case "strike":
      return <s key={i}>{child}</s>;
    case "code":
      return (
        <code
          key={i}
          className="rounded bg-[var(--muted)] px-1.5 py-0.5 text-sm font-mono"
        >
          {child}
        </code>
      );
    case "link":
      return (
        <a
          key={i}
          href={mark.attrs?.href as string}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-600 underline hover:text-accent-700"
        >
          {child}
        </a>
      );
    default:
      return child;
  }
}

function renderTextNode(node: TipTapNode, i: number): React.ReactNode {
  let content: React.ReactNode = node.text || "";
  if (node.marks) {
    for (const mark of node.marks) {
      content = renderMark(content, mark, i);
    }
  }
  return <span key={i}>{content}</span>;
}

function renderInlineContent(nodes?: TipTapNode[]): React.ReactNode {
  if (!nodes) return null;
  return nodes.map((node, i) => {
    if (node.type === "text") return renderTextNode(node, i);
    if (node.type === "hardBreak") return <br key={i} />;
    return null;
  });
}

function renderNode(node: TipTapNode, i: number): React.ReactNode {
  switch (node.type) {
    case "paragraph":
      return (
        <p
          key={i}
          className="mb-4 leading-relaxed text-[var(--muted-foreground)]"
        >
          {renderInlineContent(node.content)}
        </p>
      );

    case "heading": {
      const level = (node.attrs?.level as number) || 2;
      const text = getPlainText(node.content);
      const id = slugify(text);
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      const styles: Record<number, string> = {
        1: "text-3xl font-bold mt-8 mb-4",
        2: "text-2xl font-bold mt-8 mb-4",
        3: "text-xl font-semibold mt-6 mb-3",
        4: "text-lg font-semibold mt-4 mb-2",
        5: "text-base font-semibold mt-4 mb-2",
        6: "text-sm font-semibold mt-4 mb-2",
      };
      return (
        <Tag
          key={i}
          id={id}
          className={`${styles[level] || styles[2]} text-[var(--foreground)]`}
        >
          {renderInlineContent(node.content)}
        </Tag>
      );
    }

    case "bulletList":
      return (
        <ul
          key={i}
          className="mb-4 ml-6 list-disc space-y-2 text-[var(--muted-foreground)]"
        >
          {node.content?.map((item, j) => (
            <li key={j}>{item.content?.map((c, k) => renderNode(c, k))}</li>
          ))}
        </ul>
      );

    case "orderedList":
      return (
        <ol
          key={i}
          className="mb-4 ml-6 list-decimal space-y-2 text-[var(--muted-foreground)]"
        >
          {node.content?.map((item, j) => (
            <li key={j}>{item.content?.map((c, k) => renderNode(c, k))}</li>
          ))}
        </ol>
      );

    case "blockquote":
      return (
        <blockquote
          key={i}
          className="mb-4 border-l-4 border-accent-500 pl-4 italic text-[var(--muted-foreground)]"
        >
          {node.content?.map((c, j) => renderNode(c, j))}
        </blockquote>
      );

    case "codeBlock":
      return (
        <pre
          key={i}
          className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm"
        >
          <code className="text-zinc-100">{getPlainText(node.content)}</code>
        </pre>
      );

    case "image": {
      const src = node.attrs?.src as string;
      const alt = (node.attrs?.alt as string) || "";
      const title = node.attrs?.title as string | undefined;
      return (
        <figure key={i} className="mb-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {title && (
            <figcaption className="mt-2 text-center text-sm text-[var(--muted-foreground)]">
              {title}
            </figcaption>
          )}
        </figure>
      );
    }

    case "horizontalRule":
      return <hr key={i} className="my-8 border-[var(--border)]" />;

    default:
      return null;
  }
}

interface BlogContentProps {
  content: { type?: string; content?: TipTapNode[]; html?: string };
}

export function BlogContent({ content }: BlogContentProps) {
  if ("html" in content && typeof content.html === "string") {
    return (
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content.html }}
      />
    );
  }

  if (!content.content || !Array.isArray(content.content)) {
    return null;
  }

  return (
    <div className="max-w-none">
      {content.content.map((node, i) => renderNode(node, i))}
    </div>
  );
}
