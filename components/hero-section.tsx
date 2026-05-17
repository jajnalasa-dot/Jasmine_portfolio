"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Butterfly } from "./butterfly"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Butterfly size="sm" className="text-primary" />
                <span className="text-muted-foreground text-sm tracking-widest uppercase">
                  Welcome to my world
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-foreground leading-tight"
              >
                <span className="block">Jasmine</span>
                <span className="block text-primary italic">Nalasa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-md leading-relaxed"
              >
                Computer Science Student at University of Bohol.
                Transforming ideas into elegant digital experiences.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm">
                3rd Year → 4th Year
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                OJT Intern June 2026
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <Image
                  src="/images/Projects/ME.jpg"
                  alt="Jasmine Nalasa"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating butterflies around image */}
              <motion.div
                className="absolute -top-4 -right-4 text-primary"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Butterfly size="md" delay={0.8} />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-6 text-accent"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Butterfly size="lg" delay={1} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
