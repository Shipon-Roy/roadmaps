"use client";

import Container from "@/app/ui/Container";
import { useState } from "react";

// Class data
const classData = {
  w3: {
    name: "W3Schools HTML Class",
    description: "Learn HTML from W3Schools.",
    videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
  },
  stacklearner: [
    {
      name: "HTML Class 1",
      description: "Intro to HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    },
    {
      name: "HTML Class 2",
      description: "Advanced HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
    },
    {
      name: "HTML Class 3",
      description: "Further HTML topics from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "HTML Class 1",
      description: "Intro to HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    },
    {
      name: "HTML Class 2",
      description: "Advanced HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
    },
    {
      name: "HTML Class 3",
      description: "Further HTML topics from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "HTML Class 1",
      description: "Intro to HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    },
    {
      name: "HTML Class 2",
      description: "Advanced HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
    },
    {
      name: "HTML Class 3",
      description: "Further HTML topics from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      name: "HTML Class 1",
      description: "Intro to HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
    },
    {
      name: "HTML Class 2",
      description: "Advanced HTML from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
    },
    {
      name: "HTML Class 3",
      description: "Further HTML topics from Stack Learner.",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    // Add more items if needed
  ],
  html: {
    name: "HTML Basics",
    description: "Basic concepts of HTML for beginners.",
    videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
  },
};

// Extract YouTube video ID
function getYouTubeVideoId(url) {
  const match = url.match(/[?&]v=([^&]+)/);
  return match ? match[1] : null;
}

export default function Page({ params }) {
  const classInfo = classData[params.classId];

  if (!classInfo) {
    return (
      <div className="p-4 text-red-500">
        Class not found for ID: {params.classId}
      </div>
    );
  }

  const isArray = Array.isArray(classInfo);
  const initialVideo = isArray ? classInfo[0] : classInfo;

  const [selectedVideo, setSelectedVideo] = useState(initialVideo);

  const videoId = getYouTubeVideoId(selectedVideo.videoUrl);

  return (
    <Container>
      <div className="my-10">
        <h1 className="animate-slide-in text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded shadow-md p-2 w-[13rem] bg-gray-700">
          Learn MERN
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-6 my-20">
        {/* Main video player */}
        <div className="w-full lg:w-2/2 aspect-video relative">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={selectedVideo.name}
              className="absolute top-0 left-0 w-full h-full"
            />
          ) : (
            <p className="text-red-500">Invalid video link</p>
          )}
        </div>

        {/* Video list or single video details */}
        <div className="w-full lg:w-1/4 text-white space-y-4">
          <h1 className="text-xl font-bold">{selectedVideo.name}</h1>
          <p className="text-gray-300">{selectedVideo.description}</p>

          {isArray && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold border-b border-gray-600 pb-1">
                Related Classes:
              </h2>
              <div className="mt-2 max-h-72 overflow-y-auto space-y-2">
                {classInfo.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideo(item)}
                    className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${
                      selectedVideo.videoUrl === item.videoUrl
                        ? "bg-gray-900 font-bold"
                        : "bg-gray-800"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
