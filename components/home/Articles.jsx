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
    tagColor: "text-sky-400 bg-sky-400/10",
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
    tagColor: "text-violet-400 bg-violet-400/10",
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
    tagColor: "text-emerald-400 bg-emerald-400/10",
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
    tagColor: "text-orange-400 bg-orange-400/10",
  },
];

export default function Articles() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            data-aos="fade-up"
            className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-4 py-1.5 rounded-full border border-sky-400/20"
          >
            Resources
          </span>
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Latest{" "}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-gray-400 text-lg max-w-[560px] mx-auto"
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
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${blog.gradient} border ${blog.border} hover:border-opacity-60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${blog.tagColor}`}
                  >
                    {blog.tag}
                  </span>
                  <span className="text-gray-500 text-xs">{blog.readTime}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-sky-300 transition-colors duration-200 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {blog.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-500 text-xs">{blog.date}</span>
                  <span className="flex items-center gap-1 text-sm font-medium text-sky-400 group-hover:gap-2 transition-all duration-200">
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
            <button className="px-8 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 font-medium transition-all duration-200">
              View All Blogs
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
