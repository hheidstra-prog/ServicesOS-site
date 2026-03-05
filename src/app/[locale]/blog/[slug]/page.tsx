import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts, getBlogCategories } from "@/lib/servible-api";
import { BlogArticle } from "@/components/blog/blog-article";

export const revalidate = 300;

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const { post } = await getBlogPost(slug, locale);
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
    const t = await getTranslations({ locale, namespace: "blogPage.meta" });
    return { title: t("title") };
  }
}

export async function generateStaticParams() {
  try {
    const [enData, nlData] = await Promise.all([
      getBlogPosts(1, 100, undefined, "en"),
      getBlogPosts(1, 100, undefined, "nl"),
    ]);
    return [
      ...enData.posts.map((post) => ({ locale: "en", slug: post.slug })),
      ...nlData.posts.map((post) => ({ locale: "nl", slug: post.slug })),
    ];
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  try {
    const [{ post }, { categories }] = await Promise.all([
      getBlogPost(slug, locale),
      getBlogCategories(),
    ]);

    return <BlogArticle post={post} categories={categories} />;
  } catch {
    notFound();
  }
}
