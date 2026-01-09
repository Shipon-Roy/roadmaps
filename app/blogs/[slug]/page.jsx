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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95 backdrop-blur-xl z-[9999] animate-in fade-in-0 zoom-in-95 duration-500" />

      {/* Modal Container */}
      <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4 animate-in fade-in-0 zoom-in-95 duration-700">
        <div className="w-full max-w-6xl max-h-[95vh] relative">
          {/* Main Modal Card */}
          <div className="bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 group">
            {/* Header */}
            <div className="p-8 pb-4 border-b border-white/10 sticky top-0 bg-gradient-to-r from-slate-900/95 to-transparent backdrop-blur-xl z-20">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse" />
                  <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-white via-blue-50 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl line-clamp-1">
                    {data.title}
                  </h1>
                </div>

                <Link
                  href="/blogs"
                  className="group relative p-3 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-3 flex items-center justify-center w-12 h-12"
                >
                  <svg
                    className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="sr-only">Close</span>
                </Link>
              </div>

              {data.date && (
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300/90 backdrop-blur-sm bg-blue-500/10 px-4 py-2 rounded-2xl border border-blue-500/30 ml-10">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {data.date}
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="relative z-10 p-8 lg:p-12 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-slate-900/50 pr-4">
              <div className="prose prose-invert prose-headings:text-white prose-headings:font-black prose-headings:drop-shadow-lg prose-a:text-blue-400 prose-a:no-underline prose-a:hover:text-blue-300 prose-code:bg-slate-800/50 prose-code:backdrop-blur prose-code:rounded-xl prose-blockquote:border-l-blue-400 prose-blockquote:bg-blue-500/5 max-w-none">
                {/* ✅ styled components passed here */}
                <MDXRemote source={content} components={components} />
              </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-4xl backdrop-blur-xl border border-blue-400/20 opacity-60 animate-pulse" />
            <div className="absolute bottom-20 -left-8 w-20 h-20 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-full backdrop-blur-xl border border-emerald-400/20 opacity-50 animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </>
  );
}
