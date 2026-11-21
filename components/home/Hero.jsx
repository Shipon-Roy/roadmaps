"use client";
import Link from "next/link";
import Container from "../ui/Container";

const stats = [
  { value: "10+", label: "Topics" },
  { value: "Free", label: "Resources" },
  { value: "MERN", label: "Stack" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background py-20 pb-32">
      {/* Blueprint grid */}
      <div className="grid-bg pointer-events-none absolute inset-0" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            data-aos="fade-up"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            100% Free Learning Path
          </div>

          {/* Heading — StackLearner ধাঁচে: সাদা লাইন + gradient লাইন */}
          <h1
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Learn The Right Skills
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              For A Global Career
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground opacity-90 sm:text-lg"
          >
            Structured roadmaps, curated resources, and expert guidance to help
            you grow as a developer — completely free, from your first line of
            code to a job-ready portfolio.
          </p>

          {/* CTA */}
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/topics"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-blue-600 px-6 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Start Learning Free
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </Link>

            <Link
              href="/blogs"
              className="inline-flex h-11 items-center justify-center rounded-sm border border-border bg-transparent px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-accent"
            >
              Read Blogs
            </Link>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-12 flex items-center justify-center gap-6 sm:gap-10"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-6 sm:gap-10"
              >
                {i > 0 && (
                  <span className="h-8 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                )}
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
