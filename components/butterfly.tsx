"use client"

import { motion } from "framer-motion"

interface ButterflyProps {
  className?: string
  delay?: number
  size?: "sm" | "md" | "lg"
}

export function Butterfly({ className = "", delay = 0, size = "md" }: ButterflyProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  }

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      {/* Left wing */}
      <motion.path
        d="M50 50 C30 30, 10 35, 15 55 C10 75, 30 80, 50 50"
        fill="currentColor"
        fillOpacity={0.6}
        animate={{ 
          d: [
            "M50 50 C30 30, 10 35, 15 55 C10 75, 30 80, 50 50",
            "M50 50 C35 35, 20 38, 22 55 C20 72, 35 75, 50 50",
            "M50 50 C30 30, 10 35, 15 55 C10 75, 30 80, 50 50"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay 
        }}
      />
      {/* Right wing */}
      <motion.path
        d="M50 50 C70 30, 90 35, 85 55 C90 75, 70 80, 50 50"
        fill="currentColor"
        fillOpacity={0.6}
        animate={{ 
          d: [
            "M50 50 C70 30, 90 35, 85 55 C90 75, 70 80, 50 50",
            "M50 50 C65 35, 80 38, 78 55 C80 72, 65 75, 50 50",
            "M50 50 C70 30, 90 35, 85 55 C90 75, 70 80, 50 50"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay 
        }}
      />
      {/* Body */}
      <ellipse cx="50" cy="50" rx="3" ry="15" fill="currentColor" />
      {/* Antennae */}
      <path d="M48 36 Q45 28, 40 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M52 36 Q55 28, 60 25" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </motion.svg>
  )
}

export function FloatingButterflies() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left butterfly */}
      <motion.div
        className="absolute top-20 left-10 text-primary/30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Butterfly size="lg" delay={0.2} />
      </motion.div>

      {/* Top right butterfly */}
      <motion.div
        className="absolute top-40 right-20 text-accent/25"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Butterfly size="md" delay={0.5} />
      </motion.div>

      {/* Middle left butterfly */}
      <motion.div
        className="absolute top-[60%] left-5 text-primary/20"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Butterfly size="sm" delay={0.8} />
      </motion.div>

      {/* Bottom right butterfly */}
      <motion.div
        className="absolute bottom-40 right-10 text-accent/30"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Butterfly size="lg" delay={1} />
      </motion.div>

      {/* Center floating butterfly */}
      <motion.div
        className="absolute top-[30%] right-[30%] text-primary/15"
        animate={{
          y: [0, -30, 0],
          x: [0, 25, 0],
          rotate: [0, 20, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Butterfly size="md" delay={1.2} />
      </motion.div>
    </div>
  )
}
