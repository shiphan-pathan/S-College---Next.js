import Navbar from "@/features/layout/Navbar";
import Footer from "@/features/layout/Footer";
import Hero from "@/features/college/components/Hero";
import Highlights from "@/features/college/components/Highlights";
import About from "@/features/college/components/About";
import Courses from "@/features/college/components/Courses";
import Placements from "@/features/college/components/Placements";
import Contact from "@/features/college/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Courses />
      <Placements />
      <Contact />
      <Footer />
    </>
  );
}