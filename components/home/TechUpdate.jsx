import Container from "../ui/Container";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    title: "Learning Paths",
    desc: "Structured, step-by-step roadmaps designed to take you from beginner to job-ready developer.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Gain Skills",
    desc: "Hands-on resources and curated content from top instructors to sharpen your programming skills.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Career Prep",
    desc: "Everything you need to land your first dev job — from portfolio guidance to interview preparation.",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function TechUpdate() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 h-px w-[900px] -translate-x-1/2 divider-glow" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            data-aos="fade-up"
            className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary"
          >
            What We Offer
          </span>
          <h2
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            More Than Just A{" "}
            <span className="gradient-text">Learning Platform</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="mx-auto max-w-[600px] text-sm font-medium leading-relaxed text-muted-foreground sm:text-base"
          >
            We combine expert instruction, community, and structured content to
            give you the best free learning experience available.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-duration={1000 + i * 200}
              className={`group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-colors duration-200 hover:border-primary/40 sm:p-8`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-6 shadow-sm`}
              >
                {f.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
