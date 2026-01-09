import Link from "next/link";
import { getAllPostsMeta } from "../../lib/mdx";

export default async function BlogList() {
  const posts = await getAllPostsMeta();

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 via-blue-900/20 to-slate-900/70 min-h-screen">
      <div className="mx-auto max-w-4xl text-center mb-4">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl mb-12">
          <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-ping"></div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-blue-50 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            From the blog
          </h2>
        </div>
        <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
          Learn how to grow your skill with our expert advice.
        </p>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group relative block p-1 rounded-3xl bg-gradient-to-r from-blue-500/5 to-purple-600/5 border border-white/10 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/25 hover:-translate-y-4 hover:rotate-1 transition-all duration-700 overflow-hidden backdrop-blur-xl hover:backdrop-blur-2xl"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-75"></div>

            <div className="relative bg-gradient-to-br from-slate-800/60 via-slate-900/50 to-black/70 backdrop-blur-xl rounded-3xl p-10 h-full border border-white/10 shadow-2xl overflow-hidden">
              {/* Top gradient badge */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-3xl backdrop-blur-xl border-2 border-emerald-400/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center shadow-2xl">
                <svg
                  className="w-10 h-10 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl lg:text-3xl xl:text-4xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-blue-200 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-500 transition-all duration-700 leading-tight line-clamp-2">
                  {post.title || post.slug.replace(/-/g, " ")}
                </h2>

                <div className="space-y-4 mb-8">
                  {post.date && (
                    <div className="inline-flex items-center gap-3 text-sm font-semibold text-blue-300/90 backdrop-blur-sm bg-blue-500/10 px-4 py-2 rounded-2xl border border-blue-500/30 shadow-lg hover:bg-blue-500/20 transition-all duration-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <svg
                        className="w-5 h-5"
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
                      {post.date}
                    </div>
                  )}

                  {post.name && (
                    <div className="text-xl text-gray-200/95 backdrop-blur-sm bg-white/10 px-6 py-3 rounded-2xl border border-white/20 font-semibold shadow-xl hover:bg-white/20 transition-all duration-300">
                      {post.name}
                    </div>
                  )}
                </div>

                <span className="group-hover relative inline-flex items-center gap-4 text-xl font-black text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text hover:from-emerald-300 hover:to-teal-300 transition-all duration-500 overflow-hidden">
                  <span>Read More</span>
                  <svg
                    className="w-8 h-8 flex-shrink-0 group-hover:translate-x-3 transition-all duration-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </span>
              </div>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent pointer-events-none"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
