"use client";
import Container from "@/app/ui/Container";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Container>
        <div className="p-10   my-10 flex justify-between items-center">
          <div>
            <h1 className="text-[#7dd3fc] max-w-[250px] text-md shadow-md p-2 bg-gray-700 rounded-lg bg-muted px-3 py-1 text-sm">
              Welcome to Free Learning Path
            </h1>
            <h1 className="text-[#7dd3fc] font-bold text-6xl max-w-[500px] mt-4">
              Learning Path For Developer
            </h1>
            <p className="text-gray-300 text-xl leading-7 max-w-[500px] mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              neque porro quibusdam, voluptatibus reiciendis id magnam,
            </p>
          </div>
          <div className=" ">
            <Image
              className="rounded"
              src="/images.png"
              alt=" "
              width={400}
              height={400}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
