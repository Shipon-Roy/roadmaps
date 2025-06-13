"use client";

import { useState, useEffect } from "react";
import Container from "@/app/ui/Container";

// ✅ Static class data organized by topic and provider
const classData = {
  html: {
    w3: [
      {
        name: "HTML - Introduction",
        description:
          "This video is a short introduction to HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/it1rTvBcfRg?si=otKNcwSkcFfX1v9b",
      },
      {
        name: "HTML - Editors",
        description:
          "This video is an overview of HTML Editors, and how to edit HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/bBP0ckEln4Y?si=2l-wglzZj_8RrKS1",
      },
      {
        name: "HTML - Elements ",
        description:
          "This video explains what HTML Elements are. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/vIoO52MdZFE?si=PP9YjYzJYopA5pSC",
      },
      {
        name: "HTML - Attributes ",
        description:
          "This video explains what HTML attributes are, and how they work. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/yMX901oVtn8?si=FM85nqUPRwxG4jNO",
      },
      {
        name: "HTML - Headings",
        description:
          "This video is an explanation of Headings in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/9gHPpwq6IaY?si=1OAfbzFRnUekQMUm",
      },
      {
        name: "HTML - Paragraphs",
        description:
          "This video is an explanation of Paragraphs in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/qis4kAOThLw?si=XdOT9uu8XqfrQP-_",
      },
      {
        name: "HTML - Styles",
        description:
          "This video is a short introduction to styles in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/twdNPJfbj_8?si=PqyX_O_0PZJ0clIJ",
      },
      {
        name: "HTML - Formatting ",
        description:
          "This video shows how to format text in HTML.Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/7FqQLqNIEY8?si=CZRIRyFZZJQoBwMN",
      },
      {
        name: "HTML - Comments",
        description:
          "This video is a short introduction to comments, and how they work in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/229HYq40vaA?si=zFU8LWCupB963Enn",
      },
      {
        name: "HTML - Colors",
        description:
          "This video is a short introduction to Colors in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/zCrolmdqmF8?si=Q9fsCdLeuQQNy0LO",
      },
      {
        name: "HTML - CSS",
        description:
          "This video is an introduction to CSS and how to add it to HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/cZHp-Oozg6I?si=l7N0YXWth-DYQ_rg",
      },
      {
        name: "HTML - Links",
        description:
          "This video explains how what links are and how they work in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/HA6bByKdAQM?si=yJMCYPV0LmJeLAQf",
      },
      {
        name: "HTML - Images",
        description:
          "This video explains images in HTML, and offers advice on how to use them. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/FmoYRiepmOE?si=FSVFRq_AqMZKw3kE",
      },
      {
        name: "HTML - Tables",
        description:
          "This video explains how what tables are in HTML, and how to build them to show information on websites. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/e62D-aayveY?si=ww68jcfl3jiMUfLd",
      },
      {
        name: "HTML - Lists",
        description:
          "This video explains lists in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/-QuK8taGLCs?si=qWSKoI6JA6p7-B2Q",
      },
      {
        name: "HTML - Block and Inline",
        description:
          "This video explains how different types of elements are displayed. Specifically block and inline.<br /> Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/M4n-WSkehmI?si=IPoAH1f9x55oD5HE",
      },
      {
        name: "HTML - Classes",
        description:
          "This video explains the class attribute is and how to use them in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/tWIkDOJo0Ts?si=bOXU3GrYh7mmdKXD",
      },
      {
        name: "HTML - Id ",
        description:
          "This video explains the id attribute in HTML and how to use it in HTML, CSS and JavaScript. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/rZ0k516qZmc?si=D4VLsKhPRMfjVV_P",
      },
      {
        name: "HTML - Iframes",
        description:
          "This video explains iframes, and how to use them on your website. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/qP23O70ve7k?si=PBqrdLjs7m7YKYfF",
      },
      {
        name: "HTML - JavaScript",
        description:
          "This video is an introduction to JavaScript and how it works in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/uSgcWDkwc3U?si=caXUzJ1lrm8a004G",
      },
      {
        name: "HTML - Head  ",
        description:
          "This video explains the head element in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/WeuVX5x2MJE?si=kZGgf8ODlOM-Appl",
      },
      {
        name: "HTML - Forms",
        description:
          "This video explains forms and how to use them in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/VLeERv_dR6Q?si=r_GnTAYW4N4h4oIp",
      },
      {
        name: "HTML - Bloopers",
        description:
          "'Bloopers' from the HTML Video tutorial from w3schools.com Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/HHxPoYUrSQ0?si=AFJ6A7w7ZG2LHQ0t",
      },
    ],
    stacklearner: [
      {
        name: "HTML Stack Class 1",
        description: "Intro to HTML from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=4UZrsTqkcW4",
      },
      {
        name: "HTML Stack Class 2",
        description: "Advanced HTML from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      },
    ],
  },
  css: {
    w3: [
      {
        name: "CSS Class 1",
        description: "CSS basics by W3.",
        videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
    ],
    stacklearner: [
      {
        name: "CSS Stack Class 1",
        description: "CSS basics by Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
    ],
  },
  gitgithub: {
    anisul: [
      {
        name: "JavaScript Class 1",
        description: "JavaScript intro from Anisul Islam.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
  javascript: {
    anisul: [
      {
        name: "JavaScript Class 1",
        description: "JavaScript intro from Anisul Islam.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
};

// ✅ Improved YouTube Video ID Extractor
function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    if (parsedUrl.searchParams.has("v")) {
      return parsedUrl.searchParams.get("v");
    }

    const match = url.match(
      /(?:\/shorts\/|\/watch\?v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  } catch (err) {
    return null;
  }
}

export default function Page({ params }) {
  const { topic, provider } = params;

  const topicData = classData?.[topic]?.[provider];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(
    topicData && topicData.length > 0 ? topicData[0] : null
  );

  useEffect(() => {
    if (topicData && topicData.length > 0) {
      setSelectedVideo(topicData[0]);
      setCurrentIndex(0);
    }
  }, [topic, provider]);

  if (!topicData) {
    return (
      <div className="p-4 text-red-500">
        No class found for topic: <strong>{topic}</strong> & provider:{" "}
        <strong>{provider}</strong>
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < topicData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedVideo(topicData[newIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedVideo(topicData[newIndex]);
    }
  };

  const videoId = getYouTubeVideoId(selectedVideo?.videoUrl);

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-[#7dd3fc] font-semibold text-md text-center rounded shadow-md p-2 w-[13rem] mx-auto bg-gray-700">
          Learn {topic.toUpperCase()} - {provider.toUpperCase()}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6 my-10">
        {/* Video Player Section */}
        <div className="w-full lg:w-3/4">
          <div className="aspect-video mb-4 rounded-2xl overflow-hidden shadow-2xl">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={selectedVideo?.name}
                className="w-full h-full"
              />
            ) : (
              <p className="text-red-500 p-4 text-center bg-gray-800 rounded">
                Invalid or unsupported video link.
              </p>
            )}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              aria-label="Previous video"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === topicData.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              aria-label="Next video"
            >
              Next
            </button>
          </div>
          <div className="my-10">
            <h2 className="text-xl text-white font-bold">
              {selectedVideo?.name}
            </h2>
            <p className="text-gray-300">{selectedVideo?.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 text-white space-y-4">
          <div className="mt-6">
            <h3 className="text-lg font-semibold border-b border-gray-600 pb-1">
              Related Classes
            </h3>
            <div className="mt-2 max-h-96 overflow-y-auto space-y-2">
              {topicData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVideo(item);
                    setCurrentIndex(index);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${
                    selectedVideo?.videoUrl === item.videoUrl
                      ? "bg-gray-900 font-bold"
                      : "bg-gray-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
