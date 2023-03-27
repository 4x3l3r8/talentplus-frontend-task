import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-auto overflow-x-clip bg-brand-600">
      <Navbar />
      <Hero />
    </div>
  );
}
