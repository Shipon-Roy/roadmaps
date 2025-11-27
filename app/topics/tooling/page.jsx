import Link from "next/link";
import { FaGitSquare, FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Container from "../../../components/ui/Container";

const topics = [
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
];

export default function page() {
  return (
    <Container>
      <div className="mt-14  mb-36">
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
