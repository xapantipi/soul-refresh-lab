import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, GraduationCap, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const expertise = [
    "Retirement Planning",
    "Estate Planning", 
    "Financial Consulting",
    "Real Estate Planning"
  ];

  const languages = ["English", "Spanish"];

  const stats = [
    { icon: Users, value: "3,000+", label: "Students Annually" },
    { icon: Award, value: "20+", label: "Years Experience" },
    { icon: TrendingUp, value: "100%", label: "Client Satisfaction" },
    { icon: GraduationCap, value: "Expert", label: "Training & Seminars" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Todd Civiello</span>
            </h2>
          </div>

          {/* Main Content */}
          <Card className="mb-12 shadow-elegant-lg border-primary/10 animate-slide-in-left">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Todd G. Civiello has served the Retirement and Estate Planning Industry with the highest level of 
                  professionalism for over 20 years. Throughout his career, Todd has demonstrated his ability to use in-depth 
                  knowledge and experience to offer clients an unparalleled level of service and support in their planning 
                  endeavors.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Mr. Civiello educates over 3,000 students and prospective clients annually. He focuses his time providing 
                  specialized training and seminars to those seeking information and assistance in retirement planning, 
                  financial planning, insurance, and government benefits.
                </p>

                {/* Quote */}
                <div className="bg-gradient-card p-6 rounded-2xl border border-primary/10 mb-8 relative">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-xl font-medium text-primary italic leading-relaxed">
                    "Great education leads to understanding. Understanding leads to planning. Planning yields options!"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-elegant-md border-primary/10 hover:shadow-elegant-lg transition-all duration-300 animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expertise & Languages */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-elegant-md border-primary/10 animate-slide-in-left">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {expertise.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant-md border-primary/10 animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language, index) => (
                    <Badge 
                      key={index}
                      variant="secondary" 
                      className="px-4 py-2 bg-secondary/20 text-secondary-foreground border-secondary/30 hover:bg-secondary/30 transition-colors"
                    >
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;