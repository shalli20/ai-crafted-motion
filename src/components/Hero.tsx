import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/30 blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-accent/30 blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-primary/20 blur-lg animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Mark Shalli</span>
            <span className="block gradient-text mt-2">Video Editor</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="block">Motion Graphics Artist</span>
            <span className="block mt-2 text-primary font-medium">Crafting Cinematic Stories with AI & Creativity</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium glow hover:animate-glow-pulse">
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg">
              View Projects
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce mt-16">
          <ArrowDown className="h-8 w-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;