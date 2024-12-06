"use client";

import ClientSection from "@/components/landing/client-section";
import { CTASection } from "@/components/landing/cta-section";
import FeatureSection from "@/components/landing/feature-section";
import { FeedbackSection } from "@/components/landing/feedback-section";
import HeroSection from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

export default function Page() {
  return (
    <>
      <HeroSection />
      <ClientSection />
      <SphereMask />
      <FeatureSection />
      <PricingSection />
      <FeedbackSection />
      <CTASection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
