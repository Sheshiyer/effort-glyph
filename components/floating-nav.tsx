"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  name: string
  link: string
}

export const FloatingNav = ({ navItems }: { navItems: NavItem[] }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 inset-x-0 h-16 bg-black/50 backdrop-blur-lg z-50"
        >
          <nav className="container h-full mx-auto flex items-center justify-between px-4">
            <a href="#" className="text-2xl font-bold text-white">
              EffortGlyph
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm bg-[#2962FF] hover:bg-[#2962FF]/80 text-white rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
