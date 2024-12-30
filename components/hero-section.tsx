"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF12,transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Professional Journey into Digital Excellence
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            EffortGlyph turns your career milestones into unique digital assets, creating a verifiable record of your professional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#2962FF] hover:bg-[#2962FF]/80 text-white">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
