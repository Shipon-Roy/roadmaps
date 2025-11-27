import fs from "fs";
import path from "path";
import matter from "gray-matter"; // optional for frontmatter

const blogDir = path.join(process.cwd(), "content", "blogs");

/**
 * Returns metadata for all MDX posts
 */
export async function getAllPostsMeta() {
  const files = fs.readdirSync(blogDir);

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(blogDir, file);
    const source = fs.readFileSync(filePath, "utf8");

    // Use gray-matter if you want metadata like title, date
    const { data } = matter(source);

    return {
      slug,
      ...data,
    };
  });

  return posts;
}

/**
 * Returns content of a single post
 */
export async function getPostBySlug(slug) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  return source;
}
