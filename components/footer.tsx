"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">EffortGlyph</h3>
            <p className="text-white/60 max-w-xs">
              Transforming professional achievements into valuable digital assets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 md:mt-0"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-white">About</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white">Features</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white">FAQ</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60">
            © {new Date().getFullYear()} EffortGlyph. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

