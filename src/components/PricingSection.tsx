"use client";

import { Check, Zap, Gauge, TrendingUp } from "lucide-react";
import Image from "next/image";

interface PricingTier {
  id: string;
  name: string;
  icon: React.ReactNode;
  price: string;
  period: string;
  savings: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonVariant: "dark" | "light";
}

const pricingTiers: PricingTier[] = [
  {
    id: "integration",
    name: "Integration",
    icon: "/SVG-1.svg",
    price: "€4,500",
    period: "/month",
    savings: "Save €1,500/Month Vs Hiring",
    description: "Ideal for: Startups and SMEs with specific technical needs",
    features: [
      "1 dedicated technical profile",
      "Profile switch within 30 days",
      "Monthly reporting",
      "Standard working hours (40h/week)",
      "Email & chat support",
      "Minimum commitment: 12 months",
    ],
    buttonVariant: "dark",
  },
  {
    id: "flex",
    name: "Flex",
    icon: "/SVG-6.svg",
    price: "€6,200",
    period: "/month",
    savings: "Save €2,300/Month Vs Hiring",
    description: "Ideal for: Companies with evolving projects and changing needs",
    features: [
      "Maximum flexibility to adapt to your technical project evolution",
      "1 senior technical profile with quick switch",
      "Minimum commitment: 6 months",
      "Profile switch within 15 days",
      "Priority email & chat support",
      "Enhanced documentation & handover",
      "Extended working hours (50h/week)",
    ],
    isPopular: true,
    buttonVariant: "light",
  },
  {
    id: "performance",
    name: "Performance",
    icon: "/chart-line-up-2.svg",
    price: "€18,900",
    period: "/month",
    savings: "Save €12,000/Month Vs Hiring",
    description: "Ideal for: Large companies and complex strategic projects",
    features: [
      "Complete solution for large-scale projects requiring a dedicated team",
      "Team of 5 dedicated senior experts",
      "Minimum commitment: 2 months",
      "Lead tech + Product Owner included",
      "24/7 priority support & hotline",
      "Full agile project management",
      "Custom daily reporting & dashboards",
      "24/7 working hours coverage",
      "Dedicated Slack workspace",
    ],
    buttonVariant: "dark",
  },
];

export default function PricingSection() {
  return (
    <section className="relative z-10 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-[5px] text-purple-500 mb-4">
              <Image
                       src={"/euro.svg"}
                       alt="Technology Icon"
                       width={22}
                       height={22}
                     />
            <span className="text-[24px] leading-[24px] text-[#A594FD] font-onest font-[400] -tracking-[0.24px]">Our Pricing</span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] leading-normal font-onest font-[500] -tracking-[1.76px] text-[#F1F1EF] mb-4">
            Our Custom Offers
          </h2>
          <p className="text-center font-onest font-[400] text-[16px] sm:text-[18px] leading-[26px] -tracking-[0.16px] text-[#adadad]/80 max-w-[594px] mx-auto">
            A solution tailored to every need and ambition. Discover our formulas
            for accessing technical excellence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="relative flex flex-col p-8 rounded-[16px] border border-[rgba(255,255,255,0.02)] transition-all bg-gradient-to-b from-[#101010] to-[#101010]/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-[6px] px-[8px] py-[4px] rounded-full bg-[rgba(255,255,255,0.10)] w-fit text-gray-400">
                  {typeof tier.icon === "string" ? (
                    <Image
                      src={tier.icon}
                      alt="Technology Icon"
                      width={12}
                      height={12}
                    />
                  ) : (
                    tier.icon
                  )}
                  <span className="text-sm font-medium">{tier.name}</span>
                </div>

                {tier.isPopular && (
                  <span className="flex items-start px-[12px] py-[4px] rounded-[100px] bg-[#FFF] text-[#0A0A0A] font-onest text-[11.2px] font-[700] leading-[17.92px] tracking-[0.56px] uppercase">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-[32px] lg:text-[48px] leading-[48px] font-onest font-[500] tracking-[1.688px] text-[#FAFAFA]">{tier.price}</span>
                <span className="text-[#737373] text-[16px] leading-[25.6px] font-onest font-[400]">{tier.period}</span>
              </div>

              {/* Savings Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-[6px] px-[8px] py-[4px] rounded-full bg-[rgba(1,191,115,0.10)] text-[#01BF73] text-[12px] font-onest font-[400] leading-[16px] tracking-[0.094px] capitalize">
                  {tier.savings}
                </span>
              </div>

              {/* Description */}
              <p className="text-[#737373] text-[18px] leading-[26px] font-onest font-[400] mb-6">
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Image
                                      src={"/check-circle-1.svg"}
                                      width={20}
                                      height={20}
                                      alt="Check Icon"
                                      className="sm:w-6 sm:h-6"
                                    />
                    <span className="text-[#ADADAD] text-[16px] font-onest font-[400] leading-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`flex items-center justify-center w-full h-[50px] px-6 py-3 shrink-0 rounded-[8px] font-medium transition-all mt-auto ${
                  tier.buttonVariant === "light"
                    ? "bg-[#E6E6E6] text-black hover:bg-[#d4d4d4] shadow-[0_0_0_2px_rgba(0,0,0,0.50),0_0_14px_0_rgba(255,255,255,0.25),inset_0_-1px_0.4px_0_rgba(0,0,0,0.20),inset_0_1px_0.4px_0_#FFF]"
                    : "bg-[#1A1A1A] text-white border border-[rgba(255,255,255,0.08)] hover:bg-[#252525]"
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
