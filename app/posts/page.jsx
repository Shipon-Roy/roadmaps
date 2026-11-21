import Container from "../../components/ui/Container";

export default function page() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-14 space-y-4 text-center">
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Posts
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Latest Tech <span className="gradient-text">Updates</span>
            </h1>
            <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              Short, practical write-ups from the people who build and teach.
            </p>
          </div>

          <div className="divider-glow mb-14 h-px w-full" />

          {/* Content */}
          <div className="rounded-xl border bg-card/60 p-8 shadow-md backdrop-blur-sm">
            <p className="leading-relaxed text-muted-foreground">
              In addition to our full-time instructors, we often reach out to
              top developers in the programming space for their expertise. New
              posts are published here regularly — follow along to keep up with
              what&rsquo;s changing in the industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/blogs"
                className="inline-flex h-10 items-center justify-center rounded-sm bg-blue-600 px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Read Blogs
              </a>
              <a
                href="/podcast"
                className="inline-flex h-10 items-center justify-center rounded-sm border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-accent"
              >
                Listen to Podcast
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
