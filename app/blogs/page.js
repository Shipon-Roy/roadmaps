import Link from "next/link";
import { getAllPostsMeta } from "../../lib/mdx";

export default async function BlogList() {
  const posts = await getAllPostsMeta();

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-50">
        All Blog Posts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block bg-gray-700 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-100 group-hover:text-blue-600 transition-colors duration-300">
                {post.title || post.slug.replace(/-/g, " ")}
              </h2>
              {post.date && (
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              )}
              {post.description && (
                <p className="text-gray-700">{post.description}</p>
              )}
              <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
