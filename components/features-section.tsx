"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"
import { CuboidIcon as Cube, Zap, Lock, BarChart } from 'lucide-react'

const features = [
  {
    title: "Achievement Tokenization",
    description:
      "Convert your professional accomplishments into unique digital tokens that serve as verifiable proof of your achievements.",
    icon: Cube,
  },
  {
    title: "Instant Verification",
    description:
      "Enable quick and secure verification of your credentials through our blockchain-based system.",
    icon: Zap,
  },
  {
    title: "Secure Storage",
    description:
      "Your achievements are stored securely using advanced encryption and distributed storage technologies.",
    icon: Lock,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track the impact and recognition of your professional achievements with detailed analytics.",
    icon: BarChart,
  },
]

export const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0)
  const ActiveIcon = features[activeFeature].icon

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF12,transparent_70%)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover how EffortGlyph revolutionizes the way you showcase and verify your professional achievements.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveFeature(index)}
                  className={cn(
                    "w-full text-left px-6 py-4 rounded-lg transition-colors",
                    activeFeature === index
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <feature.icon className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <AnimatePresence mode="wait">
                        {activeFeature === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-white/60"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
          <div className="lg:h-[450px] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF24,transparent_70%)]" />
            <div className="relative h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <ActiveIcon className="w-32 h-32 text-[#2962FF]" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
