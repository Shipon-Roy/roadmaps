import Container from "@/app/ui/Container";
import { topics } from "@/public/classes";
import React from "react";

export default function layout({ children }) {
  return (
    <Container>
      <div className="flex gap-5 my-20">
        <div>
          {topics.map((e, index) => (
            <h1 className="text-white" key={index}>
              {/* {e.topic} */}
            </h1>
          ))}
        </div>
        <div> {children}</div>
      </div>
    </Container>
  );
}
