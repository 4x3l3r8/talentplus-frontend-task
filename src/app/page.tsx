import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { Pattern } from "@/components/Hero/Pattern";
import { Navbar } from "@/components/Navbar";
import { ViewCoursesSection } from "@/components/ViewCoursesSection";
import Image from "next/image";
import pattern from "../../public/images/pattern.svg";

export default function Home() {
  return (
    <div className="z-0 h-auto overflow-x-clip font-satoshi">
      {/* <Pattern /> */}
      <Image src={pattern} alt={""} className={"absolute object-cover -z-[1] right-0 left-0 h-screen w-screen bg-brand-600"} />
      <Navbar />
      <Hero />
      <ViewCoursesSection />
    </div>
  );
}
