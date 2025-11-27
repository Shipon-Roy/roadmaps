"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Articles from "../components/home/Articles";
import Hero from "../components/home/Hero";
import TechUpdate from "../components/home/TechUpdate";
import Mern from "../components/home/Mern";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Hero />
      <Mern />
      {/* <RoleBaseRoadmap /> */}
      {/* <Learning /> */}
      <TechUpdate />
      <Articles />
      {/* <Teachers /> */}
    </div>
  );
}
