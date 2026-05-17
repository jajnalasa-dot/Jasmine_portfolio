"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Butterfly } from "./butterfly"

export function Navigation() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Butterfly size="sm" className="text-primary group-hover:text-accent transition-colors" />
          <span className="text-xl font-semibold tracking-tight text-foreground">Jasmine</span>
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.3 }}
            >
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
