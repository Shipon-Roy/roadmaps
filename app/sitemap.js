import { getAllPostsMeta } from "../lib/mdx";

/**
 * প্রতিটা deploy-এর আগে NEXT_PUBLIC_SITE_URL সেট করো,
 * না হলে localhost বসবে।
 * Vercel: Project Settings → Environment Variables
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

/** যেসব পেজ সবসময় থাকবে */
const staticRoutes = [
  { path: "", priority: "1.0", changeFrequency: "weekly" },
  { path: "/topics", priority: "0.9", changeFrequency: "weekly" },
  { path: "/topics/framework", priority: "0.7", changeFrequency: "monthly" },
  { path: "/topics/languages", priority: "0.7", changeFrequency: "monthly" },
  { path: "/topics/tooling", priority: "0.7", changeFrequency: "monthly" },
  { path: "/blogs", priority: "0.8", changeFrequency: "weekly" },
  { path: "/posts", priority: "0.6", changeFrequency: "monthly" },
  { path: "/podcast", priority: "0.6", changeFrequency: "monthly" },
  { path: "/about", priority: "0.5", changeFrequency: "yearly" },
];

export default async function sitemap() {
  // MDX থেকে সব ব্লগ পোস্টের slug নিচ্ছি
  let posts = [];
  try {
    posts = await getAllPostsMeta();
  } catch {
    // content না থাকলেও sitemap কাজ করবে
    posts = [];
  }

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: Number(route.priority),
  }));

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
