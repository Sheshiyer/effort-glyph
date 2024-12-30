import "./globals.css"
import { Inter } from 'next/font/google'
import { cn } from "../lib/utils"
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "EffortGlyph - Transform Your Professional Journey",
  description: "Turn your career milestones into unique digital assets with EffortGlyph.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("dark antialiased", inter.variable)}>
      <body className="min-h-screen relative">
        <div className="fixed inset-0 -z-50">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(0, 0, 0)"
            gradientBackgroundEnd="rgb(0, 0, 20)"
            firstColor="41, 98, 255"
            secondColor="0, 229, 255"
            thirdColor="41, 98, 255"
            fourthColor="0, 229, 255"
            fifthColor="41, 98, 255"
            pointerColor="41, 98, 255"
            size="80%"
            blendingValue="soft-light"
            className="opacity-30"
            interactive={false}
          />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
