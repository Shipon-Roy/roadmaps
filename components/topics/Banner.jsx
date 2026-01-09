import React from "react";

export default function Banner() {
  return (
    <div className="h-[300px] text-center py-12 bg-gradient-to-r from-slate-800 via-blue-900/30 to-slate-900 p-8 rounded-2xl mx-6 mt-8 border border-white/20 shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#7dd3fc] font-bold text-4xl md:text-5xl mb-6 drop-shadow-xl bg-gradient-to-r from-[#7dd3fc] to-blue-400 bg-clip-text bg-white/20 p-4 rounded-2xl inline-block">
          Explore By Topic
        </h1>
        <p className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500">
          All series are categorized into various topics. This should provide
          you with an alternate way to decide what to learn next, whether
          it be a particular framework, language, or tool.
        </p>
      </div>
    </div>
  );
}
