import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="noise-overlay" aria-hidden />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
