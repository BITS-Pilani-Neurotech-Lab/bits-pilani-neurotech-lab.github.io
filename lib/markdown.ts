// lib/markdown.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostData {
  slug: string;
  title: string;
  content: string;
  [key: string]: any;
}

export function getPostBySlug(slug: string): PostData | null {
  console.log(`--- [Debug] getPostBySlug call for slug: "${slug}" ---`);
  
  try {
    // 1. Sanity Check: Path and Directory Existence
    console.log(`[Debug] Checking contentDirectory at: ${contentDirectory}`);
    if (!fs.existsSync(contentDirectory)) {
      console.error(`[Debug] ERROR: Directory "${contentDirectory}" does not exist!`);
      return null;
    }

    // 2. Directory Listing
    const files = fs.readdirSync(contentDirectory);
    console.log(`[Debug] Files found in contentDirectory:`, files);
    console.log(`[Debug] Number of files: ${files.length}`);

    // 3. Search Logic
    const lowerSlug = slug.toLowerCase();
    const targetFile = files.find((file) => {
      const lowerFile = file.toLowerCase();
      // Use partial word matching
      return lowerSlug.split('-').every((word) => lowerFile.includes(word));
    });

    if (!targetFile) {
      console.warn(`[Debug] WARNING: No file matched for slug: "${slug}"`);
      return null;
    }

    // 4. File Processing
    console.log(`[Debug] File match found: "${targetFile}"`);
    const fullPath = path.join(contentDirectory, targetFile);
    console.log(`[Debug] Reading file contents from: ${fullPath}`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    console.log(`--- [Debug] Success ---`);

    return {
      slug,
      title: data.title || slug,
      content,
      ...data,
    };
  } catch (error: any) {
    console.error(`--- [Debug] ERROR processing file for slug: "${slug}" ---`);
    console.error(`[Debug] Error message: ${error.message}`);
    // console.error(`[Debug] Error stack: ${error.stack}`);
    return null;
  }
}