// components/MDXComponents.js
// 🚫 DO NOT add "use client"
// সব রঙ design token থেকে আসে, তাই light/dark দুই থিমেই কাজ করবে।

export const components = {
  h1: (props) => (
    <h1
      className="mb-6 mt-8 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mb-4 mt-6 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="my-4 text-base leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 list-inside list-disc text-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 list-inside list-decimal text-foreground" {...props} />
  ),
  li: (props) => <li className="my-2 ml-4" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-primary underline-offset-4 hover:underline"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded border border-border bg-secondary px-1.5 py-0.5 font-mono text-sm text-primary"
      {...props}
    />
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-xl border border-border bg-card p-4 text-sm text-foreground">
      <code>{children?.props?.children}</code>
    </pre>
  ),
  blockquote: (props) => (
    <blockquote
      className="my-4 border-l-4 border-primary bg-primary/5 py-2 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
};
