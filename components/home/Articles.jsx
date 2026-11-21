import Link from "next/link";
import Container from "../ui/Container";

const blogs = [
  {
    tag: "Web Dev",
    title: "Noteworthy Technology Acquisitions 2025",
    desc: "Explore the biggest enterprise technology acquisitions so far, and what they mean for the developer ecosystem going forward.",
    date: "Jun 12, 2025",
    readTime: "5 min read",
    href: "#",
    gradient: "from-sky-500/10 to-blue-500/10",
    border: "border-sky-500/20",
    tagColor: "text-sky-600 bg-sky-500/10 dark:text-sky-400",
  },
  {
    tag: "Tools",
    title: "Top Developer Tools Shaping 2025",
    desc: "A curated list of modern tools and frameworks that are transforming how developers build, test, and deploy applications.",
    date: "May 28, 2025",
    readTime: "4 min read",
    href: "#",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-500/20",
    tagColor: "text-violet-600 bg-violet-500/10 dark:text-violet-400",
  },
  {
    tag: "Career",
    title: "How to Land Your First Dev Job in 2025",
    desc: "Practical advice on building your portfolio, networking, and acing technical interviews as a new developer entering the market.",
    date: "May 10, 2025",
    readTime: "6 min read",
    href: "#",
    gradient: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    tagColor: "text-emerald-600 bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    tag: "MERN",
    title: "Building Full-Stack Apps with the MERN Stack",
    desc: "A complete guide to building production-ready full-stack applications with MongoDB, Express, React, and Node.js.",
    date: "Apr 22, 2025",
    readTime: "8 min read",
    href: "#",
    gradient: "from-orange-500/10 to-amber-500/10",
    border: "border-orange-500/20",
    tagColor: "text-orange-600 bg-orange-500/10 dark:text-orange-400",
  },
];

export default function Articles() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            data-aos="fade-up"
            className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Resources
          </span>
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Latest <span className="gradient-text">Blogs</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mx-auto max-w-[560px] text-sm font-medium text-muted-foreground sm:text-base"
          >
            Stay up to date with articles, guides, and insights for developers
            at every level.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <Link key={i} href={blog.href}>
              <div
                data-aos="fade-up"
                data-aos-duration={1000 + i * 150}
                className={`group relative h-full cursor-pointer overflow-hidden rounded-lg border bg-card p-5 shadow-sm transition-colors duration-200 hover:border-primary/40`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${blog.tagColor}`}
                  >
                    {blog.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                </div>
                <h3 className="mb-3 text-base font-semibold leading-snug transition-colors duration-200 group-hover:text-primary">
                  {blog.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {blog.desc}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                    Read more
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div
          data-aos="fade-up"
          className="text-center mt-12"
        >
          <Link href="/blogs">
            <button className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-accent">
              View All Blogs
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
