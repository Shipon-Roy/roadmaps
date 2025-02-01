import Link from "next/link";
import React from "react";

export default function RoleBaseRoadmap() {
  return (
    <div className=" mt-20">
      <h1 className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded shadow-md p-2  w-[13rem] bg-gray-700">
        Role Base Roadmaps
      </h1>
      <ul className="text-gray-400 grid grid-flow-col mt-10 justify-center gap-4">
        <Link href="">
          <li className="border border-sky-400 p-3 rounded w-[10rem]">
            Frontend
          </li>
        </Link>
        <Link href="">
          <li className="border border-sky-400 p-3 rounded w-[10rem]">
            Backend
          </li>
        </Link>
        <Link href="">
          <li className="border border-sky-400 p-3 rounded w-[10rem]">
            Full Stack
          </li>
        </Link>
      </ul>
    </div>
  );
}
