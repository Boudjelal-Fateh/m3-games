
import WallOfLove from "@/components/WallOfLove";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Productivity } from "@/components/ProductivitySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import NewSection from "@/components/NewSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <Productivity />
      <div className="relative">
        <ExpertiseSection />
        <NewSection />
      </div>
      <PricingSection />
      <WallOfLove />
      <Footer />
    </main>
  );
}
