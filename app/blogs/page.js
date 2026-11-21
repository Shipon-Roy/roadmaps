import Link from "next/link";
import { getAllPostsMeta } from "../../lib/mdx";
import Container from "../../components/ui/Container";

export default async function BlogList() {
  const posts = await getAllPostsMeta();

  return (
    <div className="py-24">
      <Container>
        {/* Section header — হোমপেজের সেকশনের সাথে একই ধাঁচ */}
        <div className="mx-auto mb-14 max-w-2xl space-y-4 text-center">
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Resources
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            From The <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground sm:text-base">
            Learn how to grow your skill with our expert advice.
          </p>
        </div>

        <div className="divider-glow mx-auto mb-14 h-px w-full max-w-4xl" />

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts published yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border bg-card/60 p-5 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
              >
                {/* Meta */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    Blog
                  </span>
                  {post.date && (
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-primary">
                  {post.title || post.slug.replace(/-/g, " ")}
                </h2>

                {post.name && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.name}
                  </p>
                )}

                {/* Read more */}
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2.5">
                  Read More
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
