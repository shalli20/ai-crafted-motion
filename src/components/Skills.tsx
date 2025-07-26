import { Card } from "@/components/ui/card";
import { Monitor, Film, Palette, Zap, Camera, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Adobe Premiere Pro",
      icon: Film,
      level: 95,
      description: "Professional video editing and timeline management"
    },
    {
      name: "After Effects",
      icon: Layers,
      level: 90,
      description: "Motion graphics and visual effects creation"
    },
    {
      name: "DaVinci Resolve",
      icon: Palette,
      level: 85,
      description: "Color grading and professional finishing"
    },
    {
      name: "AI Video Tools",
      icon: Zap,
      level: 88,
      description: "Automated editing and AI-powered workflows"
    },
    {
      name: "Cinema 4D",
      icon: Monitor,
      level: 80,
      description: "3D modeling and animation integration"
    },
    {
      name: "Camera Work",
      icon: Camera,
      level: 82,
      description: "Cinematography and shot composition"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering the tools and techniques that bring creative visions to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="group gradient-card border-border/50 p-6 hover:border-primary/50 transition-all duration-300 card-shadow hover:glow animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <skill.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {skill.description}
              </p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;