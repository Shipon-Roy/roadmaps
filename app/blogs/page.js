import Link from "next/link";
import { getAllPostsMeta } from "../../lib/mdx";

export default async function BlogList() {
  const posts = await getAllPostsMeta();

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg/8 text-gray-300">
          Learn how to grow your skill with our expert advice.
        </p>
      </div>
      <hr className="my-10" />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block bg-gray-700 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-100  transition-colors duration-300">
                {post.title || post.slug.replace(/-/g, " ")}
              </h2>
              {post.date && (
                <p className="text-sm text-gray-300 mb-4">{post.date}</p>
              )}
              {post.name && <p className="text-gray-300">{post.name}</p>}
              <span className="inline-block mt-4 text-green-400 font-medium group-hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
