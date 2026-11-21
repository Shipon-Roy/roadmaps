"use client";
import React, { useState, useEffect, useMemo } from "react";
import { classes } from "../../../public/classes";

export default function Page({ params }) {
  const { slug } = React.use(params);

  // Keep the selected classes list stable across renders so the effect dependency stays predictable.
  const selectedClasses = useMemo(() => classes[slug] ?? [], [slug]);

  // State to hold the current selected video
  const [currentVideo, setCurrentVideo] = useState(null);

  // Set the default video to the first class in the selected classes when it changes
  useEffect(() => {
    if (selectedClasses.length > 0) {
      setCurrentVideo(selectedClasses[0]); // Set the first class as default
    }
  }, [selectedClasses]); // Only run when selectedClasses changes

  // Capitalizing the first letter of the slug for the page title
  const formattedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  // Function to play the next class
  const handleNextClass = () => {
    const currentIndex = selectedClasses.indexOf(currentVideo);
    const nextIndex = currentIndex + 1;

    if (nextIndex < selectedClasses.length) {
      setCurrentVideo(selectedClasses[nextIndex]); // Move to the next class
    }
  };

  // Function to play the previous class
  const handlePreviousClass = () => {
    const currentIndex = selectedClasses.indexOf(currentVideo);
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      setCurrentVideo(selectedClasses[previousIndex]); // Move to the previous class
    }
  };

  return (
    <div className="my-10">
      {/* Dynamically display the topic name */}
      <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
        {formattedSlug} <span className="gradient-text">Classes</span>
      </h1>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:justify-between">
        {/* Sidebar with Clickable Classes */}
        <div className="w-full lg:w-[25%]">
          {/* Set max height and enable scrolling */}
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Other Classes
          </h2>
          <ul className="max-h-[400px] space-y-2 overflow-y-auto">
            {selectedClasses.length > 0 ? (
              selectedClasses.map(
                // Limit to 10 classes
                (cls, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentVideo(cls)}
                    className={`cursor-pointer rounded-sm border p-2.5 text-sm transition-colors duration-200 ${
                      currentVideo === cls
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`} // Add active class styling here
                  >
                    <span>{cls.title}</span>
                  </li>
                ),
              )
            ) : (
              <li className="text-sm text-muted-foreground">
                No classes available for this topic.
              </li>
            )}
          </ul>
        </div>

        {/* Video Player */}
        <div className="w-full lg:w-[75%]">
          {selectedClasses.length > 0 && currentVideo ? (
            <iframe
              width="100%"
              height="auto"
              src={`${currentVideo.link}?autoplay=1`} // Auto play enabled by appending '?autoplay=1'
              title={currentVideo.title}
              className="aspect-video rounded-xl border bg-card"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="rounded-xl border bg-card/60 p-10 text-center text-sm text-muted-foreground">
              {/* Placeholder when no class is selected */}
              {selectedClasses.length === 0
                ? "No classes available for this topic."
                : "Select a class to watch"}
            </div>
          )}

          {/* Previous and Next Class Buttons */}
          {selectedClasses.length > 0 && currentVideo && (
            <div className="mt-4 flex gap-3">
              {/* Previous Class Button */}
              <button
                onClick={handlePreviousClass}
                disabled={selectedClasses.indexOf(currentVideo) === 0} // Disable button on first class
                className="inline-flex h-10 items-center justify-center rounded-sm bg-blue-600 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Previous Class
              </button>

              {/* Next Class Button */}
              <button
                onClick={handleNextClass}
                disabled={
                  selectedClasses.indexOf(currentVideo) ===
                  selectedClasses.length - 1
                } // Disable button on last class
                className="inline-flex h-10 items-center justify-center rounded-sm bg-blue-600 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Next Class
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
