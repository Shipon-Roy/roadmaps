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
            <div className="group relative h-[120px] flex items-center gap-6 p-6 bg-gradient-to-br from-slate-800/80 via-slate-700/60 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-green-500 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-500 overflow-hidden shadow-xl">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/0 to-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-[110%] transition-transform duration-1000" />

              {/* Icon container */}
              <div className="relative w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-white/20 group-hover:bg-blue-400/20 group-hover:border-blue-400/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg z-10">
                <span className="text-3xl group-hover:text-blue-300 drop-shadow-2xl transition-all duration-500">
                  {e.icon}
                </span>
              </div>

              {/* Text content */}
              <div className="min-w-0 flex-1 relative z-10">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200/80 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-700 leading-tight line-clamp-2">
                  {e.topic}
                </h1>

                {/* Animated underline */}
                <div className="mt-2 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-20 transition-all duration-700" />
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
