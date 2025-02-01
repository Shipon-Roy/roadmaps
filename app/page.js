import Articles from "@/components/home/Articles";
import Hero from "@/components/home/Hero";
import Learning from "@/components/home/Learning";
import RoleBaseRoadmap from "@/components/home/RoleBaseRoadmap";
import Teachers from "@/components/home/Teachers";
import TechUpdate from "@/components/home/TechUpdate";
import Image from "next/image";

export default function Home() {
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
