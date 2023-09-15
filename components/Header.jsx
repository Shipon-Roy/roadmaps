import Container from "@/ui/Container";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="bg-gray-800 py-4">
      <Container>
        <div className="flex justify-between items-center  text-white">
          <Link href="/">
            <h1>RoadMaps</h1>
          </Link>
          <ul className="flex justify-center items-center gap-5">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blogs">
              <li>Blogs</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <div>
            <CgProfile />
          </div>
        </div>
      </Container>
    </div>
  );
}
