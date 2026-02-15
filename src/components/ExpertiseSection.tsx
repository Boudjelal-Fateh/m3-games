"use client"
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    id: "future-proof",
    title: "Future-Proof Solutions",
    description: "We don't just deliver code — we build scalable systems that grow with your business.",
    features: ["Scalable Architecture", "Modern Technology Stack", "Cloud-Native Solutions", "Performance Optimization"],
    image: "/Background-1.png"
  },
  {
    id: "user-centric",
    title: "Partenariat, Pas d'Externalisation",
    description: "Nos experts deviennent une extension de votre équipe, engagés dans votre succès à long terme.",
    features: ["Intégration d'Équipe Dédiée", "Engagement à Long Terme", "Alignement Culturel", "Communication Fluide"],
    image: "/Background.png" 
  },
  {
    id: "security",
    title: "Rapidité avec Précision",
    description: "Du concept à la livraison, nous agissons rapidement sans jamais compromettre la qualité.",
    features: ["Prototypage Rapide", "Méthodologie Agile", "Assurance Qualité", "Intégration Continue"],
    image: "/Background-1.png"
  },
  {
    id: "analytics",
    title: "Transparence Radicale",
    description: "Pas de coûts cachés, pas de mises à jour vagues. Vous voyez les progrès en temps réel, à chaque étape.",
    features: ["Suivi des Progrès en Temps Réel", "Tarification Transparente", "Rapports Réguliers", "Communication Ouverte"],
    image: "/Background-1.png"
  }
];

const ExpertiseContent = ({ activeFeature }: { activeFeature: ExpertiseItem }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 w-full relative min-h-[320px] md:min-h-[400px]"> 
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeFeature.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 w-full"
        >
          <h3 className="text-[24px] sm:text-[32px] lg:text-[40px] leading-[32px] sm:leading-[40px] lg:leading-[51px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef] mb-[10px]">
            {activeFeature.title}
          </h3>
          
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[24px] lg:leading-[26px] -tracking-[0.16px] font-onest font-normal mb-[16px] sm:mb-[22px] text-[#adadad]/80">
            {activeFeature.description}
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
            {activeFeature.features.map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-3"
              >
                <Image
                  src={"/check-circle-1.svg"}
                  width={20}
                  height={20}
                  alt="Check Icon"
                  className="sm:w-6 sm:h-6"
                />
                <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] font-onest font-normal text-[#adadad]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function ExpertiseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const distinctSections = expertiseData.length;

  const updateIndexFromPosition = (normalizedY: number) => {
    // normalizedY is 0 to 1
    // Map to 0 to distinctSections - 1
    // We want the whole range to cover 0 to N.
    // e.g. 0-0.25 -> 0, 0.25-0.5 -> 1...
    const rawIndex = Math.floor(normalizedY * distinctSections);
    const clampedIndex = Math.max(0, Math.min(distinctSections - 1, rawIndex));
    setCurrentIndex(clampedIndex);
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollTrackRef.current) {
      const rect = scrollTrackRef.current.getBoundingClientRect();
      const clickY = e.clientY - rect.top;
      const trackHeight = rect.height;
      updateIndexFromPosition(clickY / trackHeight);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && scrollTrackRef.current) {
        const rect = scrollTrackRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;
        const trackHeight = rect.height;
        const position = Math.max(0, Math.min(1, mouseY / trackHeight));
        updateIndexFromPosition(position);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const lastWheelTime = useRef(0);
  
  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 500) return; // Debounce 500ms

    const delta = e.deltaY;
    if (Math.abs(delta) > 10) {
       if (delta > 0 && currentIndex < distinctSections - 1) {
           setCurrentIndex(prev => prev + 1);
            lastWheelTime.current = now;
       } else if (delta < 0 && currentIndex > 0) {
           setCurrentIndex(prev => prev - 1);
            lastWheelTime.current = now;
       }
    }
  };

  const currentFeature = expertiseData[currentIndex];

  return (
    <section 
      id="services" 
      ref={containerRef}
      onWheel={handleWheel} // Attach wheel listener
      className="relative bg-transparent w-full py-12 px-6 sm:py-16 sm:px-8 md:py-20 md:px-12 lg:py-[100px] lg:px-[100px]"
    >
        <div className="flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-[60px] w-full max-w-[1440px] mx-auto">
          
          {/* Frame 1: Header */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
            <div className="inline-flex items-center gap-2">
                <Image src={"/award.svg"} width={22} height={22} alt="Award Icon" />
              <span className="text-[18px] sm:text-[24px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
                Our Expertise
              </span>
            </div>
            
                <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[40px] sm:leading-[52px] lg:leading-[64px] mb-[10px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
              Solutions Built for Your Growth
            </h2>
          </div>

          {/* Frame 2: Content Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl">
            {/* Left Div: Text and List */}
            <ExpertiseContent activeFeature={currentFeature} />

            {/* Right Div: Image with Scrollbar */}
            <div className="flex-1 relative flex items-center gap-4 sm:gap-6 w-full justify-end">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex-1 max-w-[600px] aspect-[4/3] md:aspect-auto md:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentFeature.image}
                    initial={{ opacity: 0.6, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.6 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                      <Image 
                        src={currentFeature.image} 
                        alt={currentFeature.title}
                        className="w-full h-full object-cover"
                        width={562}
                        height={568}
                      />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Vertical Scrollbar - Desktop only */}
              <div className="hidden md:flex flex-col items-center justify-between h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] py-4 pl-4 select-none">
                <span className="text-xs leading-[18px] text-[#adadad] font-medium min-w-[16px] text-center">01</span>
                
                <div 
                  ref={scrollTrackRef}
                  onClick={handleTrackClick}
                  className="flex flex-col items-center justify-start flex-1 w-1 bg-[#232323] rounded-full mx-4 relative overflow-hidden cursor-pointer"
                >
                    {/* The Thumb */}
                    <motion.div 
                      className="w-full bg-white rounded-full absolute left-0 right-0 mx-auto"
                      onMouseDown={handleMouseDown}
                      // Animate position based on index
                      animate={{
                        top: `${(currentIndex / distinctSections) * 100}%`,
                        height: `${(1 / distinctSections) * 100}%`
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{
                          width: '4px', // Ensure it fills the track width or slightly wider? Track is w-1 (4px).
                          cursor: 'grab'
                      }}
                    />
                </div>
                
                <span className="text-xs text-[#adadad] font-medium min-w-[16px] text-center">04</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
