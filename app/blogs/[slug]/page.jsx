import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { components } from "../../../components/blogs/MDXComponents";

export default async function BlogModal({ params }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blogs", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContent);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95 backdrop-blur-xl z-[9999] animate-in fade-in-0 zoom-in-95 duration-500" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[10000] flex animate-in items-center justify-center p-4 fade-in-0 zoom-in-95 duration-700">
        <div className="relative max-h-[95vh] w-full max-w-6xl">
          {/* Main Modal Card */}
          <div className="group relative max-h-[95vh] overflow-hidden rounded-xl border bg-background shadow-2xl transition-all duration-300">
            {/* Header */}
            <div className="sticky top-0 z-20 border-b border-border bg-background/90 p-6 backdrop-blur-lg sm:p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <h1 className="line-clamp-2 text-xl font-extrabold tracking-tight sm:text-2xl">
                    {data.title}
                  </h1>
                </div>

                <Link
                  href="/blogs"
                  aria-label="Close and return to blogs"
                  className="group grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border bg-secondary transition-colors duration-200 hover:border-primary/40 hover:bg-accent"
                >
                  <svg
                    className="h-5 w-5 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
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
                <div className="ml-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-primary">
                  <svg
                    className="h-4 w-4"
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
            <div className="relative z-10 max-h-[70vh] overflow-y-auto p-6 pr-4 sm:p-8 lg:p-12">
              {/* prose-invert ইচ্ছাকৃতভাবে বাদ — রঙ এখানে token থেকে আসে,
                  তাই light/dark দুই থিমেই সঠিক থাকবে */}
              <div className="prose max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground prose-a:text-primary prose-a:no-underline prose-a:hover:underline prose-code:rounded prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-pre:rounded-xl prose-pre:border prose-pre:border-border prose-pre:bg-card prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:text-muted-foreground prose-strong:text-foreground">
                {/* ✅ styled components passed here */}
                <MDXRemote source={content} components={components} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
