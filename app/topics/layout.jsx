/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../../components/ui/Container";
import Banner from "./../../components/topics/Banner";

export default function layout({ children }) {
  const pathname = usePathname();

  const getActiveClass = (path) => {
    const isActive = pathname === path;
    return `group relative px-8 py-4 bg-gradient-to-r from-slate-700 via-${
      isActive ? "blue-800/60" : "blue-800/30"
    } to-slate-800 backdrop-blur-xl rounded-3xl border ${
      isActive
        ? "border-blue-400/60 ring-2 ring-blue-400/30 shadow-3xl shadow-blue-500/30 scale-105"
        : "border-white/20 shadow-2xl"
    } hover:shadow-3xl hover:shadow-blue-500/25 hover:-translate-y-2 hover:from-blue-600 hover:to-purple-700/50 transition-all duration-500 text-white font-bold text-lg overflow-hidden ${
      isActive ? "ring-2 ring-blue-400/40" : ""
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900">
      <Banner />
      <Container>
        <div className="flex items-center justify-center gap-4 py-12 -m-4">
          <Link href="/topics/">
            <button className={getActiveClass("/topics/")}>
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                All Topics
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-[100%] group-hover:translate-x-[110%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link href="/topics/framework">
            <button
              className={`${getActiveClass("/topics/framework")} ${
                pathname === "/topics/framework"
                  ? "via-emerald-800/70 hover:from-emerald-600 hover:to-teal-700/60 hover:shadow-emerald-500/40"
                  : ""
              }`}
            >
              <span className="relative z-10">Frameworks</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-[100%] group-hover:translate-x-[110%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link href="/topics/languages">
            <button
              className={`${getActiveClass("/topics/languages")} ${
                pathname === "/topics/languages"
                  ? "via-purple-800/70 hover:from-purple-600 hover:to-pink-700/60 hover:shadow-purple-500/40"
                  : ""
              }`}
            >
              <span className="relative z-10">Languages</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-[100%] group-hover:translate-x-[110%] transition-transform duration-1000" />
            </button>
          </Link>

          <Link href="/topics/tooling">
            <button
              className={`${getActiveClass("/topics/tooling")} ${
                pathname === "/topics/tooling"
                  ? "via-orange-800/70 hover:from-orange-600 hover:to-red-700/60 hover:shadow-orange-500/40"
                  : ""
              }`}
            >
              <span className="relative z-10">Tooling</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 -skew-x-12 -translate-x-[100%] group-hover:translate-x-[110%] transition-transform duration-1000" />
            </button>
          </Link>
        </div>
      </Container>
      <div>{children}</div>
    </div>
  );
}
