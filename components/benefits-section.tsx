"use client"

import { motion } from "framer-motion"
import { Shield, Zap, BarChart } from 'lucide-react'

const benefits = [
  {
    title: "Proof of Contributions",
    description: "Showcase your work with blockchain-verified NFTs.",
    icon: <Shield className="w-6 h-6 text-[#2962FF]" />,
  },
  {
    title: "Blockchain Reference Letters",
    description: "Get immutable, verifiable professional references.",
    icon: <BarChart className="w-6 h-6 text-[#00E5FF]" />,
  },
  {
    title: "Gasless Transfers",
    description: "Claim your first NFT without any transaction fees.",
    icon: <Zap className="w-6 h-6 text-[#2962FF]" />,
  },
]

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-black" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benefits for Employees and Interns
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Discover how EffortGlyph empowers your professional journey.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/80">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

