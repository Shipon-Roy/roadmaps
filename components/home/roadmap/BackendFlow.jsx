import Container from "@/components/ui/Container";
import React, { useState } from "react";

const contentData = {
  Internet: {
    title: "Internet ",
    description:
      "Understand how the internet works #HTTP/HTTPS #Client vs Server #DNS, hosting, and domains Basics of front-end: HTML, CSS, JavaScript (enough to understand how data flows)",
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
  JavaScript: {
    title: "JavaScript ",
    description:
      "Data types, variables, loops, functions #Scopes & closures # Callbacks, Promises, async/await #ES6+ features: destructuring, spread/rest, arrow functions, modules #Error handling (try...catch) #Working with the filesystem (fs module)",
    cards: [],
  },
  Nodejs: {
    title: "Nodejs Modal Content",
    description:
      "Node.js runtime and event loop Core modules: http, fs, path, os, events #Working with npm/yarn #Handling asynchronous code #process, global, environment variables",
    cards: [],
  },
  Expressjs: {
    title: "Git Modal Content",
    description:
      "Set up a basic server #Routes and middlewares #Handling requests/responses #Error handling #Serving static files #Using templating engines (e.g., EJS – optional)",
    cards: [],
  },
  Databases: {
    title: "Databases Modal Content",
    description:
      "SQL: PostgreSQL or MySQL #Use an ORM like Sequelize or Knex.js *🔹 NoSQL: MongoDB (very popular with Node.js) #Mongoose (ODM for MongoDB)",
    cards: [],
  },
  "RESTful APIs": {
    title: "RESTful APIs Modal Content",
    description:
      "CRUD operations (Create, Read, Update, Delete) #Routing and controllers #Request validation (e.g., Joi, express-validator) #JSON responses #Status codes",
    cards: [],
  },
  "Authentication & Authorization": {
    title: "Authentication & Authorization Modal Content",
    description:
      "User login/signup with password hashing (bcrypt) #JWT (JSON Web Token) #Sessions and cookies #OAuth (Google, GitHub)",
    cards: [],
  },
  "Testing & Debugging": {
    title: "Testing & Debugging Modal Content",
    description:
      "Use tools like: Postman or Insomnia for API testing #console.log or debug for troubleshooting #Testing libraries: Jest, Supertest, Mocha/Chai",
    cards: [],
  },
  "Version Control with Git": {
    title: "Version Control with Git Modal Content",
    description:
      "Git basics: clone, add, commit, push, pull, branch #Host code on GitHub",
    cards: [],
  },
  Deployment: {
    title: "Deployment Modal Content",
    description:
      "Use platforms like: Render #Vercel (for frontend) #Railway #Heroku (easy for beginners) #Add .env files and manage secrets securely #Set up scripts and production environments",
    cards: [],
  },
  "Build Real Projects": {
    title: "Build Real Projects Modal Content",
    description:
      "Example project ideas: Task manager API #Blogging platform #Authentication system #Chat app with real-time data (WebSockets + socket.io)",
    cards: [],
  },
  "Advanced Topics": {
    title: "Advanced Topics Modal Content",
    description:
      "WebSockets & socket.io (for real-time apps) #GraphQL (alternative to REST) #Rate limiting, API security (helmet, CORS) #Docker (containerization) #CI/CD (GitHub Actions)",
    cards: [],
  },
};

export default function BackendFlow() {
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
            onClick={() => handleModalToggle("Internet")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-code text-3xl mb-4"></i>
            Internet
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* CSS Block */}
          <div
            onClick={() => handleModalToggle("JavaScript")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-paint-brush text-3xl mb-4"></i>
            JavaScript
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* JavaScript Block */}
          <div
            onClick={() => handleModalToggle("Nodejs")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fas fa-laptop-code text-3xl mb-4"></i>
            Nodejs
          </div>

          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* React.js Block */}
          <div
            onClick={() => handleModalToggle("Expressjs")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Expressjs
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>

          {/* React.js Block */}
          <div
            onClick={() => handleModalToggle("Databases")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Databases
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* RESTful APIs Block */}
          <div
            onClick={() => handleModalToggle("RESTful APIs")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            RESTful APIs
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Authentication & Authorization Block */}
          <div
            onClick={() => handleModalToggle("Authentication & Authorization")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Authentication & Authorization
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Testing & Debugging Block */}
          <div
            onClick={() => handleModalToggle("Testing & Debugging")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Testing & Debugging
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Version Control with Git Block */}
          <div
            onClick={() => handleModalToggle("Version Control with Git")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Version Control with Git
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Deployment Block */}
          <div
            onClick={() => handleModalToggle("Deployment")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Deployment
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Build Real Projects Block */}
          <div
            onClick={() => handleModalToggle("Build Real Projects")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Build Real Projects
          </div>
          {/* Down Arrow */}
          <span className="text-white text-4xl animate-bounce">↓</span>
          {/* Advanced Topics Block */}
          <div
            onClick={() => handleModalToggle("Advanced Topics")}
            className="text-[#7dd3fc] font-semibold text-md mx-auto text-center rounded-lg shadow-xl p-6 w-[14rem] bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <i className="fab fa-react text-3xl mb-4"></i>
            Advanced Topics
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
