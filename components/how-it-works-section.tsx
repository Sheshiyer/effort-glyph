"use client"

import { motion } from "framer-motion"
import { Wallet, Clock, Award, Share2 } from 'lucide-react'

const steps = [
  {
    title: "Connect Your Wallet",
    description: "Connect your MetaMask or preferred wallet to get started.",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    title: "Sync Your Work",
    description: "Sync your work with Clockify or other supported platforms.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Mint Your NFT",
    description: "Mint your NFT with embedded work metrics and achievements.",
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: "Claim Your NFT",
    description: "Claim your NFT via gasless transfer and showcase your work.",
    icon: <Share2 className="w-6 h-6" />,
  },
]

export const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-black" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Get started with EffortGlyph in four simple steps.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-lg text-center"
            >
              <div className="bg-[#2962FF] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

