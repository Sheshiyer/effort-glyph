"use client"

import { FloatingNav } from "../components/floating-nav"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { FeaturesSection } from "../components/features-section"
import { HowItWorksSection } from "../components/how-it-works-section"
import { BenefitsSection } from "../components/benefits-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { PricingSection } from "../components/pricing-section"
import { FaqSection } from "../components/faq-section"
import { CtaSection } from "../components/cta-section"
import { Footer } from "../components/footer"

export default function Page() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "How It Works",
      link: "#how-it-works",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
