import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main>
      <Hero /> 
      <About />
      <Features/>

      <TechStack />
      
      <Education/>
      <Contact/>
    </main> 
  );
}
