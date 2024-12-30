"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export const CtaSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF12,transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the EffortGlyph Movement
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Start turning your professional achievements into valuable digital assets today.
          </p>
          <Button size="lg" className="bg-[#2962FF] hover:bg-[#2962FF]/80 text-white px-8">
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
