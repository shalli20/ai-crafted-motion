import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Clock } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Video Editor",
      company: "Lobale AI",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading video content creation for AI-powered platforms, developing innovative storytelling techniques and implementing automated editing workflows.",
      achievements: [
        "Increased content production efficiency by 150%",
        "Developed AI-assisted editing pipeline",
        "Created viral marketing campaigns reaching 2M+ views",
        "Mentored junior editors and motion graphics artists"
      ],
      skills: ["AI Integration", "Team Leadership", "Creative Direction"]
    },
    {
      title: "Motion Graphics Artist",
      company: "Creative Studios Inc.",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Specialized in creating dynamic motion graphics for commercials, explainer videos, and brand campaigns across multiple industries.",
      achievements: [
        "Delivered 200+ motion graphics projects",
        "Won 'Best Visual Effects' at Local Film Festival",
        "Reduced project turnaround time by 40%",
        "Collaborated with Fortune 500 clients"
      ],
      skills: ["After Effects", "Cinema 4D", "Brand Design"]
    },
    {
      title: "Freelance Video Editor",
      company: "Independent",
      period: "2019 - 2021",
      type: "Freelance",
      description: "Provided video editing services for small businesses, content creators, and marketing agencies, building a diverse portfolio of work.",
      achievements: [
        "Completed 150+ freelance projects",
        "Maintained 5-star client rating",
        "Built long-term partnerships with 20+ clients",
        "Specialized in social media content optimization"
      ],
      skills: ["Client Management", "Multi-platform Content", "Social Media"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through creative challenges and professional growth
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.title + exp.company}
              className="gradient-card border-border/50 p-8 hover:border-primary/50 transition-all duration-300 card-shadow hover:glow animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building2 className="h-5 w-5 mr-2" />
                        <span className="text-lg font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                        <Badge variant="outline" className="ml-3 border-primary/50 text-primary">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Core Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;