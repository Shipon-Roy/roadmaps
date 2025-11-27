// components/MDXComponents.js
// 🚫 DO NOT add "use client"

export const components = {
  h1: (props) => (
    <h1 className="text-4xl font-bold text-gray-300 mb-6 mt-8" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold text-gray-400 mb-4 mt-6" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-md font-semibold text-gray-400 mb-4 mt-6" {...props} />
  ),
  p: (props) => (
    <p className="text-base text-gray-500 my-4 leading-relaxed" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-gray-200 my-4" {...props} />
  ),
  li: (props) => <li className="ml-4 mb-2 my-4" {...props} />,
  code: (props) => (
    <code
      className="bg-gray-800 border-2 border-green-500 text-gray-300 px-2 py-1 rounded text-xl font-mono"
      {...props}
    />
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto my-4 text-sm">
      <code>{children?.props?.children}</code>
    </pre>
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4"
      {...props}
    />
  ),
};
