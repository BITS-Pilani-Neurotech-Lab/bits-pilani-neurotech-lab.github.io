"use server";

import { getPostBySlug, PostData } from "@/lib/markdown";

export async function fetchPost(slug: string): Promise<PostData | null> {
  return getPostBySlug(slug);
}