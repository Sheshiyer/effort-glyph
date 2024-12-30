"use client"

import { motion } from "framer-motion"
import { BentoGridItem } from "../components/ui/bento-grid"
import { Shield, Zap, BarChart, FileCheck, Users, Lock } from 'lucide-react'

export const AboutSection = () => {
  const items = [
    {
      title: "Immutable NFTs",
      description: "Secure and permanent proof of your professional contributions on the blockchain.",
      icon: <Shield className="w-12 h-12 text-[#2962FF]" />,
      className: "col-span-2 row-span-2 hover:bg-white/10 transition-colors",
    },
    {
      title: "Gasless Transfers",
      description: "Receive your NFTs without any gas fees for the first transfer.",
      icon: <Zap className="w-6 h-6 text-[#00E5FF]" />,
      className: "col-span-1 hover:bg-white/10 transition-colors",
    },
    {
      title: "Work Tracking",
      description: "Automated work tracking and blockchain-verified reference letters.",
      icon: <BarChart className="w-6 h-6 text-[#2962FF]" />,
      className: "col-span-1 hover:bg-white/10 transition-colors",
    },
    {
      title: "Verified Records",
      description: "Blockchain-backed verification of your professional achievements.",
      icon: <FileCheck className="w-6 h-6 text-[#00E5FF]" />,
      className: "col-span-1 hover:bg-white/10 transition-colors",
    },
    {
      title: "Team Integration",
      description: "Seamless integration with existing team workflows and tools.",
      icon: <Users className="w-6 h-6 text-[#2962FF]" />,
      className: "col-span-1 hover:bg-white/10 transition-colors",
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security for all your professional data.",
      icon: <Lock className="w-6 h-6 text-[#00E5FF]" />,
      className: "col-span-1 hover:bg-white/10 transition-colors",
    },
  ]

  return (
    <section className="py-24 bg-black" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About EffortGlyph
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A pioneering Web3 platform that tokenizes employee and intern work contributions into proof-of-work NFTs.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Feature */}
          <div className="col-span-2 row-span-2">
            <BentoGridItem
              title={items[0].title}
              description={items[0].description}
              icon={items[0].icon}
              className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl h-full"
            />
          </div>
          {/* Other Features */}
          {items.slice(1).map((item, i) => (
            <div key={i} className="col-span-1">
              <BentoGridItem
                title={item.title}
                description={item.description}
                icon={item.icon}
                className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
