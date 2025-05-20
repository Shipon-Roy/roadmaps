import Link from "next/link";
import React from "react";
import {
  FaReact,
  FaGitSquare,
  FaDocker,
  FaPhp,
  FaLaravel,
  FaAngular,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiJavascript,
  SiMysql,
  SiTypescript,
  SiPython,
  SiVuedotjs,
  SiTailwindcss,
  SiNuxtdotjs,
} from "react-icons/si";
import Container from "../ui/Container";
import { FaGolang } from "react-icons/fa6";
import { TbBrandVscode } from "react-icons/tb";

const topics = [
  {
    icon: <FaReact />,
    topic: "React",
    link: "/react",
  },
  {
    icon: <SiNextdotjs />,
    topic: "next",
    link: "/next",
  },
  {
    icon: <SiJavascript />,
    topic: "Javascript",
    link: "/javascript",
  },
  {
    icon: <FaGitSquare />,
    topic: "Git",
    link: "/git",
  },
  {
    icon: <FaDocker />,
    topic: "Docker",
    link: "/docker",
  },
  {
    icon: <TbBrandVscode />,
    topic: "VS Code",
    link: "/vscode",
  },
  {
    icon: <SiMysql />,
    topic: "MySQL",
    link: "/mysql",
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
    <Container>
      <div className="my-20">
        <div className="grid grid-cols-5 gap-5">
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
    </Container>
  );
}
