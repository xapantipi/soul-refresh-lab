import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Company Info */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-4">
              Affinity Advisory Network
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              Protecting your legacy, securing your future.
            </p>
            
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Globe className="w-5 h-5" />
                <span>www.toddciviello.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-5 h-5" />
                <span>info@affinitynetwork.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="text-center animate-slide-in-right">
            <h4 className="text-xl font-semibold mb-6">
              Get Started Today
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <Phone className="group-hover:rotate-12 transition-transform" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Mail />
                Send Message
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Affinity Advisory Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;