import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import IntroSection from "@/components/IntroSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <IntroSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
