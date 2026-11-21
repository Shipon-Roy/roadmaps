import Container from "../../components/ui/Container";

const values = [
  {
    title: "Completely Free",
    desc: "Every roadmap, class, and article on this platform costs nothing — forever.",
    accent: "text-emerald-400",
  },
  {
    title: "Structured Paths",
    desc: "No random tutorials. Each topic follows a step-by-step order that actually builds on the last one.",
    accent: "text-blue-400",
  },
  {
    title: "Industry Ready",
    desc: "Learn the exact skills companies ask for, not outdated syntax from a decade ago.",
    accent: "text-purple-400",
  },
];

export default function About() {
  return (
    <div className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-14 space-y-4 text-center">
            <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              About
            </span>
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Free Learning <span className="gradient-text">Path</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
              The ultimate destination for anyone looking to learn programming
              for free — from your first line of code to a job-ready developer.
            </p>
          </div>

          <div className="divider-glow mb-14 h-px w-full" />

          {/* Intro */}
          <div className="space-y-4">
            <p className="leading-relaxed text-muted-foreground">
              Whether you&rsquo;re a beginner starting from scratch or an
              experienced developer looking to sharpen your skills, we offer a
              wide range of resources to help you grow. We believe learning to
              code should be accessible to everyone, regardless of location,
              background, or financial situation.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              That&rsquo;s why every tutorial, class, and exercise here is
              completely{" "}
              <span className="font-semibold text-emerald-400">
                free of charge
              </span>
              .
            </p>
          </div>

          {/* Values */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border bg-card/60 p-5 shadow-md backdrop-blur-sm"
              >
                <div
                  className={`mb-3 h-1 w-10 rounded-full bg-current ${v.accent}`}
                  aria-hidden="true"
                />
                <h2 className="text-base font-semibold">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="mt-14 rounded-xl border bg-card/60 p-8 shadow-md backdrop-blur-sm">
            <h2 className="text-lg font-semibold">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our mission is to empower individuals around the world with the
              skills they need to succeed in the ever-evolving tech industry. We
              are committed to offering a{" "}
              <span className="font-semibold text-primary">
                free, comprehensive learning platform
              </span>{" "}
              where anyone, regardless of experience, can dive into the world of
              programming and software development.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
