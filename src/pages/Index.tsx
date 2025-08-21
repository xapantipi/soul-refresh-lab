import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import EstateQuiz from "@/components/EstateQuiz";
import MeetingsOverview from "@/components/MeetingsOverview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContactForm />
      <EstateQuiz />
      <MeetingsOverview />
      <Footer />
    </main>
  );
};

export default Index;
