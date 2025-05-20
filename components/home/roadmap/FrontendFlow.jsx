import Container from "@/app/ui/Container";
import React, { useState, useEffect } from "react";

const contentData = {
  HTML: {
    title: "HTML Modal Content",
    description: "Learn the basics of HTML and structure your webpages.",
    cards: [
      {
        title: "HTML Card 1",
        description: "Learn the basics of HTML and structure your webpages.",
        icon: "fas fa-html5",
      },
      {
        title: "HTML Card 2",
        description: "Structure web elements using HTML tags.",
        icon: "fas fa-html5",
      },
    ],
  },
  CSS: {
    title: "CSS Modal Content",
    description:
      "Learn how to style HTML elements with CSS, including properties like color, layout, and animations.",
    cards: [],
  },
  JavaScript: {
    title: "JavaScript Modal Content",
    description:
      "Explore how to add interactivity to your website with JavaScript, including DOM manipulation, events, and logic.",
    cards: [],
  },
  Git: {
    title: "Git Modal Content",
    description:
      "Learn how to build dynamic user interfaces with Git, using components, hooks, and state management.",
    cards: [],
  },
  "React.js": {
    title: "React.js Modal Content",
    description:
      "Learn how to build dynamic user interfaces with React.js, using components, hooks, and state management.",
    cards: [],
  },
};

export default function FrontendFlow() {
  // State to manage modal visibility and content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Function to open modal and set content dynamically
  const handleModalToggle = (content) => {
    setModalContent(contentData[content]);
    setIsModalOpen(true);
  };

  // Close the modal when clicking outside the modal content
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="mt-20">
      <Container>
        <div className="flex justify-center items-center flex-col space-y-6">
          {/* HTML Block with onClick to open Modal */}
          <div
            onClick={() => handleModalToggle("HTML")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-code text-3xl mb-4"></i>
            HTML
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* CSS Block */}
          <div
            onClick={() => handleModalToggle("CSS")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-paint-brush text-3xl mb-4"></i>
            CSS
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* JavaScript Block */}
          <div
            onClick={() => handleModalToggle("JavaScript")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-laptop-code text-3xl mb-4"></i>
            JavaScript
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* React.js Block */}
          <div
            onClick={() => handleModalToggle("Git")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Git
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* React.js Block */}
          <div
            onClick={() => handleModalToggle("React.js")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            React.js
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && modalContent && (
          <div
            onClick={handleOutsideClick}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 transition-opacity duration-500 opacity-100"
          >
            <div className="bg-gradient-to-r from-sky-600 to-gray-900 p-8 rounded-lg shadow-xl w-[80%] md:w-[60%] lg:w-[40%] transform transition-all duration-500 opacity-100 scale-100 hover:scale-105 hover:opacity-90 relative">
              <h2 className="text-3xl font-semibold text-white mb-6">
                {modalContent.title}
              </h2>

              {/* Content inside Modal based on the block clicked */}
              <div className="text-white">
                <h3 className="font-semibold">{modalContent.description}</h3>
                {modalContent.cards.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {modalContent.cards.map((card, index) => (
                      <div
                        key={index}
                        className="bg-blue-500 p-6 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300"
                      >
                        <i className={`${card.icon} text-4xl mb-4`}></i>
                        <h3 className="font-semibold">{card.title}</h3>
                        <p>{card.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Close Icon */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl font-semibold hover:text-red-500"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
