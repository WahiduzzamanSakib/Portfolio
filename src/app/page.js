import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import FeaturedProjectsPage from "@/components/FeaturedProject";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main>
      <Hero /> 
      <About />
      <Features/>

      <TechStack />
      <Skills />
     <FeaturedProjectsPage/>

      <Education/>
      <Contact/>
    </main> 
  );
}
