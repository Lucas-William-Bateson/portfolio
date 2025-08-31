import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { Credits } from "@/components/credits";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-mobile-main md:bg-main md:bg-fixed bg-cover bg-center">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Credits />
    </main>
  );
}
