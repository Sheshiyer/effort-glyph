"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Button } from "./ui/button"
import { CardSection } from "./card-section"

export const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !ctaRef.current || !containerRef.current) return

    // Create animation timeline with enhanced easing
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "expo.out",
        duration: 1
      }
    })

    // Simple fade and slide animations
    tl.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
    }, "-=0.6")
    .from(ctaRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, "-=0.4")

    // Cleanup
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00E5FF15,transparent_70%)] animate-[pulse_4s_ease-in-out_infinite]" />
      <div ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 backdrop-blur-sm bg-black/5 border border-white/10 rounded-2xl p-12 shadow-2xl">
          {/* Title Section */}
          <div className="text-center md:text-left md:flex-1 max-w-2xl mx-auto md:mx-0">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.1)] space-y-6">
              <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-gradient leading-tight text-glow">
                Verify Your Excellence
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-2xl text-white/90 font-medium">
                Transform Achievements Into Digital Proof Forever
              </p>
              <div ref={ctaRef} className="pt-4">
                <Button size="lg" variant="cyber" className="shadow-lg shadow-cyan-500/20 text-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Card Section - Hidden on mobile, shown on md and above */}
          <div className="hidden md:block md:flex-1">
            <CardSection />
          </div>

          {/* Card Section - Shown on mobile, hidden on md and above */}
          <div className="md:hidden w-full">
            <CardSection />
          </div>
        </div>
      </div>
    </section>
  )
}
