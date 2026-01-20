// Component'leri import ediyoruz
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
