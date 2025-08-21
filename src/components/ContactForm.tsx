import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Information Submitted!",
      description: "Our estate planning experts will contact you soon.",
    });
    setFormData({ fullName: "", phoneNumber: "", emailAddress: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant-lg border-primary/10 animate-fade-in">
            <CardHeader className="bg-gradient-primary text-center p-8 rounded-t-xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                Client Information
              </h2>
              <p className="text-primary-foreground/90">
                Get in touch with our estate planning experts
              </p>
            </CardHeader>
            
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div className="space-y-3 animate-slide-in-left">
                  <Label htmlFor="fullName" className="text-lg font-medium text-foreground flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="h-14 text-lg border-primary/20 focus:border-primary/50 shadow-elegant-sm"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-3 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                  <Label htmlFor="phoneNumber" className="text-lg font-medium text-foreground flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="h-14 text-lg border-primary/20 focus:border-primary/50 shadow-elegant-sm"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                  <Label htmlFor="emailAddress" className="text-lg font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="h-14 text-lg border-primary/20 focus:border-primary/50 shadow-elegant-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Submit Information
                  </Button>
                </div>
              </form>

              {/* Professional Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">Secure & Confidential</div>
                    <div className="text-xs text-muted-foreground">Your information is protected</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">No-Cost Consultation</div>
                    <div className="text-xs text-muted-foreground">Free initial assessment</div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-foreground">Licensed Professional</div>
                    <div className="text-xs text-muted-foreground">20+ years experience</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;