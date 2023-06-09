import { Banner } from "@/components/Banner";
import { FaqSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { Pattern } from "@/components/Hero/Pattern";
import { JoinUs } from "@/components/JoinUs";
import { Navbar } from "@/components/Navbar";
import { PopularSection } from "@/components/PopularCoursesSection";
import { Testimonials } from "@/components/Testimonials";
import { ViewCoursesSection } from "@/components/ViewCoursesSection";
import { WhyWeAreBestSection } from "@/components/WhyWeAreBestSection";
import Image from "next/image";
import pattern from "../../public/images/pattern.svg";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="z-0 h-auto overflow-x-clip font-satoshi">
      {/* <Pattern /> */}
      <Image src={pattern} alt={""} className={"absolute object-cover -z-[1] right-0 left-0 h-screen w-screen bg-brand-600"} />
      <Navbar />
      <Hero />
      <ViewCoursesSection />
      <WhyWeAreBestSection />
      <PopularSection />
      <Testimonials />
      <JoinUs />
      <FaqSection />
      <Footer />
    </div>
  );
}
