"use client";

import { Check, Zap, Gauge, TrendingUp } from "lucide-react";

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
    icon: <Zap className="w-4 h-4" />,
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
    icon: <Gauge className="w-4 h-4" />,
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
    icon: <TrendingUp className="w-4 h-4" />,
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
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-purple-500 mb-4">
            <span className="text-2xl">💰</span>
            <span className="text-base font-medium">Our Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-gray-200">
            Our Custom Offers
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl">
            A solution tailored to every need and ambition. Discover our formulas
            for accessing technical excellence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className="relative bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col"
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                {tier.icon}
                <span className="text-sm font-medium">{tier.name}</span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-400 text-lg">{tier.period}</span>
              </div>

              {/* Savings Badge */}
              <div className="mb-6">
                <span className="text-emerald-400 text-sm font-medium">
                  {tier.savings}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {tier.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all mt-auto ${
                  tier.buttonVariant === "light"
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-[#0a0a0a] text-white border border-white/10 hover:bg-[#1a1a1a]"
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
