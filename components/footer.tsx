"use client"

import { motion } from "framer-motion"
import { Butterfly } from "./butterfly"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Butterfly size="sm" className="text-primary" />
            <span className="text-foreground font-semibold">Jasmine Nalasa</span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Embracing transformation, one line of code at a time.
          </p>

          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
