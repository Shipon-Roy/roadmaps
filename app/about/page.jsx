import React from "react";
import Container from "../../components/ui/Container";

export default function About() {
  return (
    <Container>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-blue-300 font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
            About Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <p className="text-white text-lg leading-relaxed">
              Welcome to <span className="text-sky-400 font-semibold bg-sky-400/20 px-2 py-1 rounded-lg">Free Learning Path</span>, 
              the ultimate destination for anyone looking to learn programming languages for free! 
              Whether you`&rsquo;`re a beginner starting from scratch or an experienced developer looking to sharpen your skills, 
              we offer a wide range of resources to help you grow.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
            <p className="text-white text-lg leading-relaxed">
              At <span className="text-sky-400 font-semibold bg-sky-400/20 px-2 py-1 rounded-lg">Free Learning Path</span>, 
              we believe that learning to code should be accessible to everyone, regardless of their location, 
              background, or financial situation. That`&rsquo;`s why we've dedicated ourselves to providing high-quality 
              programming tutorials, courses, and exercises that are completely{' '}
              <span className="text-green-400 font-bold">free of charge</span>.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h1 className="text-blue-300 font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-300 to-sky-400 bg-clip-text text-transparent drop-shadow-lg">
              Our Mission
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl max-w-3xl mx-auto">
            <p className="text-white text-xl leading-relaxed text-center font-medium">
              Our mission is to empower individuals around the world with the skills they need 
              to succeed in the ever-evolving tech industry. We are committed to offering a 
              <span className="text-sky-400 font-bold bg-sky-400/20 px-3 py-1 rounded-full">free, comprehensive learning platform</span> 
              where anyone, regardless of their experience, can dive into the world of programming 
              and software development.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
    </Container>
  );
}
