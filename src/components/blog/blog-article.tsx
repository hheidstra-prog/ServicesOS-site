"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { BlogContent } from "./blog-content";
import { extractHeadings, calculateReadTime } from "@/lib/blog-utils";
import type { BlogPostDetail } from "@/lib/servible-api";

interface BlogArticleProps {
  post: BlogPostDetail;
  categories: { slug: string; name: string }[];
}

export function BlogArticle({ post, categories }: BlogArticleProps) {
  const t = useTranslations("blogPage");
  const locale = useLocale();

  const blogPath = `/${locale}/blog`;
  const headings = extractHeadings(post.content);
  const readTime = calculateReadTime(post.content);

  return (
    <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href={blogPath}
        className="mb-8 inline-block text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-600"
      >
        &larr; {t("backToBlog")}
      </Link>

      {/* Meta line */}
      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-[var(--muted-foreground)]">
        <time>
          {new Date(post.publishedAt).toLocaleDateString(locale, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <span>&middot;</span>
        <span>{t("readTime", { minutes: readTime })}</span>
        {post.categories.length > 0 && (
          <>
            <span>&middot;</span>
            {post.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`${blogPath}?category=${cat.slug}`}
                className="font-medium text-accent-600 hover:text-accent-700"
              >
                {cat.name}
              </Link>
            ))}
          </>
        )}
      </div>

      {/* Title */}
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
        {post.title}
      </h1>

      {/* Excerpt */}
      <p className="mb-6 text-lg text-[var(--muted-foreground)]">
        {post.excerpt}
      </p>

      <hr className="mb-6 border-[var(--border)]" />

      {/* Author */}
      {post.author && (
        <div className="mb-8 flex items-center gap-3">
          {post.author.imageUrl && (
            <Image
              src={post.author.imageUrl}
              alt={post.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div className="text-sm">
            <span className="text-[var(--muted-foreground)]">{t("by")}</span>{" "}
            <span className="font-medium text-[var(--foreground)]">
              {post.author.name}
            </span>
          </div>
        </div>
      )}

      {/* Featured image */}
      {post.featuredImage && (
        <div className="relative mb-10 aspect-video overflow-hidden rounded-xl">
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
        <div className="min-w-0 flex-1">
          <BlogContent content={post.content} />
        </div>

        {/* Sidebar (desktop only) */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 space-y-8">
            {/* Table of contents */}
            {headings.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
                  {t("onThisPage")}
                </h3>
                <nav className="space-y-1.5">
                  {headings.map((h) => (
                    <a
                      key={h.id}
                      href={`#${h.id}`}
                      className={`block text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-600 ${
                        h.level > 2 ? "pl-3" : ""
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Categories */}
            {categories.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-semibold text-[var(--foreground)]">
                  {t("categories")}
                </h3>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`${blogPath}?category=${cat.slug}`}
                      className="block text-sm text-[var(--muted-foreground)] transition-colors hover:text-accent-600"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">
          {post.tags.map((tag) => (
            <span
              key={tag.slug}
              className="rounded-full bg-[var(--muted)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
