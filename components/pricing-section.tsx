"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Basic achievement tracking",
      "Digital certificate generation",
      "Public profile page",
      "Share on social media",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "Custom certificate designs",
      "Priority support",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integration",
      "SLA guarantee",
      "Advanced security",
      "Team management",
    ],
  },
]

export const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1)

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
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
            Choose Your Plan
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Select the perfect plan for your professional journey. Upgrade or downgrade at any time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white/5 backdrop-blur-sm rounded-lg p-8 border ${
                selectedPlan === index
                  ? "border-[#2962FF]"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setSelectedPlan(index)}
            >
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-white/80">
                    <Check className="w-5 h-5 text-[#2962FF] mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={
                  selectedPlan === index
                    ? "w-full bg-[#2962FF] hover:bg-[#2962FF]/80 text-white"
                    : "w-full bg-white/10 hover:bg-white/20 text-white"
                }
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
