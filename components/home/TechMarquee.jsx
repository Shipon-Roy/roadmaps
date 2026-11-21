import Container from "../ui/Container";

const rowA = [
  "HTML",
  "CSS",
  "Git & GitHub",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
];

const rowB = [
  "Redux",
  "REST API",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Vite",
  "Jest",
  "Python",
  "Java",
  "Go",
  "Redis",
];

function Chip({ label }) {
  return (
    <span className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden="true" />
      {label}
    </span>
  );
}

/**
 * দুই সারির স্ক্রলিং টেক স্ট্রিপ — StackLearner-এর
 * "Skills That Pay 20x More" অংশের মতো।
 * কনটেন্ট ২ বার render করা হয়, তাই translateX(-50%) দিলে seamless loop হয়।
 */
export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-16">
      <Container>
        <div className="mx-auto mb-10 max-w-2xl space-y-3 text-center">
          <h2
            data-aos="fade-up"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Skills That Get You{" "}
            <span className="gradient-text">Hired</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-sm font-medium text-muted-foreground sm:text-base"
          >
            Strong foundations. Real-world projects. Production-ready skills
            that top companies actually use.
          </p>
        </div>
      </Container>

      {/* Row 1 — বাম থেকে ডান */}
      <div
        className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-3 px-3">
          {[...rowA, ...rowA].map((label, i) => (
            <Chip key={`${label}-${i}`} label={label} />
          ))}
        </div>
      </div>

      {/* Row 2 — ডান থেকে বাম (reverse) */}
      <div
        className="relative mt-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee-slow gap-3 px-3 [animation-direction:reverse]">
          {[...rowB, ...rowB].map((label, i) => (
            <Chip key={`${label}-${i}`} label={label} />
          ))}
        </div>
      </div>

      {/* Screen reader-এর জন্য স্থির তালিকা */}
      <div className="sr-only">
        Technologies covered: {[...rowA, ...rowB].join(", ")}
      </div>
    </section>
  );
}
