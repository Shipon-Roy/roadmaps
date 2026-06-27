import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Container from "./ui/Container";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-700/50 py-4">
      <Container>
        <div className="flex justify-between items-center text-white">
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              RoadMaps
            </h1>
          </Link>
          <ul className="flex justify-center items-center gap-1">
            {[
              { href: "/topics", label: "Topics" },
              { href: "/posts", label: "Posts" },
              { href: "/blogs", label: "Blogs" },
              { href: "/podcast", label: "Podcast" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <li className="list-none px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/60 transition-all duration-200">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className="p-2 rounded-full hover:bg-gray-700/60 transition-all duration-200 cursor-pointer">
            <CgProfile className="text-gray-300 hover:text-white text-xl" />
          </div>
        </div>
      </Container>
    </div>
  );
}
