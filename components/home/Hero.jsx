"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 py-16">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Welcome to Free Learning Path
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-5xl lg:text-7xl font-extrabold leading-tight text-white"
            >
              Learning Path
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                For Developers
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-gray-400 text-lg leading-relaxed max-w-[520px] mx-auto lg:mx-0"
            >
              The ultimate destination for anyone looking to learn programming
              for free. Structured roadmaps, curated resources, and expert
              guidance to help you grow as a developer.
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/topics">
                <button className="px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5">
                  Explore Topics
                </button>
              </Link>
              <Link href="/blogs">
                <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  Read Blogs
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex gap-8 justify-center lg:justify-start pt-4"
            >
              {[
                { value: "10+", label: "Topics" },
                { value: "Free", label: "Resources" },
                { value: "MERN", label: "Stack" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Lottie */}
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="flex-1 max-w-[520px] w-full"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <DotLottieReact
                autoplay="true"
                loop="true"
                src="/images.lottie"
                background="transparent"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
