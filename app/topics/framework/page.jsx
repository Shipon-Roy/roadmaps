import Link from "next/link";
import React from "react";
import { FaReact, FaLaravel, FaAngular } from "react-icons/fa";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiNuxtdotjs,
} from "react-icons/si";

const topics = [
  {
    icon: <FaReact />,
    topic: "React",
    link: "/react",
  },
  {
    icon: <SiNextdotjs />,
    topic: "Next",
    link: "/next",
  },
  {
    icon: <SiVuedotjs />,
    topic: "Vue",
    link: "/vue",
  },
  {
    icon: <FaAngular />,
    topic: "Angular",
    link: "/angular",
  },
  {
    icon: <SiTailwindcss />,
    topic: "Tailwind CSS",
    link: "/tailwindcss",
  },
  {
    icon: <SiNuxtdotjs />,
    topic: "Nuxt",
    link: "/nuxt",
  },
  {
    icon: <FaLaravel />,
    topic: "Laravel",
    link: "/laravel",
  },
];

export default function page() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-4 w-[990px] mx-auto gap-5">
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
