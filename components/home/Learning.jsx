import Container from "@/app/ui/Container";
import React, { Fragment } from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const elements = [
  {
    heading: "1",
    title: "HTML",
    direction: "right",
  },
  {
    heading: "2",
    title: "CSS",
    direction: "left",
  },
  {
    heading: "3",
    title: "JAVASCRIPT",
    direction: "right",
  },
  {
    heading: "4",
    title: "REACT",
    direction: "left",
  },
  {
    heading: "5",
    title: "NEXT",
    direction: "right",
  },
  {
    heading: "6",
    title: "NODE",
    direction: "left",
  },
  {
    heading: "7",
    title: "Express",
    direction: "right",
  },
  {
    heading: "8",
    title: "Mongoose",
    direction: "left",
  },
];

export default function Learning() {
  return (
    <div>
      <Container>
        <h1 className="text-center text-white">MERN</h1>
        <div className="flex flex-col gap-y-3 w-full my-5">
          <Cricle />
          {elements.map((e, index) => (
            <Fragment key={index}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                {e.direction === "left" ? (
                  <Card heading={e.heading} title={e.title} />
                ) : (
                  <div></div>
                )}
                <Piller />
                {e.direction === "right" ? (
                  <Card heading={e.heading} title={e.title} />
                ) : (
                  <div></div>
                )}
              </div>
              {index < elements.length - 1 && <Cricle />}
            </Fragment>
          ))}
          <Cricle />
        </div>
      </Container>
    </div>
  );
}

const Cricle = () => {
  return (
    <div className="rounded-full bg-gradient-to-t from-blue-400 to-teal-400 p-2 mx-auto">
      <FaArrowAltCircleDown />
    </div>
  );
};
const Piller = () => {
  return (
    <div className="bg-gradient-to-t from-blue-400 to-teal-400 rounded-t-full rounded-b-full w-2 h-full  mx-auto"></div>
  );
};
const Card = ({ heading, title }) => {
  return (
    <div className="flex flex-col w-[200px] bg-gray-700 text-white border gap-y-2 rounded-xl p-4 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-2 hover:drop-shadow-2xl ">
      <h1 className=" font-bold text-lg border-b">{heading}</h1>
      <h3 className="text-sm ">{title}</h3>
    </div>
  );
};
