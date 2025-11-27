"use client";
import { useState, useEffect } from "react";
import { classes } from "../../../public/classes";

export default function Page({ params }) {
  const { slug } = params;

  // Dynamically select the appropriate classes based on the slug
  const selectedClasses = classes[slug] || []; // If the slug is "react" or "next", it will select the corresponding classes

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
    <div className="text-white my-10">
      {/* Dynamically display the topic name */}
      <h1>{formattedSlug} Classes</h1>
      <div className="flex justify-between gap-5 w-[80vw]">
        {/* Sidebar with Clickable Classes */}
        <div className="w-[25%]">
          {/* Set max height and enable scrolling */}
          <h2 className="text-lg font-semibold mb-4">Other Classes</h2>
          <ul className="space-y-4 max-h-[400px] overflow-y-auto ">
            {selectedClasses.length > 0 ? (
              selectedClasses.map(
                // Limit to 10 classes
                (cls, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentVideo(cls)}
                    className={`cursor-pointer flex items-center gap-3 hover:bg-gray-800 p-2 rounded-md ${
                      currentVideo === cls ? "bg-gray-700" : ""
                    }`} // Add active class styling here
                  >
                    <span className="text-sm">{cls.title}</span>
                  </li>
                )
              )
            ) : (
              <li className="text-gray-400">
                No classes available for this topic.
              </li>
            )}
          </ul>
        </div>

        {/* Video Player */}
        <div className="w-[75%]">
          {selectedClasses.length > 0 && currentVideo ? (
            <iframe
              width="100%"
              height="auto"
              src={`${currentVideo.link}?autoplay=1`} // Auto play enabled by appending '?autoplay=1'
              title={currentVideo.title}
              className="aspect-video rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="text-center text-gray-400">
              {/* Placeholder when no class is selected */}
              {selectedClasses.length === 0
                ? "No classes available for this topic."
                : "Select a class to watch"}
            </div>
          )}

          {/* Previous and Next Class Buttons */}
          {selectedClasses.length > 0 && currentVideo && (
            <div className="mt-4 flex gap-4">
              {/* Previous Class Button */}
              <button
                onClick={handlePreviousClass}
                disabled={selectedClasses.indexOf(currentVideo) === 0} // Disable button on first class
                className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
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
                className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
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
