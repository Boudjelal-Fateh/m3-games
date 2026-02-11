
import WallOfLove from "@/components/WallOfLove";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Productivity } from "@/components/ProductivitySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import NewSection from "@/components/NewSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AiAgents from "@/components/AiAgents";
import AboutUs from "@/components/About-us";


export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#060606' }}>
      <Navbar />
      <HeroSection />
      <Productivity />
      <AboutUs />
      
      <div className="relative">
        <ExpertiseSection />
        <NewSection />
      </div>
      <AiAgents />
      <PricingSection />
      <CTASection/>
      {/* <WallOfLove /> */}
      <Footer />
    </main>
  );
}
