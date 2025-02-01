import Banner from "@/components/topics/Banner";
import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Banner />
      <div className="text-white flex items-center gap-5">
        <Link href="/topics/">
          <button>All Topics </button>
        </Link>
        <Link href="/topics/framework">
          <button>Frameworks</button>
        </Link>
        <Link href="/topics/languages">
          <button>Languages</button>
        </Link>
        <Link href="/topics/tooling">
          <button>Tooling</button>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
