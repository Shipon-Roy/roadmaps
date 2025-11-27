import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Container from "./ui/Container";

export default function Header() {
  return (
    <div className="bg-gray-800 py-4">
      <Container>
        <div className="flex justify-between items-center  text-white">
          <Link href="/">
            <h1>RoadMaps</h1>
          </Link>
          <ul className="flex justify-center items-center gap-5">
            <Link href="/topics">
              <li>Topics</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
            <Link href="/podcast">
              <li>Podcast</li>
            </Link>
            <Link href="/about">About Us</Link>
          </ul>
          <div>
            <CgProfile />
          </div>
        </div>
      </Container>
    </div>
  );
}
