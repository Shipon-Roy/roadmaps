"use client";
import { classes } from "@/public/classes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page({ params }) {
  const { slug } = params;

  // Dynamically filter classes based on the slug
  const filteredClasses = classes.filter((cls) => {
    return cls.tags && cls.tags.includes(slug);
  });

  // State to hold the current selected video
  const [currentVideo, setCurrentVideo] = useState(null);

  // Set the default video to the first class in the filtered list when it changes
  useEffect(() => {
    if (filteredClasses.length > 0) {
      setCurrentVideo(filteredClasses[0]); // Set the first class as default
    }
  }, [filteredClasses]); // Only run when filteredClasses changes

  // Capitalizing the first letter of the slug for the page title
  const formattedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="text-white my-10">
      {/* Dynamically display the topic name */}
      <h1>{formattedSlug} Classes</h1>
      <div className="flex justify-between gap-5 w-[80vw]">
        {/* Sidebar with Clickable Classes */}
        <div className="w-[25%]">
          <h2 className="text-lg font-semibold mb-4">Other Classes</h2>
          <ul className="space-y-4">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((cls, index) => (
                <li
                  key={index}
                  onClick={() => setCurrentVideo(cls)}
                  className="cursor-pointer flex items-center gap-3 hover:bg-gray-800 p-2 rounded-md"
                >
                  {/* Displaying class thumbnail */}
                  <Image
                    src={cls.thumbnail}
                    alt={cls.title}
                    width={100}
                    height={80}
                    className="object-cover rounded"
                  />
                  <span className="text-sm">{cls.title}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-400">
                No classes available for this topic.
              </li>
            )}
          </ul>
        </div>

        {/* Video Player */}
        <div className="w-[75%]">
          {filteredClasses.length > 0 && currentVideo ? (
            <iframe
              width="100%"
              height="auto"
              src={currentVideo.link}
              title={currentVideo.title}
              className="aspect-video rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-center text-gray-400">
              {/* Placeholder when no class is selected */}
              {filteredClasses.length === 0
                ? "No classes available for this topic."
                : "Select a class to watch"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
