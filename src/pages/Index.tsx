import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Showreel from "@/components/Showreel";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Showreel />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;