import { classes } from "@/public/classes";
import React from "react";

export default function Page({ params }) {
  // const { id } = params;
  // const video = classes.find((video) => video.id === id);

  // if (!video) {
  //   return <p className="text-white">Class Not Found</p>;
  // }
  return (
    <div className=" text-white my-10">
      {params.slug}
      <div className="flex gap-5">
        <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {classes.slice(0, 1).map((i, index) => {
            return (
              <iframe
                key={index}
                width="100%"
                src={i.link}
                title={i.title}
                className="aspect-video rounded"
                frameBorder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            );
          })}
        </div>
        <div className="w-[30%]">
          <h1>Related Videos:</h1>
        </div>
      </div>
    </div>
  );
}
