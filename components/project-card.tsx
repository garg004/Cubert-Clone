"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.1 * index,
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      data-hoverable="true"
      onClick={onClick}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6">
        <motion.h3
          className="text-2xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
        >
          {project.category}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.4 + 0.1 * index }}
          className="h-[1px] bg-gradient-to-r from-purple-500 to-blue-500"
        />

        <motion.div
          className="mt-4 flex items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + 0.1 * index }}
        >
          <span className="text-sm font-medium text-purple-300 mr-2">Explore</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M1 8H15M15 8L8 1M15 8L8 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-300"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}

