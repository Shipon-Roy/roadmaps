"use client";
import React, { useState } from "react";
import Container from "../ui/Container";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/V-_O7nl0Ii0",
  "https://www.youtube.com/embed/oHg5SJYRHA0",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/fJ9rUzIMcZQ",
  "https://www.youtube.com/embed/60ItHLz5WEA",
];

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="py-10">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-[#7dd3fc] font-bold text-3xl">
            Learning Path Developer Podcast
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto mt-5 px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            neque porro quibusdam, voluptatibus reiciendis id magnam, doloremque
            omnis eligendi...
          </p>
        </div>

        {/* When a video is selected, show player + sidebar */}
        {selectedVideo && (
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Main Video (70%) */}
            <div className="w-full lg:w-[70%] h-[500px] aspect-video">
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                className="w-full h-full rounded-lg"
                title="Main Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>

            {/* Sidebar Videos (30%) — Scrollable */}
            <div className="w-full lg:w-[30%] max-h-[500px] overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
              {videos
                .filter((video) => video !== selectedVideo)
                .map((video, index) => (
                  <div
                    key={index}
                    className="cursor-pointer aspect-video hover:opacity-80 transition"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <iframe
                      src={video}
                      className="w-full h-full rounded-md pointer-events-none"
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* If no video selected, show 4x4 grid */}
        {!selectedVideo && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="cursor-pointer aspect-video hover:opacity-80 transition"
                onClick={() => setSelectedVideo(video)}
              >
                <iframe
                  src={video}
                  className="w-full h-full rounded-md pointer-events-none"
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
