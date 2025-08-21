import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EstateQuiz from "@/components/EstateQuiz";
import MeetingsOverview from "@/components/MeetingsOverview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <EstateQuiz />
      <MeetingsOverview />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
