import React from "react";
import Container from "../../components/ui/Container";

export default function page() {
  return (
    <div className="min-h-[620px] flex items-center justify-center py-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900/80 backdrop-blur-xl overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-white/5 to-blue-500/10 rounded-4xl backdrop-blur-2xl animate-spin-slow" />
      </div>

      <Container>
        <div className="relative z-10 text-center max-w-4xl mx-auto transform animate-in fade-in-0 zoom-in-95 duration-1000">
          {/* Main heading with gradient badge */}
          <div className="inline-flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-emerald-500/10 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl group hover:shadow-3xl hover:shadow-blue-500/25 transition-all duration-700 hover:-translate-y-2">
            <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-ping" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#7dd3fc] via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl pb-4">
              Latest Tech Update post
            </h1>
            <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          </div>

          {/* Description card */}
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-700 group hover:bg-white/10 max-w-3xl mx-auto transform hover:-translate-y-3">
            <div className="relative p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-blue-500/5 rounded-3xl -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />

              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-medium leading-relaxed relative z-10 max-w-2xl mx-auto">
                In addition to our full-time instructors, we often reach out to
                top developers in the programming space for their expertise.
              </p>

              {/* Decorative shine effect */}
              <div className="absolute top-1/2 right-0 w-48 h-48 bg-gradient-to-l from-white/20 to-transparent rounded-4xl blur-xl -skew-x-12 transform translate-x-32 group-hover:translate-x-48 transition-transform duration-1000 opacity-60" />
            </div>
          </div>

          {/* Floating CTA badge */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-3xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-500 text-white font-semibold text-lg tracking-wide">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Stay Updated
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
