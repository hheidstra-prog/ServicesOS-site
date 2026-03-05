# Blog Integration — servible.ai Website

> Instructions for integrating Servible blog posts into the servible.ai Next.js marketing site.
> Blog content is managed in Servible admin and fetched via REST API.
> Pages should be statically generated (SSG) with ISR for fast loads + fresh content.

## Setup

### 1. Environment Variable

Add to `.env.local`:
```
SERVIBLE_API_KEY=sk_live_... # your API key from Servible Settings → API Keys
SERVIBLE_API_URL=https://servible.app # or your Vercel deployment URL
```

### 2. API Client Helper

Create a reusable fetch helper:

```typescript
// lib/servible-api.ts

const API_URL = process.env.SERVIBLE_API_URL!;
const API_KEY = process.env.SERVIBLE_API_KEY!;

async function servibleFetch(path: string) {
  const res = await fetch(`${API_URL}/api/v1${path}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
  });
  if (!res.ok) throw new Error(`Servible API error: ${res.status}`);
  return res.json();
}

// ─── Blog Posts (list) ───

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  createdAt: string;
  author: { name: string; imageUrl: string | null } | null;
  categories: { id: string; name: string; slug: string }[];
}

interface BlogListResponse {
  success: boolean;
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}

export async function getBlogPosts(page = 1, limit = 12, category?: string): Promise<BlogListResponse> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (category) params.set("category", category);
  return servibleFetch(`/blog/posts?${params}`);
}

// ─── Single Blog Post ───

interface BlogPostDetail extends BlogPost {
  content: TipTapDoc; // TipTap JSON document
  metaTitle: string | null;
  metaDescription: string | null;
  updatedAt: string;
  tags: { id: string; name: string; slug: string }[];
}

interface BlogPostDetailResponse {
  success: boolean;
  post: BlogPostDetail;
}

export async function getBlogPost(slug: string): Promise<BlogPostDetailResponse> {
  return servibleFetch(`/blog/posts/${slug}`);
}

// ─── Categories ───

interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

export async function getBlogCategories(): Promise<{ success: boolean; categories: BlogCategory[] }> {
  return servibleFetch("/blog/categories");
}

// ─── TipTap Types ───

export interface TipTapDoc {
  type: "doc";
  content: TipTapNode[];
}

export interface TipTapNode {
  type: string;
  content?: TipTapNode[];
  text?: string;
  attrs?: Record<string, unknown>;
  marks?: { type: string; attrs?: Record<string, unknown> }[];
}
```

---

## Pages

### 3. Blog Listing Page — `/blog/page.tsx`

```tsx
// app/blog/page.tsx
import { getBlogPosts, getBlogCategories } from "@/lib/servible-api";
import { BlogList } from "@/components/blog/blog-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Servible",
  description: "Tips, guides, and insights for service professionals.",
};

// ISR: regenerate every 5 minutes
export const revalidate = 300;

interface BlogPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page, category } = await searchParams;
  const pageNum = Number(page) || 1;

  const [postsData, categoriesData] = await Promise.all([
    getBlogPosts(pageNum, 12, category),
    getBlogCategories(),
  ]);

  return (
    <BlogList
      posts={postsData.posts}
      categories={categoriesData.categories}
      currentCategory={category || null}
      page={postsData.page}
      totalPages={postsData.totalPages}
    />
  );
}
```

### 4. Blog Detail Page — `/blog/[slug]/page.tsx`

```tsx
// app/blog/[slug]/page.tsx
import { getBlogPost, getBlogPosts } from "@/lib/servible-api";
import { BlogArticle } from "@/components/blog/blog-article";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 300;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO metadata from blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { post } = await getBlogPost(slug);
    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      openGraph: {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        ...(post.featuredImage && { images: [{ url: post.featuredImage }] }),
      },
    };
  } catch {
    return { title: "Blog — Servible" };
  }
}

// Pre-generate pages for all published posts
export async function generateStaticParams() {
  const { posts } = await getBlogPosts(1, 100);
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const { post } = await getBlogPost(slug);
    return <BlogArticle post={post} />;
  } catch {
    notFound();
  }
}
```

---

## Components

### 5. TipTap Content Renderer

This is the key component — renders TipTap JSON to JSX. Adapt the class names to your site's design system.

```tsx
// components/blog/blog-content.tsx
import Image from "next/image";
import type { TipTapNode } from "@/lib/servible-api";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getPlainText(nodes?: TipTapNode[]): string {
  if (!nodes) return "";
  return nodes.map((n) => n.text || getPlainText(n.content)).join("");
}

function renderMark(child: React.ReactNode, mark: { type: string; attrs?: Record<string, unknown> }, i: number): React.ReactNode {
  switch (mark.type) {
    case "bold":
      return <strong key={i} className="font-semibold">{child}</strong>;
    case "italic":
      return <em key={i}>{child}</em>;
    case "underline":
      return <u key={i}>{child}</u>;
    case "strike":
      return <s key={i}>{child}</s>;
    case "code":
      return <code key={i} className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-mono dark:bg-zinc-800">{child}</code>;
    case "link":
      return (
        <a key={i} href={mark.attrs?.href as string} target="_blank" rel="noopener noreferrer" className="text-teal-600 underline hover:text-teal-700 dark:text-teal-400">
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
        <p key={i} className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-300">
          {renderInlineContent(node.content)}
        </p>
      );

    case "heading": {
      const level = (node.attrs?.level as number) || 2;
      const text = getPlainText(node.content);
      const id = slugify(text);
      const Tag = `h${level}` as keyof JSX.IntrinsicElements;
      const styles: Record<number, string> = {
        1: "text-3xl font-bold mt-8 mb-4",
        2: "text-2xl font-bold mt-8 mb-4",
        3: "text-xl font-semibold mt-6 mb-3",
        4: "text-lg font-semibold mt-4 mb-2",
        5: "text-base font-semibold mt-4 mb-2",
        6: "text-sm font-semibold mt-4 mb-2",
      };
      return (
        <Tag key={i} id={id} className={`${styles[level] || styles[2]} text-zinc-900 dark:text-white`}>
          {renderInlineContent(node.content)}
        </Tag>
      );
    }

    case "bulletList":
      return (
        <ul key={i} className="mb-4 ml-6 list-disc space-y-2 text-zinc-600 dark:text-zinc-300">
          {node.content?.map((item, j) => (
            <li key={j}>{item.content?.map((c, k) => renderNode(c, k))}</li>
          ))}
        </ul>
      );

    case "orderedList":
      return (
        <ol key={i} className="mb-4 ml-6 list-decimal space-y-2 text-zinc-600 dark:text-zinc-300">
          {node.content?.map((item, j) => (
            <li key={j}>{item.content?.map((c, k) => renderNode(c, k))}</li>
          ))}
        </ol>
      );

    case "blockquote":
      return (
        <blockquote key={i} className="mb-4 border-l-4 border-teal-500 pl-4 italic text-zinc-500 dark:text-zinc-400">
          {node.content?.map((c, j) => renderNode(c, j))}
        </blockquote>
      );

    case "codeBlock":
      return (
        <pre key={i} className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm">
          <code className="text-zinc-100">
            {getPlainText(node.content)}
          </code>
        </pre>
      );

    case "image": {
      const src = node.attrs?.src as string;
      const alt = (node.attrs?.alt as string) || "";
      const title = node.attrs?.title as string | undefined;
      return (
        <figure key={i} className="mb-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
          </div>
          {title && <figcaption className="mt-2 text-center text-sm text-zinc-500">{title}</figcaption>}
        </figure>
      );
    }

    case "horizontalRule":
      return <hr key={i} className="my-8 border-zinc-200 dark:border-zinc-700" />;

    default:
      return null;
  }
}

interface BlogContentProps {
  content: { type?: string; content?: TipTapNode[]; html?: string };
}

export function BlogContent({ content }: BlogContentProps) {
  // Legacy HTML format fallback
  if ("html" in content && typeof content.html === "string") {
    return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.html }} />;
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
```

### 6. Heading Extraction (for Table of Contents)

```typescript
// lib/blog-utils.ts
import type { TipTapNode } from "@/lib/servible-api";

interface Heading {
  level: number;
  text: string;
  id: string;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getPlainText(nodes?: TipTapNode[]): string {
  if (!nodes) return "";
  return nodes.map((n) => n.text || getPlainText(n.content)).join("");
}

export function extractHeadings(content: { content?: TipTapNode[] }): Heading[] {
  if (!content.content) return [];
  return content.content
    .filter((node) => node.type === "heading" && node.attrs?.level && node.attrs.level <= 3)
    .map((node) => {
      const text = getPlainText(node.content);
      return { level: node.attrs!.level as number, text, id: slugify(text) };
    });
}
```

---

## Example Component Shells

### 7. Blog List Component (skeleton)

```tsx
// components/blog/blog-list.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogListProps {
  posts: Array<{
    slug: string;
    title: string;
    excerpt: string;
    featuredImage: string | null;
    featuredImageAlt: string | null;
    publishedAt: string;
    author: { name: string; imageUrl: string | null } | null;
    categories: { slug: string; name: string }[];
  }>;
  categories: Array<{ slug: string; name: string }>;
  currentCategory: string | null;
  page: number;
  totalPages: number;
}

export function BlogList({ posts, categories, currentCategory, page, totalPages }: BlogListProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/blog"
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${!currentCategory ? "bg-teal-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"}`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog?category=${cat.slug}`}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${currentCategory === cat.slug ? "bg-teal-600 text-white" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            {post.featuredImage && (
              <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="flex gap-2 mb-2">
              {post.categories.map((cat) => (
                <span key={cat.slug} className="text-xs font-medium text-teal-600">{cat.name}</span>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-teal-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-zinc-500 text-sm line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center gap-2 mt-3 text-xs text-zinc-400">
              {post.author && <span>{post.author.name}</span>}
              <span>·</span>
              <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {page > 1 && (
            <Link href={`/blog?page=${page - 1}${currentCategory ? `&category=${currentCategory}` : ""}`} className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-sm">
              Previous
            </Link>
          )}
          <span className="px-4 py-2 text-sm text-zinc-500">
            Page {page} of {totalPages}
          </span>
          {page < totalPages && (
            <Link href={`/blog?page=${page + 1}${currentCategory ? `&category=${currentCategory}` : ""}`} className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-sm">
              Next
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
```

### 8. Blog Article Component (skeleton)

```tsx
// components/blog/blog-article.tsx
import Image from "next/image";
import Link from "next/link";
import { BlogContent } from "./blog-content";
import { extractHeadings } from "@/lib/blog-utils";

interface BlogArticleProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    content: { type?: string; content?: unknown[]; html?: string };
    featuredImage: string | null;
    featuredImageAlt: string | null;
    publishedAt: string;
    author: { name: string; imageUrl: string | null } | null;
    categories: { slug: string; name: string }[];
    tags: { slug: string; name: string }[];
  };
}

export function BlogArticle({ post }: BlogArticleProps) {
  const headings = extractHeadings(post.content as { content?: { type: string; attrs?: Record<string, unknown>; content?: { text?: string }[] }[] });

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      {/* Back link */}
      <Link href="/blog" className="text-sm text-zinc-500 hover:text-teal-600 mb-8 inline-block">
        ← Back to blog
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex gap-2 mb-3">
          {post.categories.map((cat) => (
            <Link key={cat.slug} href={`/blog?category=${cat.slug}`} className="text-sm font-medium text-teal-600 hover:text-teal-700">
              {cat.name}
            </Link>
          ))}
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-zinc-500">
          {post.author && (
            <>
              {post.author.imageUrl && (
                <Image src={post.author.imageUrl} alt={post.author.name} width={32} height={32} className="rounded-full" />
              )}
              <span>{post.author.name}</span>
              <span>·</span>
            </>
          )}
          <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
        </div>
      </div>

      {/* Featured image */}
      {post.featuredImage && (
        <div className="relative aspect-video overflow-hidden rounded-xl mb-10">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
      )}

      {/* Two-column layout: content + sidebar */}
      <div className="flex gap-12">
        {/* Article content */}
        <div className="flex-1 min-w-0">
          <BlogContent content={post.content} />
        </div>

        {/* Sidebar (desktop only) */}
        {headings.length > 0 && (
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">On this page</h3>
              <nav className="space-y-1.5">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`block text-sm text-zinc-500 hover:text-teal-600 ${h.level > 2 ? "pl-3" : ""}`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          {post.tags.map((tag) => (
            <span key={tag.slug} className="px-3 py-1 rounded-full bg-zinc-100 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
```

---

## Next.js Image Config

Add the Cloudinary domain to `next.config.ts` so `next/image` can optimize blog images:

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
```

---

## Summary

| File | Purpose |
|------|---------|
| `lib/servible-api.ts` | API client + types |
| `lib/blog-utils.ts` | Heading extraction for TOC |
| `app/blog/page.tsx` | Blog listing (SSG + ISR, categories, pagination) |
| `app/blog/[slug]/page.tsx` | Blog detail (SSG + ISR, SEO metadata, generateStaticParams) |
| `components/blog/blog-content.tsx` | TipTap JSON → JSX renderer |
| `components/blog/blog-list.tsx` | Post grid with category pills + pagination |
| `components/blog/blog-article.tsx` | Article layout with TOC sidebar |

All pages use `revalidate = 300` (5 min ISR). Adjust as needed.

Adapt the Tailwind classes (teal accents, zinc neutrals) to match the servible.ai design system.
