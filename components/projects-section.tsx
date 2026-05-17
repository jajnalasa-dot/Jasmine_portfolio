"use client"

import { motion } from "framer-motion"
import { Butterfly } from "./butterfly"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "Campus Event Manager",
    description: "A web application for managing university events, featuring registration, notifications, and admin dashboard for event organizers.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Student Task Tracker",
    description: "A productivity app designed for students to manage assignments, deadlines, and study schedules with calendar integration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Prototype",
    description: "A full-stack e-commerce solution with product catalog, cart functionality, and payment integration for local businesses.",
    tags: ["React", "Express", "Stripe", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with real-time data, forecasts, and location-based suggestions for activities.",
    tags: ["JavaScript", "API Integration", "CSS3", "Responsive"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-secondary/30 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-border" />
        <motion.div
          className="absolute top-20 right-20 text-primary/10"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Butterfly size="lg" delay={0.5} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-primary" />
            <span className="text-muted-foreground text-sm tracking-widest uppercase">
              Projects
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Creative <span className="text-primary italic">Flight</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each project represents a stage in my metamorphosis as a developer — 
            from cocoon ideas to fully-formed digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project header with gradient */}
              <div className="h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary relative overflow-hidden">
                <motion.div
                  className="absolute bottom-2 right-2 text-primary/30"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Butterfly size="md" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/5">0{index + 1}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
