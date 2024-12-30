"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface BentoGridProps {
  className?: string
  children?: React.ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  )
}

interface BentoGridItemProps {
  className?: string
  title?: string | React.ReactNode
  description?: string
  header?: React.ReactNode
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        {title && <div className="font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>}
        {description && <div className="text-sm text-neutral-500 dark:text-neutral-400">{description}</div>}
        {children}
      </div>
    </motion.div>
  )
}
