import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Shield, Award, Users } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Robert & Linda M.",
      location: "Naples, FL",
      text: "Todd's expertise in estate planning helped us protect our family's financial future. His thorough approach and professional guidance made a complex process simple and understandable.",
      rating: 5,
      category: "Estate Planning"
    },
    {
      name: "Michael T.",
      location: "Fort Myers, FL", 
      text: "Professional, knowledgeable, and trustworthy. Todd educated me on retirement strategies I never knew existed. Highly recommend his services.",
      rating: 5,
      category: "Retirement Planning"
    },
    {
      name: "Susan & David K.",
      location: "Bonita Springs, FL",
      text: "Todd's seminars are incredibly informative. His ability to explain complex financial concepts in simple terms is exceptional. We felt confident in our decisions.",
      rating: 5,
      category: "Financial Education"
    }
  ];

  const credentials = [
    {
      icon: Shield,
      title: "Licensed Professional",
      description: "Fully licensed and regulated financial advisor"
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Two decades of estate planning expertise"
    },
    {
      icon: Users,
      title: "3,000+ Clients Annually",
      description: "Trusted by thousands of families"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by <span className="bg-gradient-hero bg-clip-text text-transparent">Thousands of Families</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional estate planning services with a proven track record of success and client satisfaction.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="shadow-elegant-lg border-primary/10 hover:shadow-elegant-xl transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-3 border-primary/30 text-primary">
                      {testimonial.category}
                    </Badge>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  
                  <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
            {credentials.map((credential, index) => (
              <div 
                key={index}
                className="text-center animate-slide-in-right" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant-md">
                  <credential.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {credential.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;