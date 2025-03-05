"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import CustomCursor from "@/components/custom-cursor"
import StarField from "@/components/star-field"
import ProjectCard from "@/components/project-card"
import { ProjectModal } from "@/components/project-modal"
import TextReveal from "@/components/text-reveal"
import { projects } from "@/data/projects"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -100])
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.2], [100, 0])

  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <StarField />

      <div className="fixed top-0 left-0 w-full z-50 px-8 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-widest">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              C u b .
            </motion.div>
          </Link>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-sm uppercase tracking-widest"
          >
            Menu
          </motion.button>
        </div>
      </div>

      <div className="container mx-auto px-4" ref={containerRef}>
        <motion.section
          className="h-screen flex flex-col justify-center items-center"
          style={{ opacity: headerOpacity, y: headerY }}
        >
          <div className="text-center">
            <TextReveal text="We create" className="text-7xl md:text-9xl font-bold mb-4" delay={0.5} />
            <TextReveal text="digital experiences" className="text-7xl md:text-9xl font-bold mb-12" delay={0.8} />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
              className="text-xl text-purple-300 max-w-2xl mx-auto"
            >
              A digital product agency with a passion for design and innovation
            </motion.p>
          </div>
        </motion.section>

        <motion.section className="min-h-screen py-24" style={{ opacity: contentOpacity, y: contentY }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <TextReveal text="Our Projects" delay={0.2} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(index)} />
            ))}
          </div>
        </motion.section>

        <motion.section className="min-h-screen py-24" style={{ opacity: contentOpacity }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
            <TextReveal text="Our Services" delay={0.2} />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="Creating responsive and interactive web experiences with cutting-edge technologies."
              icon="🌐"
              delay={0.2}
            />
            <ServiceCard
              title="Mobile Apps"
              description="Native and cross-platform mobile applications with smooth animations and intuitive UX."
              icon="📱"
              delay={0.4}
            />
            <ServiceCard
              title="UI/UX Design"
              description="User-centered design solutions that are both beautiful and functional."
              icon="🎨"
              delay={0.6}
            />
          </div>
        </motion.section>

        <motion.section className="min-h-screen py-24 flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            <TextReveal text="Let's work together" delay={0.2} />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-purple-300 mb-8 max-w-2xl">
              Have a project in mind? We'd love to hear about it. Let's create something amazing together.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-lg font-medium"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.section>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal project={projects[selectedProject]} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2023 Cuberto. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  delay: number
}

function ServiceCard({ title, description, icon, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="p-8 rounded-lg border border-gray-800 bg-gradient-to-b from-transparent to-purple-900/10 backdrop-blur-sm"
    >
      <motion.div
        className="text-4xl mb-4"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: delay + 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

