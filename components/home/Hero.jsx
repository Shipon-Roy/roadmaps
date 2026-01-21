"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="p-10   my-10 flex justify-between items-center">
          <div>
            <h1
              data-aos="fade-up"
              className="text-[#7dd3fc] max-w-[250px] text-md shadow-md p-2 bg-gray-700 rounded-lg bg-muted px-3 py-1 text-sm"
            >
              Welcome to Free Learning Path
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-[#7dd3fc] font-bold text-6xl max-w-[500px] mt-4"
            >
              Learning Path For Developer
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="3000"
              className="text-gray-300 text-md leading-7 max-w-[500px] mt-5 "
            >
              Welcome to Free Learning Path, the ultimate destination for anyone
              looking to learn programming languages for free! Whether you’re a
              beginner starting from scratch or an experienced developer looking
              to sharpen your skills, we offer a wide range of resources to help
              you grow.
            </p>
          </div>
          <div className="w-[50%] h-full">
            <DotLottieReact
              autoplay="true"
              loop="true"
              src="/images.lottie"
              background="transparent"
              style={{ width: "100%", height: "100%" }}
            ></DotLottieReact>
          </div>
        </div>
      </Container>
    </div>
  );
}
