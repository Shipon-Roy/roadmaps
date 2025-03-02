import Container from "@/app/ui/Container";
import React, { useState } from "react";

export default function FrontendFlow() {
  // State to manage modal visibility and content
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Function to open modal and set content dynamically
  const handleModalToggle = (content) => {
    setModalContent(content);
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
            onClick={() => handleModalToggle("React.js")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            React.js
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            onClick={handleOutsideClick}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50 transition-opacity duration-500 opacity-100"
          >
            <div className="bg-gradient-to-r from-sky-600 to-gray-900 p-8 rounded-lg shadow-xl w-[80%] md:w-[60%] lg:w-[40%] transform transition-all duration-500 opacity-100 scale-100 hover:scale-105 hover:opacity-90 relative">
              <h2 className="text-3xl font-semibold text-white mb-6">
                {modalContent} Modal shipon
              </h2>

              {/* Content inside Modal based on the block clicked */}
              {modalContent === "HTML" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-blue-500 p-6 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300">
                    <i className="fas fa-html5 text-4xl mb-4"></i>
                    <h3 className="font-semibold">HTML Card 1</h3>
                    <p>Learn the basics of HTML and structure your webpages.</p>
                  </div>
                  <div className="bg-green-500 p-6 rounded-lg shadow-lg text-white text-center transform hover:scale-105 transition-all duration-300">
                    <i className="fas fa-html5 text-4xl mb-4"></i>
                    <h3 className="font-semibold">HTML Card 2</h3>
                    <p>Structure web elements using HTML tags.</p>
                  </div>
                </div>
              )}
              {modalContent === "CSS" && (
                <div className="text-white">
                  <h3 className="font-semibold">CSS Modal Content</h3>
                  <p>
                    Learn how to style HTML elements with CSS, including
                    properties like color, layout, and animations.
                  </p>
                </div>
              )}
              {modalContent === "JavaScript" && (
                <div className="text-white">
                  <h3 className="font-semibold">JavaScript Modal Content</h3>
                  <p>
                    Explore how to add interactivity to your website with
                    JavaScript, including DOM manipulation, events, and logic.
                  </p>
                </div>
              )}
              {modalContent === "React.js" && (
                <div className="text-white">
                  <h3 className="font-semibold">React.js Modal Content</h3>
                  <p>
                    Learn how to build dynamic user interfaces with React.js,
                    using components, hooks, and state management.
                  </p>
                </div>
              )}

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
