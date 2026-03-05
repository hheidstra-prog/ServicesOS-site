import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getBlogPosts, getBlogCategories } from "@/lib/servible-api";
import { BlogList } from "@/components/blog/blog-list";

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blogPage.meta" });
  return { title: t("title"), description: t("description") };
}

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { page, category } = await searchParams;
  const pageNum = Number(page) || 1;

  const [postsData, categoriesData] = await Promise.all([
    getBlogPosts(pageNum, 12, category, locale),
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
