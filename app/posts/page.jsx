import React from "react";
import Container from "../ui/Container";

export default function page() {
  return (
    <div className="flex justify-center items-center h-[620px]">
      <Container>
        <div className=" text-center">
          <h1 className="text-[#7dd3fc] font-bold text-3xl">
            Latest Tech Update post
          </h1>
          <p className="text-gray-300">
            In addition to our full-time instructors, we often reach out to top
            developers in the programming space for their expertise.
          </p>
        </div>
      </Container>
    </div>
  );
}
