import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
