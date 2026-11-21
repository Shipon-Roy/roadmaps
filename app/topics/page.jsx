"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import { classes, topics, topicCategories } from "../../public/classes";
import Container from "../../components/ui/Container";

/** প্রতিটা category-এর accent — card-এর নরম glow ও filter pill-এ ব্যবহৃত হয় */
const ACCENT = {
  framework: "#38BDF8", // sky
  languages: "#A78BFA", // violet
  tooling: "#34D399", // emerald
};

const slugOf = (link) => link.replace(/^\//, "");

const classCount = (link) => classes[slugOf(link)]?.length ?? 0;

export default function page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // কেটে রাখা: category + search — দুটো একসাথে কাজ করে
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter((t) => {
      const byCat = category === "all" || t.category === category;
      const byQuery = !q || t.topic.toLowerCase().includes(q);
      return byCat && byQuery;
    });
  }, [query, category]);

  // প্রতিটা filter pill-এর সংখ্যা
  const counts = useMemo(() => {
    const c = { all: topics.length };
    for (const t of topics) c[t.category] = (c[t.category] ?? 0) + 1;
    return c;
  }, []);

  const filters = [
    { key: "all", label: "All Topics" },
    ...Object.entries(topicCategories).map(([key, v]) => ({
      key,
      label: v.plural,
    })),
  ];

  return (
    <div className="relative overflow-hidden py-20">
      {/* হালকা blueprint grid + glow — hero-এর সাথে সামঞ্জস্য */}
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />

      <Container>
        {/* Section header */}
        <div className="relative mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Roadmaps
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Explore All <span className="gradient-text">Topics</span>
          </h1>
          <p className="text-sm font-medium text-muted-foreground sm:text-base">
            Pick a path and follow it step by step — free, structured, and
            beginner friendly.
          </p>
        </div>

        {/* Category filter — StackLearner /explore-এর মতো */}
        <div className="relative mb-6 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => {
            const active = category === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setCategory(f.key)}
                aria-pressed={active}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f.key !== "all" && (
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT[f.key] }}
                  />
                )}
                {f.label}
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums ${
                    active ? "bg-primary/15" : "bg-background/60"
                  }`}
                >
                  {counts[f.key] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative mx-auto mb-12 w-full max-w-md">
          <label htmlFor="topic-search" className="sr-only">
            Search topics
          </label>
          <div className="relative">
            <HiOutlineSearch
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="topic-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search topics…"
              autoComplete="off"
              className="h-11 w-full rounded-sm border border-border bg-card/60 pl-9 pr-10 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-sm transition-colors duration-200 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <HiOutlineX className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
          <p
            aria-live="polite"
            className="mt-3 text-center text-xs text-muted-foreground"
          >
            Showing {filtered.length} of {topics.length} topics
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="mx-auto max-w-md rounded-xl border bg-card/60 p-10 text-center shadow-md">
            <p className="text-sm font-medium text-muted-foreground">
              No topics match &ldquo;{query}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="mt-4 inline-flex h-9 items-center justify-center rounded-sm border border-border px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-accent"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((e) => {
              const count = classCount(e.link);
              const accent = ACCENT[e.category] ?? "#38BDF8";

              return (
                <Link
                  key={e.link}
                  href={`/topics${e.link}`}
                  className="group relative flex min-h-[150px] flex-col overflow-hidden rounded-xl border bg-card/60 p-5 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-primary/40"
                >
                  {/* Category-ভিত্তিক নরম glow — hover-এ ফোটে */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                    style={{ backgroundColor: `${accent}40` }}
                  />

                  {/* Top row: icon + arrow */}
                  <div className="relative flex items-start justify-between">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-border bg-secondary text-2xl transition-colors duration-200 group-hover:border-primary/40"
                      style={{ color: accent }}
                    >
                      {e.icon}
                    </span>
                    <svg
                      className="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  {/* Title + accent line */}
                  <div className="relative mt-4">
                    <h2 className="text-base font-semibold leading-tight transition-colors duration-200 group-hover:text-primary">
                      {e.topic}
                    </h2>
                    <span
                      aria-hidden="true"
                      className="mt-2 block h-1 w-10 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${accent}, ${accent}66)`,
                      }}
                    />
                  </div>

                  {/* Meta */}
                  <div className="relative mt-auto flex flex-wrap items-center gap-2 pt-4 text-[11px] text-muted-foreground">
                    <span className="rounded-full border border-border bg-secondary px-2 py-0.5 font-medium">
                      {topicCategories[e.category]?.label ?? "Topic"}
                    </span>
                    {count > 0 ? (
                      <span className="font-medium">
                        {count} {count === 1 ? "class" : "classes"}
                      </span>
                    ) : (
                      <span className="font-medium opacity-70">
                        Coming soon
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
