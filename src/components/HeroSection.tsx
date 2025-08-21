import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail } from "lucide-react";
import phoneImage from "@/assets/phone-mockup.jpg";
import portraitImage from "@/assets/todd-civiello-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(217_91%_50%),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <div className="animate-slide-in-left">
            <Badge className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30">
              www.toddciviello.com
            </Badge>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-elegant-lg border-4 border-white">
                <img 
                  src={portraitImage} 
                  alt="Todd Civiello - Estate Planning Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
                  <span className="text-2xl lg:text-3xl font-medium text-muted-foreground block mb-2">Professional Estate Planning</span>
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Todd G. Civiello
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Comprehensive retirement and estate planning services with over 20 years of professional expertise. 
                  Helping families secure their financial future with strategic planning solutions.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Badge variant="outline" className="px-3 py-1 text-sm border-primary/30 text-primary">
                    Licensed Professional
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-primary/30 text-primary">
                    Estate Planning Expert
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-primary/30 text-primary">
                    20+ Years Experience
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                <MessageCircle className="group-hover:scale-110 transition-transform mr-2" />
                Start Consultation
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Phone className="group-hover:rotate-12 transition-transform mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="ghost" size="lg" className="group text-primary hover:text-primary-light">
                <Mail className="group-hover:scale-110 transition-transform mr-2" />
                Contact Today
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-medium">Available for Consultation</span>
              </div>
              <div className="font-medium">3,000+ Clients Served Annually</div>
              <div className="font-medium">Licensed Professional</div>
            </div>
          </div>

          {/* Phone Mockup Section */}
          <div className="animate-slide-in-right lg:animate-float">
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-3xl shadow-elegant-lg">
                <div className="bg-card border border-primary/10 rounded-2xl p-6 shadow-elegant-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-primary">Welcome</h3>
                    <Button variant="hero" size="sm">
                      <MessageCircle className="w-4 h-4" />
                      TEXT my Agent
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        A
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">AFFINITY</h4>
                        <p className="text-sm text-muted-foreground">ADVISORY NETWORK</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-xl p-4">
                      <h4 className="font-medium mb-2">Short Quiz</h4>
                      <Button variant="default" size="sm" className="w-full">
                        Next
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm font-medium text-primary mb-2">YOUR GOALS</p>
                      <div className="bg-primary/10 rounded-lg p-3">
                        <p className="text-sm text-primary font-medium">
                          Hello, and welcome to Affinity Advisory Network app!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;