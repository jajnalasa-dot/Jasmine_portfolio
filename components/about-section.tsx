"use client"

import { motion } from "framer-motion"
import { Butterfly } from "./butterfly"

export function AboutSection() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Html/CSS",
    "Next.js",
    "SQL",
    "Git",
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-px bg-primary" />
                <span className="text-muted-foreground text-sm tracking-widest uppercase">
                  About
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Like a butterfly emerging,{" "}
                <span className="text-primary italic">I&apos;m transforming</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a passionate Computer Science student at the University of Bohol, 
                currently in my 3rd year and ready to spread my wings as a 4th year 
                student this coming August.
              </p>
              <p>
                My journey in tech is like metamorphosis — constantly evolving, learning, 
                and transforming. I believe in the beauty of code that not only works 
                but creates meaningful experiences.
              </p>
              <p>
                This June, I&apos;ll be starting my OJT internship, taking another step 
                in my transformation from student to professional developer.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Butterfly size="sm" className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-primary/5 p-6 rounded-2xl border border-primary/10"
              >
                <p className="text-4xl font-bold text-primary">3+</p>
                <p className="text-muted-foreground text-sm mt-1">Years of Coding</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-accent/5 p-6 rounded-2xl border border-accent/10"
              >
                <p className="text-4xl font-bold text-accent">5+</p>
                <p className="text-muted-foreground text-sm mt-1">Projects Built</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
