import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { components } from "../../../components/blogs/MDXComponents";

export default async function BlogModal({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white p-6 max-w-4xl w-full rounded-lg shadow-lg relative overflow-y-auto max-h-[90vh]">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>

        {/* ✅ styled components passed here */}
        <MDXRemote source={content} components={components} />

        <Link
          href="/blogs"
          className="absolute top-4 right-4 text-sm text-gray-300 hover:text-white"
        >
          ✕
        </Link>
      </div>
    </div>
  );
}
