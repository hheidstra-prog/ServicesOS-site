"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import type { BlogPost, BlogCategory } from "@/lib/servible-api";

interface BlogListProps {
  posts: BlogPost[];
  categories: BlogCategory[];
  currentCategory: string | null;
  page: number;
  totalPages: number;
}

export function BlogList({
  posts,
  categories,
  currentCategory,
  page,
  totalPages,
}: BlogListProps) {
  const t = useTranslations("blogPage");
  const locale = useLocale();

  const blogPath = `/${locale}/blog`;

  function categoryUrl(slug?: string) {
    if (!slug) return blogPath;
    return `${blogPath}?category=${slug}`;
  }

  function pageUrl(p: number) {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (currentCategory) params.set("category", currentCategory);
    const qs = params.toString();
    return qs ? `${blogPath}?${qs}` : blogPath;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
          {t("meta.title")}
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          {t("meta.description")}
        </p>
      </div>

      {/* Category filter pills */}
      {categories.length > 0 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <Link
            href={categoryUrl()}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              !currentCategory
                ? "bg-accent-600 text-white"
                : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-zinc-200"
            }`}
          >
            {t("allCategories")}
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={categoryUrl(cat.slug)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                currentCategory === cat.slug
                  ? "bg-accent-600 text-white"
                  : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-zinc-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}

      {/* Post grid */}
      {posts.length === 0 ? (
        <p className="py-20 text-center text-[var(--muted-foreground)]">
          {t("noPosts")}
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`${blogPath}/${post.slug}`}
              className="group"
            >
              {post.featuredImage && (
                <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="mb-2 flex gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat.slug}
                    className="text-xs font-medium text-accent-600"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-accent-600">
                {post.title}
              </h2>
              <p className="line-clamp-2 text-sm text-[var(--muted-foreground)]">
                {post.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                {post.author && <span>{post.author.name}</span>}
                {post.author && <span>&middot;</span>}
                <time>
                  {new Date(post.publishedAt).toLocaleDateString(locale, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          {page > 1 && (
            <Link
              href={pageUrl(page - 1)}
              className="rounded-lg bg-[var(--muted)] px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-zinc-200"
            >
              {t("previous")}
            </Link>
          )}
          <span className="px-4 py-2 text-sm text-[var(--muted-foreground)]">
            {t("pageOf", { page, totalPages })}
          </span>
          {page < totalPages && (
            <Link
              href={pageUrl(page + 1)}
              className="rounded-lg bg-[var(--muted)] px-4 py-2 text-sm text-[var(--muted-foreground)] transition-colors hover:bg-zinc-200"
            >
              {t("next")}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
