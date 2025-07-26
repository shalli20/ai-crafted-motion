import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Github, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mark@lobaleai.com",
      href: "mailto:mark@lobaleai.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/markshalli",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/markshalli",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/markshalli",
      color: "hover:text-gray-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next video project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a compelling commercial, engaging social media content, 
                  or innovative AI-powered video solutions, I'm here to help bring your 
                  creative vision to reality.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.label} className="gradient-card border-border/50 p-4 hover:border-primary/50 transition-all duration-300">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow My Work</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Card className="gradient-card border-primary/20 p-8 card-shadow glow">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Ready to Start Your Project?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss your video needs and create something amazing together. 
                      I respond to all inquiries within 24 hours.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium glow hover:animate-glow-pulse"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary/10 px-8 py-3 text-lg"
                    >
                      Download Portfolio
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      Available for both short-term projects and long-term collaborations
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;