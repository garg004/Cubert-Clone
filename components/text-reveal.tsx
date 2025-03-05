"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const words = text.split(" ")
  const containerRef = useRef<HTMLDivElement>(null)

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    }),
  }

  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-wrap">
        {words.map((word, index) => (
          <motion.span key={index} className="mr-2 mb-2 inline-block" variants={child}>
            {word}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

