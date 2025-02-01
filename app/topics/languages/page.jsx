import React from "react";
import { FaReact } from "react-icons/fa";

const topics = [
  {
    icon: <FaReact />,
    topic: "React",
  },
  {
    icon: <FaReact />,
    topic: "React",
  },
  {
    icon: <FaReact />,
    topic: "React",
  },
  {
    icon: <FaReact />,
    topic: "React",
  },
];

export default function page() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-3 w-[750px] mx-auto gap-5">
        {topics.map((e, index) => (
          <div
            key={index}
            className="flex items-center gap-7 bg-slate-700 text-white p-5 w-[230px] h-[90px] rounded-md hover:bg-slate-600"
          >
            <span>{e.icon}</span>
            <h1>{e.topic}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
