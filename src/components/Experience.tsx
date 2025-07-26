import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Clock } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Administrative Aide III (Clerk II)",
      company: "Department of Education - Division of City Schools Caloocan",
      period: "January 2024 - Present",
      type: "Full-time",
      description: "Supporting educational administration through learner information management, research coordination, and creative content automation for educational programs and events.",
      achievements: [
        "Streamlined Learner Information System management processes",
        "Automated creative program and event banner production",
        "Implemented video highlight automation for educational events",
        "Enhanced M&E monitoring and evaluation of educational programs"
      ],
      skills: ["Educational Technology", "Data Management", "Creative Automation"]
    },
    {
      title: "Freelance Video Editor",
      company: "The Manila Times TV",
      period: "February 2022 - December 2023",
      type: "Freelance",
      description: "Executed comprehensive post-production workflows for broadcast television content, ensuring high-quality video output for news and media programs.",
      achievements: [
        "Delivered professional post-production for major TV network",
        "Managed end-to-end video editing workflows",
        "Optimized audio design and sequence compression",
        "Maintained consistent quality standards for broadcast content"
      ],
      skills: ["Broadcast Editing", "Sound Design", "Post-Production"]
    },
    {
      title: "Freelance e-Learning Developer",
      company: "Bhasa Learning System, Co. Inc. (Bihasa)",
      period: "August 2021 - Present",
      type: "Freelance",
      description: "Transforming traditional educational content into engaging interactive digital experiences, focusing on literature and educational material enhancement.",
      achievements: [
        "Converted non-interactive content to highly interactive formats",
        "Improved user engagement through interactive literature design",
        "Analyzed user feedback to optimize learning experiences",
        "Recommended system improvements based on user data"
      ],
      skills: ["e-Learning Development", "Interactive Design", "Educational Content"]
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