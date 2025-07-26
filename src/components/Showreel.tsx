import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Eye } from "lucide-react";
import showreel1 from "@/assets/showreel-1.jpg";
import showreel2 from "@/assets/showreel-2.jpg";
import showreel3 from "@/assets/showreel-3.jpg";

const Showreel = () => {
  const showreelItems = [
    {
      id: 1,
      title: "Cinematic Commercial",
      description: "Product showcase with dynamic camera movements",
      image: showreel1,
      duration: "2:30"
    },
    {
      id: 2,
      title: "Motion Graphics Reel",
      description: "Creative visual effects and animations",
      image: showreel2,
      duration: "1:45"
    },
    {
      id: 3,
      title: "AI-Powered Workflow",
      description: "Automated editing with AI assistance",
      image: showreel3,
      duration: "3:15"
    }
  ];

  return (
    <section id="showreel" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Showreel</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my finest video editing and motion graphics work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showreelItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group gradient-card border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 card-shadow hover:glow animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground">
                    <Play className="mr-2 h-5 w-5" />
                    Watch
                  </Button>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {item.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <Button variant="outline" size="sm" className="border-primary/50 text-primary hover:bg-primary/10">
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showreel;