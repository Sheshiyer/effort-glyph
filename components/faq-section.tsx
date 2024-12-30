"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How do gasless transfers work?",
    answer: "We cover the gas fees for your first NFT transfer. After connecting your wallet, you can claim your NFT without paying any transaction fees.",
  },
  {
    question: "Can I use EffortGlyph across different platforms?",
    answer: "Yes! EffortGlyph integrates with popular time-tracking and project management tools like Clockify, making it easy to sync your work across platforms.",
  },
  {
    question: "How are my achievements verified?",
    answer: "Your work is verified through our integration with time-tracking platforms and employer confirmation. Each NFT contains metadata about your contributions.",
  },
  {
    question: "What blockchain does EffortGlyph use?",
    answer: "EffortGlyph uses Ethereum for its NFTs, ensuring wide compatibility and security for your professional achievements.",
  },
]

export const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about EffortGlyph and how it works.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white/5 rounded-lg"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 mt-1 p-4 rounded-lg"
                  >
                    <p className="text-white/80">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

