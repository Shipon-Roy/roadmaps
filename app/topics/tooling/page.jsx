import Link from "next/link";
import { FaGitSquare, FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Container from "../../../components/ui/Container";

const topics = [
  {
    icon: <FaGitSquare />,
    topic: "Git",
    link: "/git",
  },
  {
    icon: <FaDocker />,
    topic: "Docker",
    link: "/docker",
  },
  {
    icon: <TbBrandVscode />,
    topic: "VS Code",
    link: "/vscode",
  },
  {
    icon: <SiMysql />,
    topic: "MySQL",
    link: "/mysql",
  },
];

export default function page() {
  return (
    <Container>
      <div className="mt-14 mb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {topics.map((e, index) => (
            <Link key={index} href={`/topics${e.link}`}>
              <div className="group relative h-[120px] flex items-center gap-6 p-6 bg-gradient-to-br from-slate-800/70 via-slate-700/50 to-slate-900/70 backdrop-blur-xl rounded-2xl border border-green-500 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-3 hover:from-emerald-600/20 hover:to-teal-600/20 transition-all duration-500 overflow-hidden shadow-xl">
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 -skew-x-12 -translate-x-full group-hover:translate-x-[110%] transition-transform duration-1000" />
                
                {/* Icon container */}
                <div className="relative w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-white/20 group-hover:bg-emerald-400/20 group-hover:border-emerald-400/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-600 shadow-lg z-10">
                  <span className="text-3xl group-hover:text-emerald-300 drop-shadow-2xl transition-all duration-500">
                    {e.icon}
                  </span>
                </div>
                
                {/* Text content */}
                <div className="min-w-0 flex-1 relative z-10">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-white to-emerald-200/80 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-700 leading-tight line-clamp-2">
                    {e.topic}
                  </h1>
                  
                  {/* Animated accent line */}
                  <div className="mt-2 w-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full group-hover:w-20 transition-all duration-700 origin-left" />
                </div>
                
                {/* Corner indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
