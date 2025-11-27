"use client";

import { MDXProvider } from "@mdx-js/react";
import { components } from "./MDXComponents";

export default function MDXProviderWrapper({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
