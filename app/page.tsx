import { Nav } from "@/components/chrome/Nav";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
