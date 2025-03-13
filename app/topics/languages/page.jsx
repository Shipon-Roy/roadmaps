import Link from "next/link";
import React from "react";
import { FaPhp } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiPython } from "react-icons/si";

const topics = [
  {
    icon: <SiJavascript />,
    topic: "Javascript",
    link: "/javascript",
  },
  {
    icon: <SiTypescript />,
    topic: "TypeScript",
    link: "/typescript",
  },
  {
    icon: <FaPhp />,
    topic: "PHP",
    link: "/php",
  },
  {
    icon: <SiPython />,
    topic: "Python",
    link: "/python",
  },
  {
    icon: <FaGolang />,
    topic: "Go",
    link: "/go",
  },
];

export default function page() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-3 w-[750px] mx-auto gap-5">
        {topics.map((e, index) => (
          <Link key={index} href={`/topics${e.link}`}>
            <div className="flex items-center gap-7 bg-slate-700 text-white p-5 w-[230px] h-[90px] rounded-md hover:bg-slate-600">
              <span className="text-5xl">{e.icon}</span>
              <h1>{e.topic}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
