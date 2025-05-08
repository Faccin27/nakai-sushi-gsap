import About from "@/components/About";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-nakai-navy">
    <Navbar />
    <Hero />
    <About />
    <Menu />
  </div>
  );
}
