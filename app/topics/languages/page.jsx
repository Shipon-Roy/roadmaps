import Link from "next/link";
import React from "react";
import { FaPhp } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiPython } from "react-icons/si";

const topics = [
  {
    icon: <SiJavascript />,
    topic: "Javascript",
    link: "/javascript",
  },
  {
    icon: <SiTypescript />,
    topic: "TypeScript",
    link: "/typescript",
  },
  {
    icon: <FaPhp />,
    topic: "PHP",
    link: "/php",
  },
  {
    icon: <SiPython />,
    topic: "Python",
    link: "/python",
  },
  {
    icon: <FaGolang />,
    topic: "Go",
    link: "/go",
  },
];

export default function page() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {topics.map((e, index) => (
          <Link key={index} href={`/topics${e.link}`}>
            <div className="group relative h-[120px] flex items-center gap-6 p-6 bg-gradient-to-br from-slate-800/70 via-slate-700/50 to-slate-900/70 backdrop-blur-xl rounded-2xl border border-green-500 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-3 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-500 overflow-hidden shadow-xl">
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-[110%] transition-transform duration-1000" />
              
              {/* Icon container */}
              <div className="relative w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-white/20 group-hover:bg-purple-400/20 group-hover:border-purple-400/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-600 shadow-lg z-10">
                <span className="text-3xl group-hover:text-purple-300 drop-shadow-2xl transition-all duration-500">
                  {e.icon}
                </span>
              </div>
              
              {/* Text content */}
              <div className="min-w-0 flex-1 relative z-10">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200/80 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-700 leading-tight line-clamp-2">
                  {e.topic}
                </h1>
                
                {/* Animated underline */}
                <div className="mt-2 w-0 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:w-24 transition-all duration-700 origin-left" />
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
