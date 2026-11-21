import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineAcademicCap,
  HiOutlineArrowRight,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Container from "../ui/Container";

const T = {
  w3: { name: "W3", role: "W3Schools", img: "/mern/w3schools.png", href: "/classes/html/w3" },
  stack: { name: "HM Nayem", role: "Stack Learner", img: "/mern/stacklearner.png", href: "/classes/html/stacklearner" },
  anisul: { name: "Anisul Islam", role: "Anisul Islam", img: "/mern/anisul.png", href: "/classes/javascript/anisul" },
  lws: { name: "Sumit Shaha", role: "LWS", img: "/mern/lws.png", href: "/classes/javascript/lws" },
};

const forTopic = (slug) =>
  [T.anisul, T.lws, T.stack].map((t) => ({ ...t, href: `/classes/${slug}/${t.href.split("/").pop()}` }));

const steps = [
  {
    title: "HTML",
    full: "Hyper Text Markup Language",
    color: "#FF8731",
    lottie: "/mern/html.lottie",
    teachers: [T.w3, { ...T.stack, href: "/classes/html/stacklearner" }],
  },
  {
    title: "CSS",
    full: "Cascading Style Sheets",
    color: "#3FB8A9",
    lottie: "/mern/css.lottie",
    teachers: [
      { ...T.w3, href: "/classes/css/w3" },
      { ...T.stack, href: "/classes/css/stacklearner" },
    ],
  },
  {
    title: "Git & Github",
    full: "Version control & collaboration",
    color: "#F97316",
    lottie: "/mern/gitgithub.lottie",
    teachers: forTopic("gitgithub"),
  },
  {
    title: "Javascript",
    full: "The language of the web",
    color: "#FACC15",
    lottie: "/mern/javascript.lottie",
    teachers: forTopic("javascript"),
  },
  {
    title: "Reactjs",
    full: "Component-based UI library",
    color: "#38BDF8",
    lottie: "/mern/react.lottie",
    teachers: forTopic("reactjs"),
  },
  {
    title: "Nodejs",
    full: "JavaScript runtime for the backend",
    color: "#10C151",
    lottie: "/mern/node.lottie",
    teachers: forTopic("nodejs"),
  },
  {
    title: "MongoDB",
    full: "NoSQL document database",
    color: "#489C49",
    lottie: "/mern/mongodb.lottie",
    teachers: forTopic("mongodb"),
  },
];

const pad = (n) => String(n + 1).padStart(2, "0");

const meta = [
  { Icon: HiOutlineClipboardList, label: `${steps.length} structured steps` },
  { Icon: HiOutlineAcademicCap, label: "Beginner friendly" },
  { Icon: HiOutlineCheckCircle, label: "100% free" },
];

/**
 * একটা curriculum step — StackLearner-ধাঁচের কম্পাক্ট কার্ড।
 *
 * Design principle (কেন এভাবে):
 *  - `rounded-lg border bg-card shadow-sm` → বড় glow/shadow নয়, শুধু
 *    একটা পাতলা border দিয়ে আলাদা করা (StackLearner-এর মূল প্যাটার্ন)
 *  - রঙ শুধু একটা ছোট dot-এ → পুরো কার্ড রঙিন হয় না
 *  - শিক্ষকরা `divide-y` দিয়ে এক সারির মতো → স্ক্যান করা সহজ
 */
function StepCard({ step, index }) {
  const n = pad(index);

  return (
    <article
      id={`step-${index}`}
      data-aos="fade-up"
      data-aos-duration="600"
      className="group scroll-mt-24 overflow-hidden rounded-lg border bg-card shadow-sm transition-colors duration-200 hover:border-primary/40"
    >
      <div className="flex flex-col sm:flex-row">
        {/* Animation thumbnail */}
        <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-border bg-secondary/40 sm:aspect-auto sm:w-40 sm:border-b-0 sm:border-r">
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 55%, ${step.color}22, transparent 72%)`,
            }}
          />
          <div className="relative h-full w-full p-3">
            <DotLottieReact
              autoplay
              loop
              src={step.lottie}
              backgroundColor="transparent"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: step.color }}
            />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Step {n}
            </span>
          </div>

          <h3 className="mt-2 text-base font-semibold leading-tight text-foreground">
            {step.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{step.full}</p>

          {/* Teachers — এক সারি, বিভক্তকৃত */}
          <ul className="mt-4 divide-y divide-border border-t border-border">
            {step.teachers.map((teacher) => (
              <li key={teacher.href}>
                <Link
                  href={teacher.href}
                  className="group/t flex items-center gap-3 py-2.5"
                >
                  <Image
                    src={teacher.img}
                    alt={teacher.role}
                    width={48}
                    height={32}
                    className="h-8 w-12 shrink-0 rounded object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-foreground">
                      {teacher.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {teacher.role}
                    </span>
                  </span>
                  <HiOutlineArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200 group-hover/t:translate-x-0.5 group-hover/t:text-primary"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/**
 * উপরের path rail — পুরো curriculum এক নজরে।
 * মোবাইলে শুধু নম্বর (লেবেল লুকানো), sm থেকে লেবেল দৃশ্যমান।
 */
function PathRail() {
  return (
    <nav aria-label="Curriculum path" className="mb-10 sm:mb-12">
      <ol className="flex items-center justify-center overflow-x-auto pb-1">
        {steps.map((step, i) => (
          <li key={step.title} className="flex shrink-0 items-center">
            <a
              href={`#step-${i}`}
              className="group flex items-center gap-2 rounded-sm px-1.5 py-1 sm:flex-col sm:gap-1.5 sm:px-3"
            >
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold tabular-nums text-muted-foreground transition-colors duration-200 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:text-foreground">
                {pad(i)}
              </span>
              <span className="hidden max-w-[92px] truncate text-xs font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground sm:block">
                {step.title}
              </span>
            </a>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="h-px w-3 shrink-0 bg-border sm:w-6"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function Mern() {
  return (
    <section className="relative scroll-mt-16 py-20 sm:py-24">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <span className="inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Curriculum
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Learn the <span className="gradient-text">MERN Stack</span>
          </h2>
          <p className="text-sm font-medium text-muted-foreground sm:text-base">
            A complete learning path covering everything from HTML basics to
            full-stack MERN development.
          </p>

          {/* Meta row */}
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-1 text-xs text-muted-foreground">
            {meta.map(({ Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Path rail */}
        <PathRail />

        {/* Step cards — 2 columns on desktop */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/topics"
            className="group inline-flex h-11 items-center gap-2 rounded-sm bg-blue-600 px-6 text-sm font-semibold text-white shadow-glow-sm transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Explore other topics
            <HiOutlineArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}
