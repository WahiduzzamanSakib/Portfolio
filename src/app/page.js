import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import FeaturedProjectsPage from "@/components/FeaturedProject";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Achievements from "@/components/Achievements";


export default function Home() {
  return (
    <main>
      <Hero /> 
      <About />
      <Features/>

      <Skills />
      <TechStack />
     <FeaturedProjectsPage/>

      <Education />
     <Achievements />
      <Contact/>
    </main> 
  );
}
