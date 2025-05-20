"use client";
import Articles from "@/components/home/Articles";
import Hero from "@/components/home/Hero";
import Learning from "@/components/home/Learning";
import RoleBaseRoadmap from "@/components/home/RoleBaseRoadmap";
import Teachers from "@/components/home/Teachers";
import TechUpdate from "@/components/home/TechUpdate";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Hero />
      <RoleBaseRoadmap />
      {/* <Learning /> */}
      <TechUpdate />
      <Articles />
      {/* <Teachers /> */}
    </div>
  );
}
