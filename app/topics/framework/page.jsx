import Link from "next/link";
import React from "react";
import { FaReact, FaLaravel, FaAngular } from "react-icons/fa";
import { SiNextdotjs, SiVuedotjs, SiTailwindcss, SiNuxt } from "react-icons/si";

const topics = [
  {
    icon: <FaReact />,
    topic: "React",
    link: "/react",
  },
  {
    icon: <SiNextdotjs />,
    topic: "Next",
    link: "/next",
  },
  {
    icon: <SiVuedotjs />,
    topic: "Vue",
    link: "/vue",
  },
  {
    icon: <FaAngular />,
    topic: "Angular",
    link: "/angular",
  },
  {
    icon: <SiTailwindcss />,
    topic: "Tailwind CSS",
    link: "/tailwindcss",
  },
  {
    icon: <SiNuxt />,
    topic: "Nuxt",
    link: "/nuxt",
  },
  {
    icon: <FaLaravel />,
    topic: "Laravel",
    link: "/laravel",
  },
];

export default function page() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {topics.map((e, index) => (
          <Link key={index} href={`/topics${e.link}`}>
            <div className="group relative flex h-[120px] items-center gap-4 overflow-hidden rounded-xl border bg-card/60 p-5 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-primary/40">
              {/* Icon container */}
              <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-border bg-secondary transition-colors duration-200 group-hover:border-primary/40">
                <span className="text-2xl text-foreground transition-colors duration-200 group-hover:text-primary">
                  {e.icon}
                </span>
              </div>

              {/* Text content */}
              <div className="relative z-10 min-w-0 flex-1">
                <h1 className="line-clamp-2 text-base font-semibold leading-tight transition-colors duration-200 group-hover:text-primary">
                  {e.topic}
                </h1>

                {/* Animated underline */}
                <div className="mt-2 h-1 w-10 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
              </div>

              {/* Arrow */}
              <svg
                className="relative z-10 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
