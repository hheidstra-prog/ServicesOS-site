const API_URL = process.env.SERVIBLE_API_URL || "http://localhost:3001";
const API_KEY = process.env.SERVIBLE_API_KEY;

async function servibleFetch(path: string) {
  if (!API_KEY) throw new Error("SERVIBLE_API_KEY not configured");

  const res = await fetch(`${API_URL}/api/v1${path}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Servible API error: ${res.status}`);
  return res.json();
}

// ─── Types ───

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  locale: string;
  availableLocales: string[] | { locale: string; slug: string }[];
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  createdAt: string;
  author: { name: string; imageUrl: string | null } | null;
  categories: { id: string; name: string; slug: string }[];
}

export interface BlogPostDetail extends BlogPost {
  content: TipTapDoc;
  metaTitle: string | null;
  metaDescription: string | null;
  updatedAt: string;
  tags: { id: string; name: string; slug: string }[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
}

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

// ─── Blog API ───

interface BlogListResponse {
  success: boolean;
  posts: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
}

export async function getBlogPosts(
  page = 1,
  limit = 12,
  category?: string,
  locale?: string
): Promise<BlogListResponse> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (category) params.set("category", category);
  if (locale) params.set("locale", locale);
  return servibleFetch(`/blog/posts?${params}`);
}

interface BlogPostDetailResponse {
  success: boolean;
  post: BlogPostDetail;
}

export async function getBlogPost(
  slug: string,
  locale?: string
): Promise<BlogPostDetailResponse> {
  const params = locale ? `?locale=${locale}` : "";
  return servibleFetch(`/blog/posts/${slug}${params}`);
}

export async function getBlogCategories(): Promise<{
  success: boolean;
  categories: BlogCategory[];
}> {
  return servibleFetch("/blog/categories");
}
