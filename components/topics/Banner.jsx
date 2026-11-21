import React from "react";

export default function Banner() {
  return (
    <div className="mx-4 mt-8 rounded-xl border bg-card/60 p-8 shadow-md backdrop-blur-sm sm:mx-6">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          Explore
        </span>
        <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Explore By <span className="gradient-text">Topic</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
          All series are categorized into various topics. This should provide
          you with an alternate way to decide what to learn next, whether it be
          a particular framework, language, or tool.
        </p>
      </div>
    </div>
  );
}
