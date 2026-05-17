"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Butterfly } from "./butterfly"
import Image from "next/image"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  image?: string
  images?: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "Portfolio",
    description: "A web application to showcase my projects as a computer science student.",
    tags: ["Typescript", "Node.js", "Supabase", "Tailwind CSS"],
    image: "/images/Projects/Portfolio/Screenshot 2026-05-17 152044.png",
    images: [
      "/images/Projects/Portfolio/Screenshot 2026-05-17 152044.png",
    ],
  },
  {
    title: "Sebu-Cha POS",
    description: "A productivity app designed for students to manage assignments, deadlines, and study schedules with calendar integration.",
    tags: ["TypeScript", "Node.js", "Supabase"],
    image: "/images/Projects/Sebu-Cha POS/Screenshot 2026-05-17 151742.png",
    images: [
      "/images/Projects/Sebu-Cha POS/Screenshot 2026-05-17 151742.png",
      "/images/Projects/Sebu-Cha POS/Screenshot 2026-05-17 151752.png",
      "/images/Projects/Sebu-Cha POS/Screenshot 2026-05-17 151802.png",
    ],
    liveUrl: "https://pos-milktea.vercel.app/pos",
  },
 
]

export function ProjectsSection() {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  function openGallery(images: string[], start = 0) {
    setGalleryImages(images)
    setCurrentIndex(start)
    setGalleryOpen(true)
  }

  function closeGallery() {
    setGalleryOpen(false)
    setGalleryImages([])
    setCurrentIndex(0)
  }

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
              {/* Project header with image (falls back to gradient) */}
              <div className="h-32 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary relative overflow-hidden">
                {project.image && (
                  <div className="absolute inset-0">
                    <button
                      type="button"
                      onClick={() => project.images ? openGallery(project.images, 0) : null}
                      className="absolute inset-0 z-30 cursor-zoom-in"
                      aria-label={project.images ? `Open ${project.title} gallery` : project.title}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  </div>
                )}
                <motion.div
                  className="absolute bottom-2 right-2 text-primary/30 z-20 pointer-events-none"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Butterfly size="md" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
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

      {galleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeGallery}
            aria-hidden
          />

          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-muted-foreground">{currentIndex + 1} / {galleryImages.length}</div>
              <button
                className="p-2 rounded-full hover:bg-secondary"
                onClick={closeGallery}
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-card rounded-lg overflow-hidden w-full h-[70vh] flex items-center justify-center">
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white z-20"
                onClick={() => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={galleryImages[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white z-20"
                onClick={() => setCurrentIndex((i) => (i + 1) % galleryImages.length)}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
