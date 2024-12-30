"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    content: "EffortGlyph has revolutionized how I showcase my work. The NFTs provide tangible proof of my contributions.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Intern",
    content: "As an intern, EffortGlyph gave me a unique way to stand out. The blockchain-verified references are invaluable.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "EffortGlyph has streamlined our team's recognition process. It's a game-changer for remote work.",
  },
]

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-black" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with EffortGlyph.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 rounded-lg text-center"
            >
              <p className="text-white/80 text-lg mb-4">
                "{testimonials[currentTestimonial].content}"
              </p>
              <p className="text-white font-semibold">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="text-white/60">
                {testimonials[currentTestimonial].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

