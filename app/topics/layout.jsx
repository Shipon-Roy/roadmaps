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
    return `group relative inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "border-primary/40 bg-primary/10 text-primary"
        : "border-border bg-secondary/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
    }`;
  };

  return (
    <div className="min-h-screen">
      <Banner />
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 py-10">
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
