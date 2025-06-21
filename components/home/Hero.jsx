"use client";
import Container from "@/app/ui/Container";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

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
              className="text-gray-300 text-xl leading-7 max-w-[500px] mt-5 "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              neque porro quibusdam, voluptatibus reiciendis id magnam,
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
