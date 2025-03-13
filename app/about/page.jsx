import React from "react";
import Container from "../ui/Container";

export default function About() {
  return (
    <Container>
      <h1 className="text-blue-300 font-bold text-3xl ">About Us</h1>
      <p className="text-white">
        Welcome to <span className="text-sky-400">Free Learning Path</span>, the
        ultimate destination for anyone looking to learn programming languages
        for free! Whether you&apos;re a beginner starting from scratch or an
        experienced developer looking to sharpen your skills, we offer a wide
        range of resources to help you grow.
      </p>
      <p className="text-white">
        At <span className="text-sky-400">Free Learning Path</span>, we believe
        that learning to code should be accessible to everyone, regardless of
        their location, background, or financial situation. That&apos;s why we’ve
        dedicated ourselves to providing high-quality programming tutorials,
        courses, and exercises that are completely free of charge.
      </p>
    </Container>
  );
}
